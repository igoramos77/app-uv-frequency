import React, { useState, useCallback, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';

import Feather from '@expo/vector-icons/build/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import Input from '../../Componets/Forms/Input';
import Button from '../../Componets/Forms/Button';

import { Container, Header, TitleContent, H1, Form, FormControl, Footer } from './styles';

import { Text, Image, Alert } from 'react-native';

import axios from 'axios';

export default function Login() {
  const { signIn, setLogged } = useAuth();

  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const storageValue = await AsyncStorage.getItem('@user');
        if (storageValue !== null) {
          let storageUser = await JSON.parse(storageValue);
          setMatricula(storageUser.matricula);
          setSenha(storageUser.password);
        }
      } catch (e) {
        setMatricula('');
        setSenha('');
      }
    })();
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const response = await api.post('/api/auth/token', {
        matricula: matricula,
        password: senha,
      });

      console.log('=========================== START =========================');
      console.log(response.data.token);
      console.log('USER:::::::::::::::', response.data.user);
      console.log('=========================== END =========================');

      axios.defaults.headers.common = { 'Authorization': `Bearer ${response.data.token}` }

      signIn(
        await response.data.user.id,
        await response.data.user.name,
        await response.data.user.matricula,
        await response.data.user.email,
        await response.data.user.photoUrl,
        await response.data.user.courseId,
        await response.data.user.role,
        await response.data.expires_in,
        await response.data.token,
      );

      //const token =  await response.data.token;
      //console.log('tokennnnnnn: ', token)

      if (response.status === 200) {
        await AsyncStorage.setItem('@user', JSON.stringify({ matricula: matricula, password: senha }));
      }

      setLogged(true);

    } catch (error: any) {
      console.log('error:: ', error);
      Alert.alert('Matrícula ou senha inválidos!');
      setLogged(false);
    }
  }, [matricula, senha]);

  const onFaceId = async () => {
    try {
      const storageValue = await AsyncStorage.getItem('@user');
      if (!storageValue ) {
        return;
      }

      // Checking if device is compatible
      const isCompatible = await LocalAuthentication.hasHardwareAsync();

      if (!isCompatible) {
        throw new Error('Seu dispositivo não suporta autenticação por reconhecimento facial ou FaceID.')
      }

      // Checking if device has biometrics records
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isEnrolled) {
        throw new Error('Usuário ou senha inválidos.')
      }

      // Authenticate user
      const isAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: '😊',
        fallbackLabel: 'Informe sua senha',
        cancelLabel: 'Cancelar',
      });

      if (isAuth.success) {
        await handleLogin();
      }

    } catch (error: any) {
      Alert.alert('Erro: ', error?.message);
    }
  };

  return (
    <Container>
      <KeyboardAwareScrollView extraHeight={150}>
        <Header colors={['#781E20', '#781E20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <TitleContent>
            <H1>Controle a presença</H1>
            <H1>de seus alunos de</H1>
            <H1>forma muito simples</H1>
          </TitleContent>
        </Header>

        <Form>
          <FormControl>
            <Input placeholder="Matrícula" keyboardType='number-pad' onChangeText={(text) => setMatricula(text)} onFocus={onFaceId} />
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
