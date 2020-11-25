import styled from 'styled-components/native';
import colors from '../colors';

export const DrawerHeader = styled.View`
  width: 100%;
  height: 190px;
  background-color: ${colors.second_green};

  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

export const DrawerBottomDivider = styled.View`
  width: 225px;
  align-self: center;
  margin-top: 61px;
  border-bottom-color: ${colors.third_green};
  border-bottom-width: 1px;
`;

export const AlignContainer = styled.View`
  margin-top: 52px;
`;

export const AlignBlock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  height: 59px;
`;

export const DrawerText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.third_green};
  margin-left: 10px;
`;
