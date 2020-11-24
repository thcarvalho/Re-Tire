import styled from 'styled-components/native';
import colors from './colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  height: 78px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.second_green};
  padding-left: 15px;
  padding-right: 15px;
`;
export const HeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
