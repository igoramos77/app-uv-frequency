import React, { useCallback, useEffect, useState } from 'react';
import { Switch } from 'react-native';
import { ILessonsProps } from '../../screens/MySends';

import { Avatar, AvatarContainer, Container, Name, StateTextLeft, StateTextRight, SwitchContainer } from './styles';

interface IUserFrequencyProps {
  style: any;
  photoUrl: string;
  name: string;
  isPresent: boolean;
  onChange(value: boolean): void;
}

const UserFrequency: React.FC<IUserFrequencyProps> = ({ style, photoUrl, name, isPresent, onChange }) => {

  const [isChecked, setIsChecked] = useState(isPresent);
  useEffect(() => {
    setIsChecked(isPresent);
  }, [isPresent]);

  return (
    <Container style={style}>
      <AvatarContainer>
        <Avatar
          source={photoUrl ? { uri: photoUrl } : { uri: "https://pbs.twimg.com/profile_images/1498067523299852297/KnrB7S9v_400x400.jpg" }}
        />
        <Name>{name}</Name>
      </AvatarContainer>
      <SwitchContainer>
        <StateTextLeft>F</StateTextLeft>
        <Switch
          trackColor={{ false: '#ccc', true: '#ccc' }}
          thumbColor={isChecked ? '#781e20' : '#f4f3f4'}
          onValueChange={(value) => {
            setIsChecked(!isChecked);
            onChange(value);
          }}
          value={isChecked}
        />
        <StateTextRight>P</StateTextRight>
      </SwitchContainer>
    </Container>
  );
}

export default UserFrequency;