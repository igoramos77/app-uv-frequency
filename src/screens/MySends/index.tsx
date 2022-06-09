import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, Alert, Modal, Switch, View, ActivityIndicator } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather';
import { format, parseISO, isPast, addDays } from 'date-fns';

import api from '../../services/api';

import {
  Container,
  Header,
  TitleHeader,
  DateChangeContainer,
  DayOfMouthContainer,
  DayNumber,
  Btn,
  ArrowContainer,
  Day,
  Footer,
  ContainerIntro,
  Row,
  Avatar,
  Name,
  AvatarContainer,
  DayEx,
  SwitchContainer,
  StateTextLeft,
  StateTextRight,
  Fake,
  DisciplineTitle,
  BackButtonContianer,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { ptBR } from 'date-fns/locale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../Componets/Forms/Button';
import UserFrequency from '../../Componets/UserFrequency';

export interface ILessonsProps {
  date: string;
  discipline: string;
  theacher: {
    id: string;
    name: string;
    photoUrl?: string;
  };
  students: {
    id: string;
    name: string;
    presence: boolean;
    photoUrl: string;
  }[];
}

interface ILecProps {
  class_id: string;
  id: string;
  date: string;
  content: string;
  subject: {
    id: string;
    code: string;
    name: string;
    course_id: string;
  }
  teacher: {
    id: string;
    name: string;
    photoUrl: string;
  }
  attendance: {
    id: string;
    name: string;
    photoUrl: string;
    presence: boolean;
  }[]
}

interface ILeactureProps {
  class_id: string;
  id: string;
  date: string;
  content: string;
}


interface IParamsProps {
  id: string;
  isGraphNavigation: boolean;
  subject: string;
  date: string;
}

export default function MySends({ }) {
  const navigation = useNavigation();
  const [lectures, setLectures] = useState<ILeactureProps[]>([]);
  const [lecture, setLecture] = useState<ILecProps>({} as ILecProps);

  const [nextDisabled, setNextDisabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);

  const [dayIndex, setDayIndex] = useState(0);

  const [loading, setLoading] = useState(true);


  const route = useRoute();
  const { id, isGraphNavigation, date } = route.params as IParamsProps;

  const backDay = useCallback(() => {
    if (dayIndex >= 0) {
      setDayIndex(oldIndex => oldIndex - 1);
      return;
    }
  }, [dayIndex, lectures]);

  const nextDay = useCallback(() => {
    if (dayIndex < (lectures && (lectures.length - 1))) {
      setDayIndex(oldIndex => oldIndex + 1);
    }
  }, [dayIndex, lectures]);

  useEffect(() => {
    if (dayIndex === (lectures && (lectures.length - 1))) {
      setNextDisabled(true);
    }
    else {
      setNextDisabled(false);
    }

    if (dayIndex === 0) {
      setBackDisabled(true);
    }
    else {
      setBackDisabled(false);
    }
  }, [dayIndex]);

  useEffect(() => {
    if (isGraphNavigation) {
      console.log('idddddddddddddddddddddddddddddddddddddddddddd: ', id);
      const idx = lectures.findIndex((lecture) => lecture.date === date);

      if (idx !== -1) {
        setDayIndex(idx);
      }
      console.log(idx)
    }
    else {
      for (let index = 0; index < lectures.length; index++) {
        if (!isPast(addDays(parseISO(lectures[index].date), 1))) {
          setDayIndex(index);
          return;
        }
        else {
          setDayIndex(lectures.length - 1 || 0);
        }
      }
    }
  }, [lectures]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/api/classes/${id}/lectures`);
        console.log(' >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<');
        console.log(response.data);
        setLectures(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/lectures/${lectures[dayIndex].id}`);
        console.log('LECUREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
        console.log(response.data);
        setLecture(response.data);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    })();
  }, [lectures, dayIndex]);

  const handleSendAttendence = useCallback(async () => {
    try {
      const response = await api.put(`/api/lectures/${lecture.id}/attendance`, {
        attendance: lecture.attendance,
      });
      console.log(response.data);

      if (response.status === 200) {
        Alert.alert('Presença confirmada com sucesso! 😊');
        navigation.goBack();
      }

    } catch (error: any) {
      console.log(error.message);
      Alert.alert('Ops! algo deu errado.')
    }
  }, [lecture.id, lecture.attendance]);

  return (
    <>
      <Container>
        <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <BackButtonContianer>
            <Feather size={32} color="#fff" name="chevron-left" style={{ marginLeft: 20 }} onPress={() => { navigation.goBack() }} />
          </BackButtonContianer>
          <DateChangeContainer>
            <ArrowContainer>
              <Btn onPress={backDay} disabled={backDisabled} style={backDisabled && { backgroundColor: '#ffffff10' }}>
                <Text>
                  <Feather size={14} name="chevron-left" style={!backDisabled ? { fontSize: 25, color: '#fff', } : { fontSize: 25, color: '#ffffff40' }} />
                </Text>
              </Btn>
            </ArrowContainer>
            <DayOfMouthContainer>
              <DayNumber>
                {lectures.length > 0 && format(parseISO(lectures[dayIndex].date), 'dd', { locale: ptBR })}
              </DayNumber>
            </DayOfMouthContainer>
            <ArrowContainer>
              <Btn onPress={nextDay} disabled={nextDisabled} style={nextDisabled && { backgroundColor: '#ffffff10', opacity: 0.4, }}>
                <Text>
                  <Feather size={14} name="chevron-right" style={!nextDisabled ? { fontSize: 25, color: '#fff', } : { fontSize: 25, color: '#ffffff40', }} />
                </Text>
              </Btn>
            </ArrowContainer>
          </DateChangeContainer>
        </Header>
        <Footer>
          <Day>{lectures.length > 0 && format(parseISO(lectures[dayIndex].date), 'eeee', { locale: ptBR })}</Day>
          <DayEx>
            {lectures.length > 0 && format(parseISO(lectures[dayIndex].date), 'PPP', { locale: ptBR })}
          </DayEx>
        </Footer>

        <ContainerIntro>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ height: '100%' }}>
            {loading ? (
              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', height: '200%' }}>
                <ActivityIndicator size="large" color="#ccc" />
              </View>
            ) : (
              <>
                <DisciplineTitle>{lecture.subject?.name}</DisciplineTitle>
                {lecture.attendance && lecture.attendance.map((student, index) => (
                  <UserFrequency
                    key={index}
                    style={index < lecture.attendance.length - 1 && { borderBottomWidth: 1, borderBottomColor: '#ececec' }}
                    photoUrl={student.photoUrl}
                    name={student.name}
                    isPresent={student.presence}
                    onChange={(value) => {

                      setLecture(oldData => {

                        return {
                          ...oldData,
                          attendance: oldData.attendance.map((s) => {

                            if (s.id === student.id) {
                              return {
                                ...s,
                                presence: value,
                              }
                            }
                            return s;
                          })
                        }
                      });
                    }}
                  />
                ))}
                <Button
                  background="primary"
                  title="Registrar presença!"
                  onPress={handleSendAttendence}
                />
              </>
            )}

            <Fake>
            </Fake>
          </KeyboardAwareScrollView>
        </ContainerIntro>
      </Container>
    </>
  );
}