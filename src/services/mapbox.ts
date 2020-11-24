import MapboxGL from '@react-native-mapbox-gl/maps';
import { REACT_APP_MAPBOX_TOKEN } from '@env';

MapboxGL.setAccessToken(REACT_APP_MAPBOX_TOKEN);

MapboxGL.setConnected(true);

export default MapboxGL;
