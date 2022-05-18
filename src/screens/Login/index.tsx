import React, { useState, useCallback } from 'react';

import api from '../../services/api';

import { Text, Image, Alert } from 'react-native';

import Feather from '@expo/vector-icons/build/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../../../assets/logo1.svg';
import Input from '../../Componets/Forms/Input';
import Button from '../../Componets/Forms/Button';

import { Container, Header, TitleContent, H1, Form, FormControl, Footer } from './styles';
import { useAuth } from '../../hooks/auth';
import axios from 'axios';

interface IUserProps {
  id: number,
  first_name: string,
  last_name: string,
  matricula: string,
  email: string,
  foto: string,
  curso: number,
}[]

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogin = useCallback(async () => {
    try {
      const response = await api.post('/auth', {
        matricula: matricula,
        password: senha
      });

      console.log('=========================== START =========================');
      console.log(response.data.token);
      console.log(response.data.user);
      console.log('=========================== END =========================');

      axios.defaults.headers.common = { 'Authorization': `Bearer ${response.data.token}` }

      signIn(
        await response.data.user.id,
        await response.data.user.name,
        await response.data.user.matricula,
        await response.data.user.email,
        await response.data.user.photoUrl,
        await response.data.user.courseId,
        await response.data.token,
        await response.data.expires_in,
      );
    } catch (error: any) {
      console.log(error);
      Alert.alert('Matrícula ou senha inválidos!');
    }
  }, [matricula, senha]);

  return (
    <Container>
      <KeyboardAwareScrollView extraHeight={150}>
        <Header colors={['#781E20', '#781E20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <TitleContent>
            {/*<Logo style={{marginBottom: 40}} />*/}
            <H1>Controle a presença</H1>
            <H1>de seus alunos de</H1>
            <H1>forma muito simples</H1>
          </TitleContent>
        </Header>

        <Form>
          <FormControl>
            <Input placeholder="Matrícula" keyboardType='number-pad' onChangeText={(text) => setMatricula(text)} />
            <Feather size={24} color="#CBD1EB" name="user" style={{ position: 'absolute', zIndex: 99999, right: 16 }} />
          </FormControl>
          <FormControl>
            <Input placeholder="Senha" secureTextEntry={true} onChangeText={(text) => setSenha(text)} />
            <Feather size={24} color="#CBD1EB" name="lock" style={{ position: 'absolute', zIndex: 99999, right: 16 }} />
          </FormControl>
          <FormControl>
            <Button title="Entrar na plataforma!" background="primary" onPress={handleLogin} loading={loadingLogin} />
          </FormControl>
        </Form>
        <Footer>2022 - Todos os direitos reservados</Footer>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default Login;