import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import {
  DestinationAddress,
  DestinationContainer,
  DestinationPhone,
  DestinationTitle,
} from '../styles/components/destination-box';

const DestinationBox: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <DestinationContainer
      onPress={() => navigate('Details')}
      activeOpacity={0.5}>
      <View>
        <DestinationTitle>Ecoponto blablabla</DestinationTitle>
        <DestinationAddress>Rua lkajsdlkajs</DestinationAddress>
        <DestinationPhone>Tel: 39128391</DestinationPhone>
      </View>
      <Icon name="arrow-forward" size={26} color={colors.main_green} />
    </DestinationContainer>
  );
};

export default DestinationBox;
