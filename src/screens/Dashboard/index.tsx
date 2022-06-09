import React, { useState, useEffect, useCallback } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Text, Modal, Dimensions, View } from 'react-native';

import { BarChart } from "react-native-chart-kit";

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
  Title
} from './styles';

import baseURL from '../../services/baseURL';
import { useAuth } from '../../hooks/auth';
import Feather from '@expo/vector-icons/build/Feather';
import DisciplineCard from '../../Componets/DisciplineCard';
import api from '../../services/api';
import DisciplineCardStudent from '../../Componets/DisciplineCardStudent';

interface IClassesProps {
  id: string;
  code: string;
  subject: string;
  date: {
    date: string;
  };
}


export default function Dashboard() {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();
  const [profileIsVisible, setProfileIsVisible] = useState(false);

  const [classes, setClasses] = useState<IClassesProps[]>([]);

  useFocusEffect(
    useCallback(() => {
      console.log('Dashboard ==================================================');
      console.log(user);
    }, [])
  );

  const data = [
    20,
    10,
    40,
    50,
    10,
    20,
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`${baseURL}/api/users/${user.id}/classes`);
        console.log(response.data);
        setClasses(response.data)
      } catch (error) {
        console.log(error);
      }
    })();
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
              <GraphTitle>Assiduidade Semanal</GraphTitle>
              <BarChart
                data={{
                  labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                  datasets: [
                    {
                      data: data,
                    }
                  ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                fromZero={true}
                withHorizontalLabels={false}
                withInnerLines={false}
                showBarTops={false}
                showValuesOnTopOfBars={false}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
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
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  marginLeft: -72,
                }}
              />
            </GraphInner>
          </GraphContainer>

          <H1>Minhas turmas</H1>
          <CardsContainer>
            <CardsContaineScroll>
              {classes.map((classe, index) => (
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
              <Title>Minhas disciplinas (8)</Title>
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ height: '100%', }}>
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />
                <DisciplineCardStudent
                  coverUrl="https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99"
                  avatarUrl="https://github.com/tassioauad.png"
                  onPress={() => navigation.navigate('Disciplina' as never, { id: '1' } as never)}
                />


                <Fake />
              </KeyboardAwareScrollView>
            </ContainerIntro>


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
    </>
  );
}