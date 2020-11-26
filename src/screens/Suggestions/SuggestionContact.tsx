import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFO from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, HeaderText } from '../../styles/global';
import {
  InputBlock,
  StyledInput,
  AbsoluteConfirmFab,
} from '../../styles/screens/suggestions';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

const SuggestionsContact: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <Container>
      <InputBlock>
        <IconFO name="phone-alt" size={16} color={colors.main_green} />
        <StyledInput
          placeholderTextColor={colors.main_green}
          placeholder="Telefone"
        />
      </InputBlock>
      <InputBlock
        style={{
          marginVertical: 75,
        }}>
        <Icon name="mail" size={16} color={colors.main_green} />
        <StyledInput
          placeholderTextColor={colors.main_green}
          placeholder="E-mail"
        />
      </InputBlock>
      <InputBlock>
        <IconFO name="clock" size={16} color={colors.main_green} />
        <StyledInput
          placeholderTextColor={colors.main_green}
          placeholder="Horários de funcionamento"
        />
      </InputBlock>

      <AbsoluteConfirmFab onPress={() => navigate('SuggestionImage')}>
        <Icon name="checkmark-sharp" size={40} color="#fff" />
      </AbsoluteConfirmFab>

      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#FFF" />
        </TouchableOpacity>
        <HeaderText>Quais os meios de contato?</HeaderText>
        <TouchableOpacity onPress={() => navigate('Map')}>
          <Icon name="close-outline" size={26} color="#FFF" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SuggestionsContact;
