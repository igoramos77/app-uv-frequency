import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IUserProps {
  id: number,
  name: string,
  matricula: string,
  email: string,
  photoUrl: string,
  courseId: string,
  token: string,
  expires_in: string,
}

interface IAuthContext {
  logged: boolean;

  signIn(
    id: number,
    name: string,
    matricula: string,
    email: string,
    photoUrl: string,
    courseId: string,
    token: string,
    expires_in: string,
  ): void;

  signOut(): void;

  user: IUserProps;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [logged, setLogged] = useState(false);

 /* mantem logado  
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = AsyncStorage.getItem('@logged');
    return !!isLogged;
  }); */

  const signIn = useCallback(async (id, name, matricula, email, photoUrl, courseId, token, expires_in) => {
    await AsyncStorage.setItem('@token', JSON.stringify({ token: token, expires_in: expires_in }));

    setUser({
      id: id,
      name: name,
      matricula: matricula,
      email: email,
      photoUrl: photoUrl,
      courseId: courseId,
      token: token,
      expires_in: expires_in,
    })
    
    setLogged(true);
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem('@token');
    setLogged(false);
  }, []);

  return (
    <AuthContext.Provider value={{logged, signIn, signOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
