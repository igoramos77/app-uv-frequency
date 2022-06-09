import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #E5E5E5;
  height: 100%;
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  height: ${RFPercentage(50)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainHeader = styled.View`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: -40px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: -290px;
  margin-bottom: 90px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const UserContainer = styled.View`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${props => props.theme.colors.title}
`;

export const Description = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${props => props.theme.colors.title};
  padding: 0 16px;
`;
export const Description2 = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${props => props.theme.colors.title};
  padding: 16px;
`;

export const Mainn = styled.View`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;