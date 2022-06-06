import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Modal, ActionSheetIOS, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';
import axios from 'axios';

import Feather from '@expo/vector-icons/build/Feather';
import * as DocumentPicker from 'expo-document-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../../Componets/Forms/Button';
import Input from '../../Componets/Forms/Input';
import InputCnpjMask from '../../Componets/Forms/InputCnpjMask';
import InputSelect from '../../Componets/Forms/InputSelect';
import InputDropZone from '../../Componets/InputDropZone';
import { CategorySelect } from '../CategorySelect';
import Camera from '../../Componets/Camera';

import truncateStrings from '../../utils/truncateStrings';

export interface IPhotoCameraProps {
  height: number;
  uri: string;
  width: number;
}

import { Container, Header, Title  } from './styles';

const Register: React.FC = () => {
  const { user } = useAuth();
    
  return (
    <Container>
      <Header colors={['#6e61c6', '#a98ef3']} start={{ x: 0, y: 0}} end={{x: 1, y: 1}}>
        <Title>Cadastrar atividade complementar</Title>
      </Header>
      <KeyboardAwareScrollView extraHeight={150}>
        <Title>dsadasdsadas</Title>
      </KeyboardAwareScrollView>
    </Container>
  );
}

export default Register;