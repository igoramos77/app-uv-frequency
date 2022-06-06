import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Text, Alert, Modal, Switch } from 'react-native';
import Feather from '@expo/vector-icons/build/Feather';
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns';

import api from '../../services/api';

import {
  Container,
  Header,
  TitleHeader,
  DateChangeContainer,
  DayOfMouthContainer,
  DayNumber,
  Btn,
  ArrowContainer,
  Day,
  Footer,
  ContainerIntro,
  Row,
  Avatar,
  Name,
  AvatarContainer,
  DayEx,
  SwitchContainer,
  StateTextLeft,
  StateTextRight,
  Fake,
  DisciplineTitle,
  BackButtonContianer,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { ptBR } from 'date-fns/locale';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from '../../Componets/Forms/Button';
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

interface IParamsProps {
  id: string;
}

export default function MySends({ }) {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [activities, setActivities] = useState<IActivitiesProps[]>([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const route = useRoute();
  const { id } = route.params as IParamsProps;


/* 
  useFocusEffect(
    useCallback(() => {
      async function loadData() {
        const response = await api.get(`/api/v1/usuarios/${user.id}/atividades/`);
        console.log('LIST ACTIVITIES >>>>>>>>>>>>>>>>>>>');
        console.log(response.data);
        setActivities(response.data);
      }
      loadData();
    }, [])
  );
 */
  return (
    <Container>
      <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <BackButtonContianer>
          <Feather size={32} color="#fff" name="chevron-left"  style={{marginLeft: 20 }} onPress={ () => { navigation.goBack() }} />
        </BackButtonContianer>
        <DateChangeContainer>
          <ArrowContainer>
            <Btn>
              <Text>
                <Feather size={14} color="#fff" name="chevron-left" style={{ fontSize: 25, }} />
              </Text>
            </Btn>
          </ArrowContainer>
          <DayOfMouthContainer>
            <DayNumber>
              21
            </DayNumber>
          </DayOfMouthContainer>
          <ArrowContainer>
            <Btn>
              <Text>
                <Feather size={14} color="#fff" name="chevron-right" style={{ fontSize: 25, }} />
              </Text>
            </Btn>
          </ArrowContainer>
        </DateChangeContainer>
      </Header>
      <Footer>
        <Day>terça-feira</Day>
        <DayEx>{format(parseISO('2021-08-30'), 'PPP', { locale: ptBR })}</DayEx>
      </Footer>


      <ContainerIntro>
        <DisciplineTitle>Lab de Empreededorismo id: {id}</DisciplineTitle>
        <KeyboardAwareScrollView extraHeight={500}>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
          <Row style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AvatarContainer>
              <Avatar
                source={user.photoUrl ? { uri: user.photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
              />
              <Name>Igor Brown</Name>

            </AvatarContainer>
            <SwitchContainer>
              <StateTextLeft>F</StateTextLeft>
              <Switch
                trackColor={{ false: '#ccc', true: '#ccc' }}
                thumbColor={isEnabled ? '#781e20' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <StateTextRight>P</StateTextRight>
            </SwitchContainer>
          </Row>
            <Button
            background="primary"
            title="Registrar presença!"
            onPress={() => {
              Alert.alert('Presença confirmada com sucesso! 😊');
              navigation.goBack();
            }} 
          />
          <Fake>
          </Fake>
        </KeyboardAwareScrollView>



      </ContainerIntro>


    </Container>
  );
}