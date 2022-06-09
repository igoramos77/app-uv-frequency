import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';
import { View, Text } from 'react-native';

import { Avatar, AvatarContainer, Container, Cover, Day, FrequencyContainer, FrequencyPercentage, Header, Main, Teacher, Title, Topics } from './styles';

interface ICardProps {
  coverUrl: string;
  subject: string;
  lessonsCount: number;
  attendanceCount: number;
  dayOfWeek: string;
  professor: {
    id: string;
    name: string;
    photoUrl: string;
  };
  onPress(): void;
}

const DisciplineCardStudent: React.FC<ICardProps> = ({ coverUrl, lessonsCount, attendanceCount, subject, dayOfWeek, professor, onPress }) => {
  return (
    <Container onPress={onPress} activeOpacity={1}>
      <FrequencyContainer style={{ borderRadius: 4, }}>
        <FrequencyPercentage>{attendanceCount} faltas</FrequencyPercentage>
      </FrequencyContainer>
      <Cover source={{ uri: coverUrl }} imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, }} blurRadius={6} resizeMode="cover" />
      <Main style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }}>
        <AvatarContainer>
          <Avatar
            source={{ uri: professor.photoUrl }}
          />
        </AvatarContainer>
        <Header>
          <Title>{subject}</Title>
          <Day>{format(parseISO(dayOfWeek), 'eeee', { locale: ptBR })}</Day>
        </Header>
        <Header>
          <Topics>{lessonsCount} Aulas</Topics>
          <Teacher>{professor.name}</Teacher>
        </Header>
      </Main>
    </Container>
  );
}

export default DisciplineCardStudent;