import React, { useState, useEffect, useCallback } from 'react';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Text, Alert, Modal, Dimensions, View } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

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
  CardsContaineScroll
} from './styles';

import baseURL from '../../services/baseURL';
import { IUserProps, useAuth } from '../../hooks/auth';
import Feather from '@expo/vector-icons/build/Feather';
import DisciplineCard from '../../Componets/DisciplineCard';
import fullName from '../../utils/fullNameFormart';


export default function Dashboard() {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();
  const [profileIsVisible, setProfileIsVisible] = useState(false);

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
  ]

  return (
    <>
    {user.role === 'student' ? (
        <Container>
          <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <UserContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <UserInfo onPress={() => setProfileIsVisible(true)}>
                <UserSaudation>
                  <Hi>Olá,</Hi>
                  {user.name && <FirstSaudation><UserName>{fullName(user?.name)}!</UserName></FirstSaudation>}
                  <Matricule>Matrícula: {user.matricula}</Matricule>
                </UserSaudation>
              </UserInfo>
              {/* <LogoutIconContainer>
                <Icon name="power" onPress={confirmLogout} />
              </LogoutIconContainer> */}
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

          <H1>Minhas disciplinas</H1>
          <CardsContainer>
            <CardsContaineScroll>
              <DisciplineCard onPress={() => navigation.navigate('MySends' as never, { id: '123' } as never)} />
              <DisciplineCard />
            </CardsContaineScroll>
          </CardsContainer>

        </Container>
    ) : 
    (
      <View style={{flex: 1, backgroundColor: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <Text>role: {user.role}</Text>
      </View>
    )}

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