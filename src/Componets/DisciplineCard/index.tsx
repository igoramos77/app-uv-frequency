import React from 'react';

//@ts-ignore
import ProgressBar from "react-native-animated-progress";

import Feather from '@expo/vector-icons/build/Feather';

import { Container, Title, ProgressBarContainer, Footer, Date } from './styles';

interface ICardProps {
  onPress?(): void;
}

const DisciplineCard: React.FC<ICardProps> = ({ onPress, }) => {
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
    <Title>Lab de Empreededorismo</Title>
    <ProgressBarContainer>
      <ProgressBar
        progress={30}
        height={7}
        backgroundColor="#731e21"
        trackColor="#cccccc60"
        animated={true}
      />
    </ProgressBarContainer>
    <Footer>
      <Date>
        <Feather size={14} color="#731e21" name="calendar" style={{ paddingRight: 5, }} /> 
        Quinta-feira / 20h
      </Date>
    </Footer>
  </Container>
  );
}

export default DisciplineCard;