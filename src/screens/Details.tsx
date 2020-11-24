import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import MapboxGL from '../services/mapbox';
import colors from '../styles/colors';
import { Container, Header, HeaderText } from '../styles/global';
import {
  AlignBlock,
  DetailsLocation,
  DetailsText,
  DetailsMap,
  DetailsScroll,
  DetailTitle,
  DetailsMapButton,
  DetailsButtonText,
  DetailsBlock,
  DetailsContact,
  DetailsWhatsappButton,
  DetailsImage,
  DetailsImageText,
  DetailsImageMini,
  DetailsImageBlock,
} from '../styles/screens/details';
import ecoImg from '../assets/images/ECOPONTO.jpg';

const Details: React.FC = () => {
  return (
    <>
      <DetailsScroll>
        <Container>
          <DetailsBlock>
            <AlignBlock>
              <IconMA
                name="location-searching"
                size={20}
                color={colors.main_green}
              />
              <DetailTitle>Localização</DetailTitle>
            </AlignBlock>

            <DetailsMap
              pitchEnabled={false}
              scrollEnabled={false}
              zoomEnabled={false}
              styleURL={MapboxGL.StyleURL.Light}>
              <MapboxGL.Camera
                centerCoordinate={[-46.4961449, -23.4877088]}
                zoomLevel={15}
              />
            </DetailsMap>

            <DetailsLocation>
              <DetailsText>Rua alksjdlkasjd</DetailsText>
              <DetailsText>CEP: 0129310-93</DetailsText>
            </DetailsLocation>

            <DetailsMapButton>
              <Icon name="location-sharp" size={22} color="#fff" />
              <DetailsButtonText>Ver no Maps</DetailsButtonText>
            </DetailsMapButton>
          </DetailsBlock>

          <DetailsBlock>
            <AlignBlock>
              <IconMA name="local-phone" size={20} color={colors.main_green} />
              <DetailTitle>Contato</DetailTitle>
            </AlignBlock>

            <DetailsContact>
              <DetailsText>11 123123123</DetailsText>
              <DetailsText>E-mail: asdkjaçlksjdklj@asçdlkas.com</DetailsText>
              <DetailsText>Seg a Sex: 9h às 18h</DetailsText>
            </DetailsContact>

            <DetailsWhatsappButton>
              <Icon name="logo-whatsapp" size={22} color="#fff" />
              <DetailsButtonText>Falar por Whatsapp</DetailsButtonText>
            </DetailsWhatsappButton>
          </DetailsBlock>

          <DetailsBlock>
            <AlignBlock>
              <IconMA name="photo" size={20} color={colors.main_green} />
              <DetailTitle>Fotos</DetailTitle>
            </AlignBlock>

            <DetailsImageText>2 fotos encontradas</DetailsImageText>

            <DetailsImage source={ecoImg} />
            <DetailsImageBlock>
              <DetailsImageMini source={ecoImg} />
              <DetailsImageMini source={ecoImg} />
              <DetailsImageMini source={ecoImg} />
            </DetailsImageBlock>
          </DetailsBlock>
        </Container>
      </DetailsScroll>
      <Header>
        <Icon name="chevron-back" size={26} color="#fff" />
        <HeaderText style={{ marginRight: 13 }}>Ecoponto açsdka</HeaderText>
        <View />
      </Header>
    </>
  );
};

export default Details;
