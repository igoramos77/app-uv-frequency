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
export const BackButtonContianer = styled.View`
  position: absolute;
  left: 0;
  top: ${RFValue(50)}px;
`;

export const Header = styled(LinearGradient)`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  height: ${RFValue(130)}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: -10px;
  color: #ffffff;
  z-index: 0;
`;

export const TitleHeader = styled.Text`
  display: flex;
  text-align: center;
  width: 100%;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const DateChangeContainer = styled.View`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px 16px 0 16px;
  background: #781e20;
`;

export const Footer = styled.View`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #781e20;
  padding: 0 0 40px 0;
`;

export const ArrowContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayOfMouthContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const DayNumber = styled.Text`
  font-size: 32px;
  padding: 16px 0;
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const Day = styled.Text`
  font-size: 32px;
  padding: 0 0 0 0;
  color: #fff;
  font-size: ${RFValue(12)}px;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.regular};
`;

export const DayEx = styled.Text`
  font-size: 32px;
  padding: 0 0 16px 0;
  color: #fff;
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  display: flex;
  flex-direction: column;
`;

export const Btn = styled(TouchableOpacity)`
  font-size: 32px;
  padding: 12px;
  border-radius: 40px;
  background: #ffffff10;
`;

export const ContainerIntro = styled.View`
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: -30px;
`;

export const Row = styled.View`
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

export const SwitchContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Fake = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 270px;
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

export const DisciplineTitle = styled.Text`
width: 100%;
display: flex;
justify-content: center;
text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
  padding: 0 0 16px 0px;
`;
