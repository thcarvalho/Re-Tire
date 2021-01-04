import MapboxGL from '../services/mapbox';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Animated, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  BarsMenu,
  DestinationsSearch,
  InputBlock,
  ListButton,
  Marker,
  SearchBox,
  SearchInfo,
  SearchResult,
  SearchTitle,
} from '../styles/screens/map';
import colors from '../styles/colors';
import { Container } from '../styles/global';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import api from '../services/api';
import IDestination from '../models/Destination';
import { useNavigation } from '@react-navigation/native';

interface IDrawerProps {
  navigation: DrawerNavigationHelpers;
}

const Map = ({ navigation }: IDrawerProps) => {
  const [destinations, setDestinations] = useState<IDestination[]>([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<IDestination[]>([]);

  const downAnimation = useRef(new Animated.Value(0)).current;

  const { navigate } = useNavigation();

  function animateResult() {
    Animated.timing(downAnimation, {
      toValue: Number(downAnimation) === 300 ? 0 : 300,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    api.get('/destinations').then((response) => setDestinations(response.data));
  }, []);

  async function handleSearchDestinations() {
    if (!search) {
      return;
    }
    const response = await api.get('/search', { params: { search } });

    setSearchResult(response.data);
    animateResult();
  }

  return (
    <Container>
      <MapboxGL.MapView
        // logoEnabled={false}
        // attributionEnabled={false}
        compassEnabled={false}
        styleURL={MapboxGL.StyleURL.Light}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <MapboxGL.Camera
          centerCoordinate={[-46.4961449, -23.4877088]}
          zoomLevel={15}
        />
        {destinations.map((destination) => (
          <MapboxGL.PointAnnotation
            key={destination.id}
            id={String(destination.id)}
            draggable={false}
            coordinate={[destination.longitude, destination.latitude]}>
            <Marker />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
      <BarsMenu onPress={navigation.toggleDrawer}>
        <Icon name="menu" size={35} color={colors.main_green} />
      </BarsMenu>
      <InputBlock
        style={{
          bottom: Number(downAnimation) === 0 ? 20 : downAnimation,
        }}>
        <DestinationsSearch
          selectionColor={colors.third_green}
          placeholderTextColor={colors.main_grey}
          placeholder="Digite aqui sua pesquisa"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(search) => setSearch(search)}
        />
        <TouchableOpacity onPress={handleSearchDestinations}>
          <Icon name="search-outline" size={28} color={colors.main_grey} />
        </TouchableOpacity>
      </InputBlock>
      <SearchResult
        style={{
          height: downAnimation,
        }}>
        {searchResult.map((result) => (
          <SearchBox
            onPress={() => navigate('Details', { destination: result })}
            key={result.id}>
            <View>
              <SearchTitle>{result.name}</SearchTitle>
              <SearchInfo>{result.address}</SearchInfo>
              <SearchInfo>{result.phone}</SearchInfo>
            </View>
            <Icon name="arrow-forward" size={28} color={colors.main_green} />
          </SearchBox>
        ))}
        <ListButton>
          <TouchableOpacity onPress={() => navigate('List')}>
            <Icon name="chevron-down" size={25} color={colors.main_grey} />
          </TouchableOpacity>
        </ListButton>
      </SearchResult>
    </Container>
  );
};

export default Map;
