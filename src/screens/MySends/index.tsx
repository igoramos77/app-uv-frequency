import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Text, Alert, Modal, Switch, View } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather';
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns';

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
interface IActivitiesProps {
  id: number;
  external_id: string;
  descricao: string;
  empresa: string;
  cnpj: string;
  carga_horaria_informada: number;
  carga_horaria_integralizada?: number | null;
  justificativa?: string | null;
  certificado: string;
  status: 'em_validação' | 'aprovado' | 'recusado';
  is_active: boolean;
  create_at: string;
  update_at: string;
  usuario: number;
  curso: number;
  categoria: number;
}

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

export interface IProps {
  lecture: {
    content: string;
    date: string;
    class_id: string;
    id: string;
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
    }[];
  }
}

interface IParamsProps {
  id: string;
}

const dataLessons: ILessonsProps[] = [
  {
    date: "2022-06-06",
    discipline: "Desenvolvimento de Apps",
    theacher: {
      id: '1',
      name: "Tássio",
      photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
    },
    students: [
      {
        id: '1',
        name: "Igor Brown Ramos",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '2',
        name: "Lucas",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '3',
        name: "Guilherme",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '4',
        name: "Vinicius",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '5',
        name: "Gustavo",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '6',
        name: "Pedro",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
    ],
  },
  {
    date: "2022-06-07",
    discipline: "Arquitetura e Projeto de Software ",
    theacher: {
      id: "2",
      name: "Tássio 2",
      photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
    },
    students: [
      {
        id: '2',
        name: "Lucas",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '1',
        name: "Igor Brown Ramos",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '3',
        name: "Guilherme",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '4',
        name: "Vinicius",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '5',
        name: "Gustavo",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '6',
        name: "Pedro",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
    ],
  },
  {
    date: "2022-06-08",
    discipline: "Arquitetura e Projeto de Software ",
    theacher: {
      id: "2",
      name: "Tássio 2",
      photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
    },
    students: [
      {
        id: '2',
        name: "Lucas",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '1',
        name: "Igor Brown Ramos",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '3',
        name: "Guilherme",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '4',
        name: "Vinicius",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '5',
        name: "Gustavo",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '6',
        name: "Pedro",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
    ],
  },
  {
    date: "2022-06-09",
    discipline: "Arquitetura e Projeto de Software ",
    theacher: {
      id: "2",
      name: "Tássio 2",
      photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
    },
    students: [
      {
        id: '2',
        name: "Lucas",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '1',
        name: "Igor Brown Ramos",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '3',
        name: "Guilherme",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '4',
        name: "Vinicius",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '5',
        name: "Gustavo",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '6',
        name: "Pedro",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
    ],
  },
  {
    date: "2022-06-10",
    discipline: "Arquitetura e Projeto de Software ",
    theacher: {
      id: "2",
      name: "Tássio 2",
      photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
    },
    students: [
      {
        id: '2',
        name: "Lucas",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '1',
        name: "Igor Brown Ramos",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '3',
        name: "Guilherme",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '4',
        name: "Vinicius",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
      {
        id: '5',
        name: "Gustavo",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: true,
      },
      {
        id: '6',
        name: "Pedro",
        photoUrl: "https://evorastudio.com.br/wp-content/uploads/2021/04/retrato-corporativo-foto-perfil-profissional-foto-linkedin-24-scaled.jpg",
        presence: false,
      },
    ],
  },
]

export default function MySends({ }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [data, setData] = useState<ILessonsProps[]>(dataLessons);

  const [nextDisabled, setNextDisabled] = useState(false);
  const [backDisabled, setBackDisabled] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [dayIndex, setDayIndex] = useState(0);

  const route = useRoute();
  const { id } = route.params as IParamsProps;

  const backDay = useCallback(() => {
    if (dayIndex >= 0) {
      setDayIndex(oldIndex => oldIndex - 1);
      return;
    }
  }, [dayIndex]);

  const nextDay = useCallback(() => {
    if (dayIndex < dataLessons.length - 1) {
      setDayIndex(oldIndex => oldIndex + 1);
    }
  }, [dayIndex]);

  useEffect(() => {
    if (dayIndex === dataLessons.length - 1) {
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
    console.log(dayIndex)
  }, [dayIndex]);

  /* 
    useFocusEffect(
      useCallback(() => {
        async function loadData() {
          const response = await api.get(`/api/v1/usuarios/${user.id}/atividades/`);
          console.log('LIST ACTIVITIES >>>>>>>>>>>>>>>>>>>');
          console.log(response.data);
          setActivities(response.data);
        }
        loadData();
      }, [])
    );
   */



  return (
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
              {format(parseISO(dataLessons[dayIndex].date), 'dd', { locale: ptBR })}
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
        <Day>{format(parseISO(dataLessons[dayIndex].date), 'eeee', { locale: ptBR })}</Day>
        <DayEx>
          {format(parseISO(dataLessons[dayIndex].date), 'PPP', { locale: ptBR })}
        </DayEx>
      </Footer>

      <ContainerIntro>
        <DisciplineTitle>{data[dayIndex].discipline}</DisciplineTitle>
        <KeyboardAwareScrollView extraHeight={500} showsVerticalScrollIndicator={false}>
          {data[dayIndex].students.map((student, index) => (
            <UserFrequency
              key={index}
              style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
              photoUrl={student.photoUrl}
              name={student.name}
              isPresent={student.presence}
              onChange={(value) => {
                setData(oldData => {
                  const newData = oldData;
                  return newData.map((d) => {
                    if (oldData[dayIndex].date !== d.date) {
                      console.log('d', d)
                      return d;
                    }
                    return {
                      ...d,
                      students: d.students.map((s) => {
                        if (s.id === student.id) {
                          return {
                            ...s,
                            presence: value,
                          }
                        }
                        return s;
                      })
                    }
                  })
                });
              }}
            />
          ))}

          <Button
            background="primary"
            title="Registrar presença!"
            onPress={() => {
              Alert.alert('Presença confirmada com sucesso! 😊');
              navigation.goBack();
            }}
          />
          <Fake>
          </Fake>
        </KeyboardAwareScrollView>
      </ContainerIntro>
    </Container>
  );
}