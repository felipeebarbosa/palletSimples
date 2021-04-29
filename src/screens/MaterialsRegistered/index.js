import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import { Container, AreaView, AreaViewList, Message } from './styles';
import Button from '../../components/Button';
import NameTitleBack from '../../components/NameTitleBack';

export default () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleCreateList = () => {
    navigation.navigate({ name: 'CreatListPallet' });
  };

  return (
    <Container>
      <NameTitleBack funcao={handleBack} title="PalletSimples" />
      <AreaView>
        <AreaViewList>
          <Message>Nenhum material foi adicionado!</Message>
        </AreaViewList>
        <Button funcao={handleCreateList} title="Adicionar Material"></Button>
      </AreaView>
    </Container>
  );
};
