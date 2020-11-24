import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapboxGL from '../../services/mapbox';
import colors from '../../styles/colors';
import { Container, Header, HeaderText } from '../../styles/global';
import {
  ConfirmFab,
  MapInput,
  MapInputBlock,
} from '../../styles/screens/suggestions';

const SuggestionsMap: React.FC = () => {
  return (
    <Container>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Light}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <MapboxGL.Camera
          centerCoordinate={[-46.4961449, -23.4877088]}
          zoomLevel={15}
        />
      </MapboxGL.MapView>

      <MapInputBlock>
        <MapInput
          selectionColor={colors.third_green}
          placeholderTextColor={colors.main_grey}
          placeholder="Pequise ou toque no mapa..."
        />
        <ConfirmFab>
          <Icon name="checkmark-sharp" size={40} color="#fff" />
        </ConfirmFab>
      </MapInputBlock>

      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#FFF" />
        </TouchableOpacity>
        <HeaderText>Qual o local?</HeaderText>
        <TouchableOpacity>
          <Icon name="close-outline" size={26} color="#FFF" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SuggestionsMap;
