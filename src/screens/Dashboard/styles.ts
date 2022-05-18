import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 24px 16px 24px;
  display: flex;
  margin-top: ${getStatusBarHeight() + RFValue(40)}px;
`;

export const UserInfo = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CloseModal = styled.View`
  top: 60px;
  position: absolute;
  left: 20;
  width: 50px;
  height: 50px;
  z-index: 9999;
`;

export const CloseModalBtn = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #ffffff20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 65px;
  margin-bottom: 16px;
`;

export const UserSaudation = styled.View`
  display: flex;
  width: 100%;
`;

export const FirstSaudation = styled.Text`
  color: #181b23;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const UserName = styled.Text`
  color: #181b23;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(18)}px;

  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Matricule = styled.Text`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: #c8c7ca;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  width: 100%;
`;

export const LogoutIconContainer = styled.View`
  position: absolute;
  right: 20;
  display: flex;
  background: #e8ebf8;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 40px;
`;

export const Icon = styled(Feather)`
  color: #7b7ee3;
  font-size: ${RFValue(20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const CardsHome = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin-top: 0px;
  width: 100%;
`;

export const ButtonNavegate = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background: #fff;
  padding: ${RFValue(16)}px;
  display: flex;
  border-radius: 25px;
  width: 31%;
`;

export const IconCardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${RFPercentage(50)}px;
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const NotFound = styled.Text`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  color: ${props => props.theme.colors.title};
`;