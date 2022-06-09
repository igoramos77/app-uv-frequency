import React from 'react';
import { View, Text } from 'react-native';

import { Avatar, AvatarContainer, Container, Cover, Day, FrequencyContainer, FrequencyPercentage, Header, Main, Teacher, Title, Topics } from './styles';

interface ICardProps {
  coverUrl: string;
  avatarUrl: string;
  onPress(): void;
}

const DisciplineCardStudent: React.FC<ICardProps> = ({ coverUrl, avatarUrl, onPress }) => {
  return (
    <Container onPress={onPress} activeOpacity={1}>
      <FrequencyContainer style={{ borderRadius: 4, }}>
        <FrequencyPercentage>4 faltas</FrequencyPercentage>
      </FrequencyContainer>
      <Cover source={{ uri: coverUrl }} imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, }} blurRadius={6} resizeMode="cover" />
      <Main style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
        <AvatarContainer>
          <Avatar
            source={{ uri: avatarUrl }}
          />
        </AvatarContainer>
        <Header>
          <Title>Padrões de Projetos</Title>
          <Day>Quarta-feira</Day>
        </Header>
        <Header>
          <Topics>6 tópicos</Topics>
          <Teacher>Tássio Auad</Teacher>
        </Header>
      </Main>
    </Container>
  );
}

export default DisciplineCardStudent;