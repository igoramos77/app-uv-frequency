import React from 'react';

import { Avatar, Container, Description, Description2, Header, LogoContainer, MainHeader, Mainn, Name, UserContainer, } from './styles';

import Logo from '../../../assets/logo1.svg';
import Footer from '../../Componets/Footer';

const About: React.FC = () => {
  return (
    <Container>
      <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
      <LogoContainer>
        <Logo style={{ width: 400, height: 200}} />
      </LogoContainer>
      <MainHeader>
        <UserContainer>
          <Avatar
            source={{ uri: "https://github.com/igoramos77.png" }}
          />
          <Name>Igor B.</Name>
        </UserContainer>
        <UserContainer>
          <Avatar
            source={{ uri: "https://github.com/kaslufl.png" }}
          />
          <Name>Lucas L.</Name>
        </UserContainer>
        <UserContainer>
          <Avatar
            source={{ uri: "https://github.com/DelgadGuilherme.png" }}
          />
          <Name>Guilherme D.</Name>
        </UserContainer>
      </MainHeader>
      <Mainn>
        <Description>
          Atividade Avaliativa P2 - Laboratório De Desenvolvimento De Aplicativos Híbridos
        </Description>
        <Description2>
          Prof. Dr. Tassio Sirqueira
        </Description2>
      </Mainn>
      <Footer />
    </Container>
  );
}

export default About;