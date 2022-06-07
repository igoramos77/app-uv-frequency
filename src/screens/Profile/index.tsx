import React from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Container, Header, H1, H2, BigContainer, FormControl, FormContainer, BigAvatar, Form, Label, Footer } from './styles';
import { useAuth } from '../../hooks/auth';
import Input from '../../Componets/Forms/Input';
import Button from '../../Componets/Forms/Button';
import { Alert } from 'react-native';

interface IUserProps {
  id: number,
  first_name: string,
  last_name: string,
  matricula: string,
  email: string,
  foto: string,
  curso: number,
}[]

const Profile: React.FC = () => {
  const { user, signOut } =  useAuth();

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
      <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}} />

      <BigContainer>
        <H1>Olá, {user.name.split(" ")[0]}!</H1>
        <FormContainer>
          <BigAvatar source={{ uri: user.photoUrl }} />
          <Form>
            <FormControl>
              <Label>Matrícula</Label>
              <Input value={user.matricula} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Label>Nome completo</Label>
              <Input value={`${user.name}`} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Label>E-mail</Label>
              <Input value={user.email} editable={false} disabled />
            </FormControl>
            <FormControl>
              <Button title="Atualizar perfil!" background="primary" />
              <H2 onPress={confirmLogout}>Desconectar?</H2>
            </FormControl>
          </Form>
        </FormContainer>
      </BigContainer>

      <Footer>UFrequency 2022 - Todos os direitos reservasos</Footer>
    </Container>
  );
}

export default Profile;