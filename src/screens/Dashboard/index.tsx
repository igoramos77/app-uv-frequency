import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, Alert, Modal } from 'react-native';

import api from '../../services/api';

import HighlightCard from '../../Componets/HighlightCard';
import LastActivesCard from '../../Componets/LastActivesCard';
import Profile from '../Profile';

import { Container,
  Header,
  UserContainer,
  UserInfo,
  Avatar,
  UserSaudation,
  FirstSaudation,
  Matricule,
  UserName,
  Icon,
  CardsContainer,
  CardsHome,
  LastActivesContent,
  LastActivesTitle,
  BtnViewMore,
  NotFound,
  CloseModal,
  CloseModalBtn,
  ButtonNavegate,
  IconCardContainer
} from './styles';

import baseURL from '../../services/baseURL';
import { useAuth } from '../../hooks/auth';
import Feather from '@expo/vector-icons/build/Feather';

interface IActivitiesProps {
  id: number;
  external_id: string;
  descricao: string;
  empresa: string;
  cnpj: string;
  carga_horaria_informada: number;
  carga_horaria_integralizada?: number | null;
  justificativa?: string | null;
  certificado: string;
  status: 'em_validação' | 'aprovado' | 'recusado';
  is_active: boolean;
  create_at: string;
  update_at: string;
  usuario: number;
  curso: number;
  categoria: number;
}

interface IUserStatistics {
  total_horas_integralizadas: number;
  total_atividades_submetidas: number;
  total_atividades_aguardando_validacao: number;
  total_atividades_recusadas: number;
  qtd_horas_necessarias: number;
}[]

interface IUserProps {
  user: {
    id: string,
    first_name: string,
    last_name: string,
    matricula: string,
    email: string,
    foto: string,
    curso: string,
    token: string,
  }
}


const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [lastActivities, setLastActivities] = useState<IActivitiesProps[]>([]);
  const [userStatistics, setUserStatistics] = useState<IUserStatistics[]>([]);

  const [profileIsVisible, setProfileIsVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const response = await api.get(`api/v1/usuarios/${user.id}/total-statistics/`);
        console.log('LIST STATISTICS FROM USER >>>>>>>>>>>>>>>>>>>');
        console.log(response.data);
        setUserStatistics(response.data);
      }
      loadData();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const response = await api.get(`/api/v1/usuarios/${user.id}/ultimas-atividades/`);
        console.log('LIST LAST ACTIVITIES >>>>>>>>>>>>>>>>>>>');
        console.log(response.data);
        setLastActivities(response.data);
      }
      loadData();
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
      <Header colors={['#a03c3e', '#771e20']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}}>
        <UserContainer>
          <UserInfo onPress={() => setProfileIsVisible(true)}>
            <Avatar source={user.foto ? { uri: user.foto } : { uri: "https://github.com/tassioferenzini.png" }} />
            <UserSaudation>
              <FirstSaudation>Olá, <UserName>Tassio Siqueira!</UserName></FirstSaudation>
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

     {/* <CardsContainer>
        <HighlightCard title="Total de horas integralziadas"
          value={userStatistics[0]?.total_horas_integralizadas || 0}
          icon="send"
          background="#5ed4ac" 
          total_horas_necessarias={userStatistics[0]?.qtd_horas_necessarias || 0}
        />
        <HighlightCard title="Atividades submetidas"
          value={userStatistics[0]?.total_atividades_submetidas || 0}
          icon="bar-chart"
          background="#ç"
        />
        <HighlightCard title="Aguardando validação"
          value={userStatistics[0]?.total_atividades_aguardando_validacao || 0}
          icon="clock"
          background="#1171ef"
        />
        <HighlightCard title="Atividades recusadas"
          value={userStatistics[0]?.total_atividades_recusadas || 0}
          icon="archive"
          background="#ff0004" 
        />
      </CardsContainer> */}

      <CardsHome>
        <ButtonNavegate>
          <IconCardContainer>
            <Feather size={22} color="#fff" name="check" />
            <Text>ddddd</Text>
          </IconCardContainer>
          <Text>dd</Text>
        </ButtonNavegate>
        <ButtonNavegate>
          <Text>dd</Text>
        </ButtonNavegate>
      </CardsHome>
      
    </Container>  
  );
}

export default Dashboard;