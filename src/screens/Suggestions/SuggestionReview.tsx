import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import MapboxGL from '../../services/mapbox';
import colors from '../../styles/colors';
import { Container, Header, HeaderText } from '../../styles/global';
import {
  AlignBlock,
  ReviewScroll,
  ReviewTitle,
  ReviewText,
  ReviewBlock,
  ReviewMap,
  ReviewImage,
  ReviewImageBlock,
  ReviewImageMini,
  ReviewTextBlock,
  ReviewFinish,
  ReviewFinishText,
} from '../../styles/screens/suggestions';

import ecoImg from '../../assets/images/ECOPONTO.jpg';

const SuggestionReview: React.FC = () => {
  return (
    <>
      <ReviewScroll>
        <Container>
          <ReviewBlock>
            <AlignBlock>
              <IconMA
                name="location-searching"
                size={20}
                color={colors.main_green}
              />
              <ReviewTitle>Localização</ReviewTitle>
            </AlignBlock>

            <ReviewMap
              pitchEnabled={false}
              scrollEnabled={false}
              zoomEnabled={false}
              styleURL={MapboxGL.StyleURL.Light}>
              <MapboxGL.Camera
                centerCoordinate={[-46.4961449, -23.4877088]}
                zoomLevel={15}
              />
            </ReviewMap>

            <ReviewTextBlock>
              <ReviewText>Rua salkdaskdj</ReviewText>
              <ReviewText>CEP: 120398</ReviewText>
            </ReviewTextBlock>
          </ReviewBlock>

          <ReviewBlock>
            <AlignBlock>
              <IconMA name="local-phone" size={20} color={colors.main_green} />
              <ReviewTitle>Contato</ReviewTitle>
            </AlignBlock>

            <ReviewTextBlock>
              <ReviewText>11208239882</ReviewText>
              <ReviewText>E-mail: alkdj@açsdj.com</ReviewText>
              <ReviewText>Seg a Sex: 11h às 16h</ReviewText>
            </ReviewTextBlock>
          </ReviewBlock>

          <ReviewBlock>
            <AlignBlock>
              <IconMA name="photo" size={20} color={colors.main_green} />
              <ReviewTitle>Fotos</ReviewTitle>
            </AlignBlock>

            <ReviewImage source={ecoImg} />
            <ReviewImageBlock>
              <ReviewImageMini source={ecoImg} />
              <ReviewImageMini source={ecoImg} />
              <ReviewImageMini source={ecoImg} />
            </ReviewImageBlock>
          </ReviewBlock>

          <ReviewFinish>
            <ReviewFinishText>Tudo Ok!</ReviewFinishText>
          </ReviewFinish>
        </Container>
      </ReviewScroll>
      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#FFF" />
        </TouchableOpacity>
        <HeaderText>Tudo certo?</HeaderText>
        <TouchableOpacity>
          <Icon name="close-outline" size={26} color="#FFF" />
        </TouchableOpacity>
      </Header>
    </>
  );
};

export default SuggestionReview;
