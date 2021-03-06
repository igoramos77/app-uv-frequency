import React, { useCallback, useEffect, useState } from 'react';


import { Container, Header, H1, H2, BigContainer, FormControl, FormContainer, BigAvatar, Form, Label, AvatarContainer } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAuth } from '../../hooks/auth';
import Input from '../../Componets/Forms/Input';
import Button from '../../Componets/Forms/Button';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';
import Footer from '../../Componets/Footer';

const Profile: React.FC = () => {
  const { user, updateUser, signOut } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.photoUrl);

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

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleImportImage = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
    });

    console.log(result);

    if (!result.cancelled) {
      try {
        const response = await api.put(`/api/users/${user.id}/photo`, {
          photo: `data:image/jpeg;base64,` + result.base64,
        });
        console.log(response.data);

        if (response.status === 200) {
          setImage(result.uri);
          console.log(response.data);
          updateUser({
            ...user,
            photoUrl: result.uri
          });
        }
      } catch (error) {
        console.log(error);
        Alert.alert('Ops! Não foi possível alerar a sua foto. 📷')
      }
    }
  }, [image, user, setImage]);

 

  const handleUpdateProfile = useCallback(async () => {
    try {
      const response = await api.put(`/api/users/${user.id}`, {
        name: name,
        email: email,
      });
      console.log(response.data);
      updateUser({
        ...user,
        name: name,
        email: email,
      });
      if (response.status === 200) {
        Alert.alert('Perfil atualizado com sucesso!')
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Ops! Não foi possível alterar o perfil.')
    }
  }, [updateUser, user, name, email]);



  return (
    <Container>
      <Header colors={['#781e20', '#781e20']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />

      <BigContainer>
        <H1>{user.name}</H1>
        <FormContainer>
          <AvatarContainer activeOpacity={1} onPress={handleImportImage}>
            <BigAvatar source={{ uri: image }} />
          </AvatarContainer>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ width: '100%', display: 'flex' }}>
            <Form>
              <FormControl>
                <Label>Matrícula</Label>
                <Input value={String(user.matricula)} background="#f0f0f0" editable={false} onPressIn={() => Alert.alert('Não é possível alterar sua matrícula. 😢')} />
              </FormControl>
              <FormControl>
                <Label>Nome completo</Label>
                <Input background="#f0f0f0" defaultValue={name} onChangeText={(e: string) => setName(e)} />
              </FormControl>
              <FormControl>
                <Label>E-mail</Label>
                <Input value={email} background="#f0f0f0" onChangeText={(e: string) => setEmail(e)} />
              </FormControl>
              <FormControl>
                <Button title="Atualizar perfil" background="primary" onPress={handleUpdateProfile} />
                <H2 onPress={confirmLogout}>Sair do App?</H2>
              </FormControl>
            </Form>
          </KeyboardAwareScrollView>
        </FormContainer>
      </BigContainer>

      <Footer />
    </Container>
  );
}

export default Profile;