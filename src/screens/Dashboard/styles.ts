import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  background: #edeef5;
`;

export const Header = styled(LinearGradient)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 128px 0;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 24px 8px 24px;
  display: flex;
  margin-top: ${getStatusBarHeight() + RFValue(40)}px;
`;

export const UserInfo = styled(TouchableOpacity)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
`;

export const CloseModal = styled.View`
  top: 60px;
  position: absolute;
  left: 20px;
  width: 50px;
  height: 50px;
  z-index: 9999;
`;

export const CloseModalBtn = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: #ffffff20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
  border-radius: 8px;
  margin-bottom: 16px;
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const UserSaudation = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Hi = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(32)}px;
  margin-bottom: -16px;
`;

export const FirstSaudation = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(32)}px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const UserName = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(32)}px;
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
  color: #ea4c89;
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

export const NotFound = styled.Text`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  color: ${props => props.theme.colors.title};
`;

export const GraphContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-top: -110px;
`;

export const GraphInner = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 270px;
  border-radius: 8px;
  background: #fff;
`;

export const GraphTitle = styled.Text`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.title};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const H1 = styled.Text`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.title};
  justify-content: flex-start;
  align-items: center;
  margin: 16px 0 16px 30px;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const CardsContainer = styled.View`
  width: 100%;
  display: flex;
  padding: 10px;
  
`;

export const CardsContaineScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 50,
    height: 190,
  }
})`
  position: absolute;
  display: flex;
  padding: 0 24px;
  flex-direction: row;
  width: 110%;
`;

export const ContainerIntro = styled.View`
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: -100px;
`;

export const Fake = styled.View`
  height: 270px;
`;

export const Title = styled.Text`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.title};
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 20px 4px;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const DevelopersContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 16px;
  position: absolute;
  justify-content: center;
  text-align: center;
`;

export const DevelopersBtn = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 20px;
  position: absolute;
  justify-content: center;
  text-align: center;
`;

export const DevelopersBtnText = styled.Text`
  color: ${props => props.theme.colors.title}50;
`;