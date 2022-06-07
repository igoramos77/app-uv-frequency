import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px 0 16px 0;
  margin-bottom: 16px;
`;

export const AvatarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 8px;
`;

export const SwitchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StateTextLeft = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  padding: 0 8px 0 0;
`;

export const StateTextRight = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  padding: 0 0 0 8px;
`;