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
  height: ${RFPercentage(40)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H1 = styled.Text`
  font-size: 26px;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 110px;
`;

export const H2 = styled.Text`
  font-size: 11px;
  width: 100%;
  text-align: center;
  margin-top: 16px;
  font-family: ${props => props.theme.fonts.bold};
`;


export const FormControl = styled.View`
  margin: ${RFValue(6)}px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BigContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(-180)}px;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 88%;
  padding: 0 16px 16px 16px;
  background: #fff;
  border-radius: 5px;
`;

export const BigAvatar = styled.Image`
  margin-top: ${RFValue(-70)}px; 
  margin-bottom: ${RFValue(10)}px; 
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  border-radius: 10px;
`;

export const Form = styled.View`
  position: relative;
  width: 100%;
`;

export const Label = styled.Text`
  font-size: 12px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.title};
  margin: 4px 8px 8px 8px;
`;

export const AvatarContainer = styled(TouchableOpacity)`
  
`;