import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  
background: #fff;
`;

export const Header = styled.ImageBackground`
  width: 100%;
  height: ${RFPercentage(40)}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #ffffff;
  z-index: 0;
  padding: 50px 0;
`;

export const BackButtonContianer = styled.View`
  position: absolute;
  left: 0;
  top: ${RFValue(60)}px;
  z-index: 999999999;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 0 30px;
  margin-top: 0;
  z-index: 9999999;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const Title2 = styled.Text`
  color: ${props => props.theme.colors.title};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-bottom: 16px;
`;

export const Teacher = styled.Text`
  color: #fff;
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;

export const ContainerIntro = styled.View`
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: -20px;
  height: ${RFPercentage(73)}px;
`;

export const AvatarContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 16px;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 48px;
  margin-bottom: 10px;
`;

export const TopicContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px 0 16px 0;
  margin-bottom: 16px;
`;

export const Topic = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${props => props.theme.colors.title};
  text-decoration: dotted;
  margin-bottom: 4px;
`;

export const CardsContaineScroll = styled.ScrollView.attrs({
  vertical: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1, 
    paddingBottom: 48,
  }
})`
  display: flex;
  padding: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
