import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  DrawerHeader,
  DrawerBottomDivider,
  AlignBlock,
  DrawerText,
  AlignContainer,
} from '../styles/components/custom-drawer';

import logoImg from '../assets/images/branco.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <DrawerHeader>
        <Image
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
          source={logoImg}
        />
      </DrawerHeader>
      <View
        style={{
          marginTop: 200,
        }}
      />
      <DrawerItemList {...props} />
      <DrawerBottomDivider />
      <AlignContainer>
        <AlignBlock>
          <Icon name="people-alt" size={24} color={colors.third_green} />
          <DrawerText>Sobre</DrawerText>
        </AlignBlock>
        <AlignBlock>
          <Icon name="local-phone" size={24} color={colors.third_green} />
          <DrawerText>Contato</DrawerText>
        </AlignBlock>
      </AlignContainer>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
