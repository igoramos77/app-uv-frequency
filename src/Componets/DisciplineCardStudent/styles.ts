import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

export const Cover = styled.ImageBackground`
  height: 120px;
  width: 100%;
`;

export const Main = styled.View`
  width: 100%;
  background: #eeeeee;
  padding: 16px;
  `;

export const AvatarContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -50px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 48px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Topics = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Day = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Teacher = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const FrequencyContainer = styled.View`
  background: red;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 9999;
  background: ${props => props.theme.colors.primary};
  padding: 4px 8px;
`;

export const FrequencyPercentage = styled.Text`
  color: #fff;
`;
