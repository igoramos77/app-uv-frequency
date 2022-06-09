import React, { useState, useEffect, useCallback } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Modal, Dimensions, Alert, View } from 'react-native';

import { ContributionGraph } from "react-native-chart-kit";

import Profile from '../Profile';

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Avatar,
  UserSaudation,
  FirstSaudation,
  Matricule,
  UserName,
  Icon,
  NotFound,
  CloseModal,
  CloseModalBtn,
  LogoutIconContainer,
  Hi,
  GraphContainer,
  GraphInner,
  GraphTitle,
  H1,
  CardsContainer,
  CardsContaineScroll,
  ContainerIntro,
  Fake,
  Title,
  DevelopersContainer,
  DevelopersBtn,
  DevelopersBtnText
} from './styles';

import baseURL from '../../services/baseURL';
import { useAuth } from '../../hooks/auth';
import Feather from '@expo/vector-icons/build/Feather';
import DisciplineCard from '../../Componets/DisciplineCard';
import api from '../../services/api';
import DisciplineCardStudent from '../../Componets/DisciplineCardStudent';
import { addDays, parseISO } from 'date-fns';
import About from '../About';
interface IClassesProps {
  id: string;
  code: string;
  subject: string;
  photoUrl: string;
  attendanceCount: number;
  lessonsCount: number;
  professor: {
    id: string;
    name: string;
    photoUrl: string;
  }
  date: {
    date: string;
  }
}

interface IChartProps {
  id: string;
  subject: string;
  date: string;
  count: number;
}

export default function Dashboard() {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [profileIsVisible, setProfileIsVisible] = useState(false);
  const [modalAboutIsVisible, setModalAboutIsVisible] = useState(false);

  const [classes, setClasses] = useState<IClassesProps[]>([]);
  const [classesProfessor, setClassesProfessor] = useState<IClassesProps[]>([]);
  const [dataChart, setDataChart] = useState<IChartProps[]>([]);

  const [newEndDate, setNewEndDate] = useState<Date>();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await api.get(`/api/users/${user.id}/chart`);
          console.log(response.data);
          setDataChart(response.data);

          const endDate1 = String(dataChart[dataChart.length - 1].date);
          setNewEndDate(parseISO(endDate1));
        } catch (error: any) {
          console.log(error);
        }
      })();
    }, [])
  );

  useEffect(() => {
    if (user.role === 'student') {
      (async () => {
        try {
          const response = await api.get(`${baseURL}/api/users/${user.id}/student/classes`);
          console.log(response.data);
          setClasses(response.data);

        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user.id]);

  useEffect(() => {
    if (user.role === 'professor') {
      (async () => {
        try {
          const response = await api.get(`${baseURL}/api/users/${user.id}/classes`);
          console.log(response.data);
          setClassesProfessor(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user.id]);

  const handleToolTip: any = {};

  const handleKeyPress = useCallback((id, subject, count, date) => {
    if (count !== 0) {
      navigation.navigate('MySends' as never, { id: id, subject: subject, isGraphNavigation: true, date: date } as never)
    } else {
      Alert.alert(`Nenhuma presença registrada para o dia ${date.toLocaleString('pt-BR').split(" ")[0]}`)
    }
  }, []);

  return (
    /* ======================================== PROFESSOR ======================================== */
    <>
      {user.role === 'professor' ? (
        <Container>
          <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <UserContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <UserInfo onPress={() => setProfileIsVisible(true)}>
                <UserSaudation>
                  <Hi>Olá,</Hi>
                  {user.name && <FirstSaudation><UserName>{user?.name.split(" ")[0]}!</UserName></FirstSaudation>}
                  <Matricule>Matrícula: {user.matricula}</Matricule>
                </UserSaudation>
              </UserInfo>
            </UserContainer>
          </Header>

          <GraphContainer style={{
            shadowColor: '#00000050',
            shadowOffset: { width: 2, height: 10 },
            shadowRadius: 20,
            shadowOpacity: 0.3,
            elevation: 1
          }}>
            <GraphInner>
              <GraphTitle>Controle de Frequência</GraphTitle>
              <ContributionGraph
                values={dataChart}
                tooltipDataAttrs={(value) => handleToolTip}
                //@ts-ignore
                onDayPress={({ id, subject, count, date }) => handleKeyPress(id, subject, count, date)}
                endDate={newEndDate && addDays(newEndDate, (29 + new Date().getDay()))}
                numDays={112}
                width={Dimensions.get("window").width - 0}
                height={200}

                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientToOpacity: 0,
                  decimalPlaces: 2,
                  barPercentage: 1,
                  color: (opacity = 1) => `rgba(54,64,81, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(54,64,81, ${opacity})`,
                  barRadius: 8,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                  }
                }}
              />
            </GraphInner>
          </GraphContainer>

          <H1>Minhas Turmas</H1>
          <CardsContainer>
            <CardsContaineScroll>
              {classesProfessor.map((classe, index) => (
                <DisciplineCard
                  key={index}
                  onPress={() => navigation.navigate('MySends' as never, { id: classe.id, subject: classe.subject } as never)}
                  code={classe.code}
                  subject={classe.subject}
                  date={classe.date}
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                />
              ))}
            </CardsContaineScroll>
          </CardsContainer>
          <DevelopersContainer>
            <DevelopersBtn>
              <DevelopersBtnText onPress={() => setModalAboutIsVisible(true)}>Desenvolvido por: Igor, Lucas e Guilherme.</DevelopersBtnText>
            </DevelopersBtn>
          </DevelopersContainer>
        </Container>
      )
        /* ======================================== END PROFESSOR ======================================== */
        :
        /* ======================================== STUDENT ======================================== */
        (
          <Container>
            <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
              <UserContainer>
                <Avatar
                  source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
                />
                <UserInfo onPress={() => setProfileIsVisible(true)}>
                  <UserSaudation>
                    <Hi>Olá,</Hi>
                    {user.name && <FirstSaudation><UserName>{user?.name.split(" ")[0]}!</UserName></FirstSaudation>}
                    <Matricule>Matrícula: {user.matricula}</Matricule>
                  </UserSaudation>
                </UserInfo>
              </UserContainer>
            </Header>

            <ContainerIntro>
              <Title>Minhas Disciplinas ({classes.length})</Title>
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', }}>
                {classes.map((classe, index) => (
                  <DisciplineCardStudent
                    key={index}
                    coverUrl={classe.photoUrl}
                    dayOfWeek={classe.date.date}
                    lessonsCount={classe.lessonsCount}
                    attendanceCount={classe.attendanceCount}
                    professor={classe.professor}
                    subject={classe.subject}
                    onPress={() => navigation.navigate('Disciplina' as never, { id: classe.id, coverUrl: classe.photoUrl, subject: classe.subject, professor: classe.professor } as never)}
                  />
                ))}
                <Fake />
              </KeyboardAwareScrollView>
            </ContainerIntro>
            <DevelopersContainer>
              <DevelopersBtn>
                <DevelopersBtnText onPress={() => setModalAboutIsVisible(true)}>Desenvolvido por: Igor, Lucas e Guilherme.</DevelopersBtnText>
              </DevelopersBtn>
            </DevelopersContainer>
          </Container>
        )
        /* ======================================== STUDENT ======================================== */
      }

      {/* MODALS ========================== */}
      <Modal visible={profileIsVisible} >
        <CloseModal>
          <CloseModalBtn onPress={() => setProfileIsVisible(false)}>
            <Feather size={22} color="#fff" name="x" />
          </CloseModalBtn>
        </CloseModal>
        <Profile />
      </Modal>

      <Modal visible={modalAboutIsVisible} >
        <CloseModal>
          <CloseModalBtn onPress={() => setModalAboutIsVisible(false)}>
            <Feather size={22} color="#fff" name="x" />
          </CloseModalBtn>
        </CloseModal>
        <About />
      </Modal>
    </>
  );
}