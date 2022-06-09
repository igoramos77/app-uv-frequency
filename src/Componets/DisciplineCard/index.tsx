import React from 'react';

//@ts-ignore
import ProgressBar from "react-native-animated-progress";

import Feather from '@expo/vector-icons/build/Feather';

import { Container, Title, ProgressBarContainer, Footer, Date, Cover, Content, CodeTurma, CodeTurmaContainer } from './styles';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { View } from 'react-native';
import theme from '../../global/styles/theme';

interface ICardProps {
  onPress?(): void;
  code: string;
  coverUrl: string;
  subject: string;
  date: {
    date: string;
  };
}

export default function DisciplineCard({ onPress, code, coverUrl, subject, date }: ICardProps) {

  return (
    <Container
      onPress={onPress}
      style={{
        shadowColor: '#00000050',
        shadowOffset: { width: 2, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 0.3,
        elevation: 1
      }}
      activeOpacity={1}
    >
      <CodeTurmaContainer style={{ borderRadius: 4, }}>
        <CodeTurma>{code}</CodeTurma>
      </CodeTurmaContainer>
      <Cover source={{ uri: coverUrl }} imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, }} resizeMode="cover" />
      <Content>
        <Title>{subject}</Title>
        <Footer>
          <Feather size={14} color={theme.colors.title} name="calendar" style={{ marginRight: 4 }} />
          <Date>
            {format(parseISO(date?.date), 'eeee', { locale: ptBR })}
          </Date>
          <Feather size={14} color={theme.colors.title} name="clock" style={{ marginLeft: 16, marginRight: 4 }} />
          <Date>
            20h
          </Date>
        </Footer>
      </Content>
    </Container>
  );
}