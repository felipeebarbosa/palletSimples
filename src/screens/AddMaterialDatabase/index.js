import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, AreaView, AreaInput, AreaLabel } from './styles';

import NameTitleBack from '../../components/NameTitleBack';
import InputText from '../../components/InputText';
import Label from '../../components/Label';
import Space from '../../components/Space';
import Button from '../../components/Button';

export default () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <NameTitleBack funcao={handleBack} title="PalletSimples" />
      <AreaView>
        <Label size={'20px'} color={true} label="Material" bold={true} />
        <Label size={'15px'} color={true} label="Nome" bold={false} />
        <InputText placeholder="Ex : Pallet Simples" width={'100%'} />
        <AreaLabel>
          <Label size={'15px'} color={true} label="Código" bold={false} />
          <Space width={'24%'} height={'1px'} color={'#F3F3F3'} />
          <Label size={'15px'} color={true} label="Formato" bold={false} />
        </AreaLabel>
        <AreaInput>
          <InputText placeholder="Ex: 1234567" width={'55%'} />
          <Space width={'5%'} height={'1px'} color={'#F3F3F3'} />
          <InputText placeholder="Ex: 90 X 90" width={'40%'} />
        </AreaInput>
        <Button title="Salvar"></Button>
      </AreaView>
    </Container>
  );
};
