import styled from 'styled-components/native';
import MapboxGL from '../../services/mapbox';
import colors from '../colors';

export const MapInputBlock = styled.View`
  position: absolute;
  bottom: 19px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MapInput = styled.TextInput`
  width: 305px;
  height: 67px;
  border-radius: 20px;
  background-color: #fff;
  padding-left: 10px;
  elevation: 3;
  font-size: 17px;
`;

export const ConfirmFab = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${colors.second_green};

  width: 67px;
  height: 67px;
  border-radius: 50px;

  margin-left: 6px;
  elevation: 5;
`;

export const AbsoluteConfirmFab = styled(ConfirmFab)`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const InputBlock = styled.View`
  flex-direction: row;
  align-items: center;

  border-bottom-color: ${colors.main_green};
  border-bottom-width: 1px;

  width: 332px;
  height: 38px;
`;

export const StyledInput = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
  width: 100%;
  color: ${colors.main_green};
`;

export const AddImage = styled.TouchableOpacity`
  width: 311px;
  height: 180px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;

  border-width: 1px;
  border-color: ${colors.main_green};
  border-radius: 14px;

  background-color: ${colors.second_grey};
`;

export const AddImageText = styled.Text`
  color: ${colors.main_green};
`;

export const ReviewScroll = styled.ScrollView`
  margin-top: 78px;
`;

export const AlignBlock = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
`;

export const ReviewTitle = styled.Text`
  font-size: 20px;
  color: ${colors.main_green};
  font-weight: bold;
  margin-left: 7px;
`;

export const ReviewText = styled.Text`
  color: ${colors.text_grey};
  line-height: 28px;
`;

export const ReviewBlock = styled.View`
  width: 361px;
`;

export const ReviewTextBlock = styled.View`
  margin-top: 24px;
`;

export const ReviewMap = styled(MapboxGL.MapView)`
  height: 205px;
  margin-top: 9px;
  border-color: ${colors.main_grey};
  border-width: 1px;
`;

export const ReviewImage = styled.Image`
  width: 361px;
  height: 211px;
  margin: 21px 0;

  border-radius: 15px;
  border-width: 1px;
  border-color: ${colors.main_grey};
`;

export const ReviewImageBlock = styled.View`
  flex-direction: row;
`;

export const ReviewImageMini = styled(ReviewImage)`
  width: 55px;
  height: 55px;
  margin-right: 12px;
`;

export const ReviewFinish = styled.TouchableOpacity`
  width: 259px;
  height: 57px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background-color: ${colors.second_green};
  elevation: 3;

  margin: 24px 0;
`;

export const ReviewFinishText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
