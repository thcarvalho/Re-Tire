import styled from 'styled-components/native';
import MapboxGL from '../../services/mapbox';
import colors from '../colors';

export const DetailsScroll = styled.ScrollView`
  margin-top: 78px;
`;

export const DetailsBlock = styled.View`
  border-bottom-color: ${colors.main_grey};
  border-bottom-width: 1px;
  padding-bottom: 31px;
  width: 361px;
`;

export const AlignBlock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
`;

export const DetailTitle = styled.Text`
  font-size: 20px;
  color: ${colors.main_green};
  font-weight: bold;
  margin-left: 7px;
`;

export const DetailsMap = styled(MapboxGL.MapView)`
  height: 205px;
  margin-top: 9px;
  border-color: ${colors.main_grey};
  border-width: 1px;
`;

export const DetailsLocation = styled.View`
  margin: 24px 0;
`;

export const DetailsText = styled.Text`
  color: ${colors.text_grey};
  line-height: 28px;
`;

export const DetailsMapButton = styled.TouchableOpacity`
  width: 251px;
  height: 38px;

  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;

  background-color: ${colors.main_blue};
  border-radius: 25px;
`;

export const DetailsButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 4px;
`;

export const DetailsContact = styled.View`
  margin: 39px 0;
`;

export const DetailsWhatsappButton = styled(DetailsMapButton)`
  background-color: ${colors.third_green};
`;

export const DetailsImageText = styled(DetailsText)`
  margin-top: 18px;
`;

export const DetailsImage = styled.Image`
  width: 361px;
  height: 211px;
  margin: 21px 0;

  border-radius: 15px;
  border-width: 1px;
  border-color: ${colors.main_grey};
`;

export const DetailsImageBlock = styled.View`
  flex-direction: row;
`;

export const DetailsImageMini = styled(DetailsImage)`
  width: 55px;
  height: 55px;
  margin-right: 12px;
`;
