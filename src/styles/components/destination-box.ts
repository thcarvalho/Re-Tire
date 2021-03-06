import styled from 'styled-components/native';
import colors from '../colors';

export const DestinationContainer = styled.TouchableOpacity`
  max-width: 100%;
  min-height: 104px;
  padding: 12px 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: ${colors.main_grey};
  border-bottom-width: 1px;
`;

export const DestinationTitle = styled.Text`
  margin-bottom: 16px;
  font-size: 18px;
  color: ${colors.main_green};
  font-weight: bold;
`;

export const DestinationAddress = styled.Text`
  color: ${colors.bold_grey};
  width: 310px;
`;

export const DestinationPhone = styled.Text`
  color: ${colors.main_grey};
`;
