import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFO from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';
import { Container, Header, HeaderText } from '../../styles/global';
import {
  AbsoluteConfirmFab,
  InputBlock,
  StyledInput,
} from '../../styles/screens/suggestions';
import { useNavigation } from '@react-navigation/native';

const SuggestionsName: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <Container>
      <InputBlock>
        <IconFO name="pen" size={16} color={colors.main_green} />
        <StyledInput
          placeholderTextColor={colors.main_green}
          placeholder="Digite o nome do ecoponto..."
        />
      </InputBlock>
      <AbsoluteConfirmFab onPress={() => navigate('SuggestionContact')}>
        <Icon name="checkmark-sharp" size={40} color="#fff" />
      </AbsoluteConfirmFab>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-back" size={26} color="#FFF" />
        </TouchableOpacity>
        <HeaderText>Qual o nome?</HeaderText>
        <TouchableOpacity onPress={() => navigate('Map')}>
          <Icon name="close-outline" size={26} color="#FFF" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default SuggestionsName;
