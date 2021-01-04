import { Animated } from 'react-native';
import styled from 'styled-components/native';
import colors from '../colors';

export const BarsMenu = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 40px;
`;

export const InputBlock = styled(Animated.View)`
  position: absolute;
  /* bottom: 20px; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  padding-left: 22px;
  padding-right: 22px;
  width: 354px;
  height: 54px;
  border-radius: 15px;
  background-color: #fff;
  elevation: 4;

  flex-direction: row;
`;

export const DestinationsSearch = styled.TextInput`
  width: 90%;
  font-size: 14px;
  color: ${colors.main_grey};
`;

export const Marker = styled.View`
  height: 30px;
  width: 30px;
  background-color: #0f753a;
  border-radius: 50px;
  border-color: #fff;
  border-width: 3px;
`;

export const SearchResult = styled(Animated.ScrollView)`
  position: absolute;
  bottom: 20px;
  width: 354px;
  background-color: #fff;
  elevation: 3;
  border-radius: 15px;
`;

export const SearchBox = styled.TouchableOpacity`
  max-width: 100%;
  min-height: 69px;
  margin: 0 35px;
  padding: 9px 0;
  border-bottom-color: ${colors.main_grey};
  border-bottom-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.main_green};
  margin-bottom: 3px;
`;

export const SearchInfo = styled.Text`
  margin-bottom: 3px;
`;

export const ListButton = styled.View`
  height: 75px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
