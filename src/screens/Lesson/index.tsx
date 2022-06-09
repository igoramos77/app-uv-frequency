import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Avatar, AvatarContainer, BackButtonContianer, CardsContaineScroll, Container, ContainerIntro, Header, HeaderContainer, Teacher, Title, Title2, Topic, TopicContainer } from './styles';

import Feather from '@expo/vector-icons/build/Feather';
import { LinearGradient } from 'expo-linear-gradient';

const Lesson: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        source={{ uri: 'https://www.somosicev.com/wp-content/themes/iCEV-1.0/thumb.php?src=https://www.somosicev.com/wp-content/uploads/2020/02/shutterstock_1490302805-1-e1582805634356.jpg&w=460&h=320&zc=6&q=99' }}
        blurRadius={0}
      >
        <HeaderContainer>
          <Title>Padrões de Projeto</Title>
          <Teacher>Tássio Auad</Teacher>
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
            source={{ uri: "https://github.com/tassioauad.png" }}
          />
        </AvatarContainer>
      </Header>

      <ContainerIntro>
        <Title2>Aulas</Title2>
        <SafeAreaView>
          <CardsContaineScroll>

            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>
            <TopicContainer style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
              <Topic>Padrões de projeto</Topic>
            </TopicContainer>

          </CardsContaineScroll>
        </SafeAreaView>
      </ContainerIntro>
    </Container>
  );
}

export default Lesson;