import React, { useEffect, useState } from 'react';
import { Header, HeaderText } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import DestinationBox from '../components/DestinationBox';
import { DestinationScroll } from '../styles/screens/destination-list';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import IDestination from '../models/Destination';

const DestinationsList: React.FC = () => {
  const [destinations, setDestinations] = useState<IDestination[]>([]);

  const { goBack } = useNavigation();

  useEffect(() => {
    api.get('destinations').then((response) => setDestinations(response.data));
  }, []);

  return (
    <>
      <DestinationScroll>
        {destinations.map((destination) => (
          <DestinationBox key={destination.id} data={destination} />
        ))}
      </DestinationScroll>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>
        <HeaderText>Todos os Eco Pontos</HeaderText>
        <TouchableOpacity>
          <Icon name="search" size={26} color="#fff" />
        </TouchableOpacity>
      </Header>
    </>
  );
};

export default DestinationsList;
