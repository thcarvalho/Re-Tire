import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IDestination from '../models/Destination';
import colors from '../styles/colors';
import {
  DestinationAddress,
  DestinationContainer,
  DestinationPhone,
  DestinationTitle,
} from '../styles/components/destination-box';

interface IDestinationProps {
  data: IDestination;
}

const DestinationBox = ({ data }: IDestinationProps) => {
  const { navigate } = useNavigation();
  return (
    <DestinationContainer
      onPress={() => navigate('Details', { destination: data })}
      activeOpacity={0.5}>
      <View>
        <DestinationTitle>{data.name}</DestinationTitle>
        <DestinationAddress>{data.address}</DestinationAddress>
        <DestinationPhone>Tel: {data.phone}</DestinationPhone>
      </View>
      <Icon name="arrow-forward" size={26} color={colors.main_green} />
    </DestinationContainer>
  );
};

export default DestinationBox;
