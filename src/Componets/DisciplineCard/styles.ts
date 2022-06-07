import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
  width: 95%;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 128px;
`;

export const Title = styled.Text`
  width: 100%;
  display: flex;
  color: #3c3c3c;
  align-items: center;
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  margin-bottom: 8px;
`;

export const ProgressBarContainer = styled.View`
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
`;