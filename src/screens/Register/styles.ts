import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background: ${props => props.theme.colors.background};
  background: #EDEDED;
  height: 100%;
`;

export const Header = styled(LinearGradient)`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 12px;
`;
