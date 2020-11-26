import React from 'react';
import { Header, HeaderText } from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import DestinationBox from '../components/DestinationBox';
import { DestinationScroll } from '../styles/screens/destination-list';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DestinationsList: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <DestinationScroll>
        <DestinationBox />
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
