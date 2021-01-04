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
} from '../styles/screens/details';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListNavigatorParams } from '../routes/list-navigator';
import { Marker } from '../styles/screens/map';

const Details: React.FC = () => {
  const {
    params: { destination },
  } = useRoute<RouteProp<ListNavigatorParams, 'Details'>>();

  const { navigate, goBack } = useNavigation();
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
                centerCoordinate={[destination.longitude, destination.latitude]}
                zoomLevel={15}
              />
              <MapboxGL.PointAnnotation
                key={destination.id}
                id={String(destination.id)}
                draggable={false}
                coordinate={[destination.longitude, destination.latitude]}>
                <Marker />
              </MapboxGL.PointAnnotation>
            </DetailsMap>

            <DetailsLocation>
              <DetailsText>{destination.address}</DetailsText>
              <DetailsText>CEP: {destination.cep}</DetailsText>
            </DetailsLocation>

            <DetailsMapButton onPress={() => navigate('Map')}>
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
              <DetailsText>{destination.phone}</DetailsText>
              <DetailsText>E-mail: {destination.email}</DetailsText>
              <DetailsText>Seg à Sex: {destination.opening_hours}</DetailsText>
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
            <DetailsImage source={{ uri: destination.images[0].url }} />
            {/* <DetailsImageBlock>
              <DetailsImageMini source={ecoImg} />
              <DetailsImageMini source={ecoImg} />
              <DetailsImageMini source={ecoImg} />
            </DetailsImageBlock> */}
          </DetailsBlock>
        </Container>
      </DetailsScroll>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText style={{ marginRight: 13 }}>{destination.name}</HeaderText>
        <View />
      </Header>
    </>
  );
};

export default Details;
