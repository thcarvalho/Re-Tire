import MapboxGL from '../services/mapbox';
import React from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BarsMenu, DestinationsSearch } from '../styles/screens/map';
import colors from '../styles/colors';
import { Container } from '../styles/global';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface IDrawerProps {
  navigation: DrawerNavigationHelpers;
}

const Map = ({ navigation }: IDrawerProps) => {
  return (
    <Container>
      <MapboxGL.MapView
        // logoEnabled={false}
        // attributionEnabled={false}
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
      <BarsMenu onPress={navigation.toggleDrawer}>
        <Icon name="menu" size={35} color={colors.main_green} />
      </BarsMenu>
      <DestinationsSearch
        selectionColor={colors.third_green}
        placeholderTextColor={colors.main_grey}
        placeholder="Digite aqui sua pesquisa"
      />
    </Container>
  );
};

export default Map;
