import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../styles/colors';
import { Container, Header, HeaderText } from '../../styles/global';
import {
  AbsoluteConfirmFab,
  AddImage,
  AddImageText,
} from '../../styles/screens/suggestions';

const SuggestionsImage: React.FC = () => {
  return (
    <Container>
      <AddImageText>Toque para adicionar</AddImageText>
      <AddImage>
        <Icon name="add" size={100} color={colors.main_green} />
      </AddImage>
      <AbsoluteConfirmFab>
        <Icon name="checkmark-sharp" size={40} color="#fff" />
      </AbsoluteConfirmFab>
      <Header>
        <TouchableOpacity>
          <Icon name="chevron-back" size={26} color="#FFF" />
        </TouchableOpacity>
        <HeaderText>Tem alguma foto?</HeaderText>
        <TouchableOpacity>
          <Icon name="close-outline" size={26} color="#FFF" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SuggestionsImage;
