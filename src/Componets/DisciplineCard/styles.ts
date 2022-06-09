import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
  background: #fff;
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
  border-radius: 8px;
  margin-bottom: 128px;
  width: 300px;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Cover = styled.ImageBackground`
  height: 100px;
  width: 100%;
`;

export const Title = styled.Text`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.title};
  align-items: center;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  margin-bottom: 8px;
`;

export const ProgressBarContainer = styled.View`
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.medium};
`;

export const CodeTurmaContainer = styled.View`
  position: absolute;
  display: flex;
  z-index: 999999;
  border-radius: 14px;
  top: 8px;
  right: 8px;
`;

export const CodeTurma = styled.Text`
  color: #fff;
  background: #781e20;
  padding: 5px;
`;