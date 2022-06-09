import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Avatar, AvatarContainer, BackButtonContianer, CardsContaineScroll, Container, ContainerIntro, Header, HeaderContainer, Teacher, Title, Title2, Topic, TopicContainer } from './styles';

import Feather from '@expo/vector-icons/build/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../services/api';

interface IParamsProps {
  id: string;
  coverUrl: string;
  subject: string;
  professor: {
    name: string;
    photoUrl: string;
  };
}

export interface ILeacturesProps {
  class_id: string;
  content: string;
  date: string;
  id: string;
}


const Lesson: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [lectures, setLectures] = useState<ILeacturesProps[]>([]);

  const { id, coverUrl, subject, professor } = route.params as IParamsProps;

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/api/classes/${id}/lectures`);
        console.log(response.data);
        setLectures(response.data)
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Container>
      <Header
        source={{ uri: coverUrl }}
        blurRadius={0}
      >
        <HeaderContainer>
          <Title>{subject}</Title>
          <Teacher>{professor.name}</Teacher>
        </HeaderContainer>
        <LinearGradient
          colors={['transparent', '#000000d0']}
          start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 360,
            zIndex: 0,
          }}
        />
        <BackButtonContianer>
          <Feather size={32} color="#fff" name="chevron-left" style={{ marginLeft: 20 }} onPress={() => { navigation.goBack() }} />
        </BackButtonContianer>
        <AvatarContainer>
          <Avatar
            source={{ uri: professor.photoUrl }}
          />
        </AvatarContainer>
      </Header>

      <ContainerIntro>
        <Title2>Aulas</Title2>
        <SafeAreaView>
          <CardsContaineScroll>
            {lectures.map((lecure, index) => (
              <TopicContainer
                key={index}
                style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}
              >
                <Topic>Aula {index + 1} - {lecure.content}</Topic>
              </TopicContainer>
            ))}
          </CardsContaineScroll>
        </SafeAreaView>
      </ContainerIntro>
    </Container>
  );
}

export default Lesson;