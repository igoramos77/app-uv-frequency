import React, { useState, useEffect, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import { Text, Alert, Modal } from 'react-native';


import api from '../../services/api';

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
  CardsHome,
  NotFound,
  CloseModal,
  CloseModalBtn,
  ButtonNavegate,
  IconCardContainer
} from './styles';

import baseURL from '../../services/baseURL';
import { useAuth } from '../../hooks/auth';
import Feather from '@expo/vector-icons/build/Feather';
import MySends from '../MySends';


const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const { signOut, user } = useAuth();
  const [profileIsVisible, setProfileIsVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {

    }, [])
  );

  const confirmLogout = () => {
    return Alert.alert(
      "Deseja descontectar do App?",
      "Você poderá voltar quando quiser.",
      [
        // The "Yes" button
        {
          text: "Sair",
          onPress: () => {
            signOut();
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "Não",
        },
      ]
    );
  };

  return (
    <Container>
      <Header colors={['#a03c3e', '#771e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <UserContainer>
          <UserInfo onPress={() => setProfileIsVisible(true)}>
            <Avatar source={user.foto ? { uri: user.foto } : { uri: "https://github.com/tassioferenzini.png" }} />
            <UserSaudation>
              <FirstSaudation>Olá, <UserName>Tassio!</UserName></FirstSaudation>
              <Matricule>Matrícula: 12345678</Matricule>
            </UserSaudation>
            <Modal visible={profileIsVisible} >
              <CloseModal>
                <CloseModalBtn onPress={() => setProfileIsVisible(false)}>
                  <Feather size={22} color="#fff" name="x" />
                </CloseModalBtn>
              </CloseModal>
              <Profile />
            </Modal>
          </UserInfo>
          <Icon name="power" onPress={confirmLogout} />
        </UserContainer>
      </Header>

      <CardsHome>
        <ButtonNavegate activeOpacity={1} onPress={() => alert("a")} >
          <IconCardContainer>
            <Feather size={30} color="#751c20" name="user-check" />
          </IconCardContainer>
          <Text>Chamada</Text>
        </ButtonNavegate>
        <ButtonNavegate activeOpacity={1} onPress={() => { alert('a') }}>
          <IconCardContainer>
            <Feather size={30} color="#751c20" name="book" />
          </IconCardContainer>
          <Text>Relatório</Text>
        </ButtonNavegate>
        <ButtonNavegate activeOpacity={1} onPress={() => { alert('a') }}>
          <IconCardContainer>
            <Feather size={30} color="#751c20" name="settings" onPress={() => setProfileIsVisible(true)} />
          </IconCardContainer>
          <Text>Ajustes</Text>
        </ButtonNavegate>
      </CardsHome>

    </Container>
  );
}

export default Dashboard;