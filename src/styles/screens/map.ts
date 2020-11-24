import styled from 'styled-components/native';
import colors from '../colors';

export const BarsMenu = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 40px;
`;

export const DestinationsSearch = styled.TextInput`
  position: absolute;
  bottom: 20px;
  justify-content: center;
  align-items: center;

  padding-left: 22px;
  width: 354px;
  height: 54px;
  border-radius: 15px;

  background-color: #fff;
  font-size: 14px;
  color: ${colors.main_grey};
  elevation: 2;
`;
