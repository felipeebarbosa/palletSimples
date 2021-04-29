import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  AreaView,
  AreaInput,
  SearchInput,
  SubmitSearch,
} from './styles';

import NameTitle from '../../components/NameTitle';
import Button from '../../components/Button';

export default () => {

  const [ serachField, setseachFild ] = useState('')
  const navigation = useNavigation();

  const handleSeeList = () => {
    navigation.navigate({
      name: 'SeeListPallets',
    });
  };

  const handleCreateList = () => {
    navigation.navigate({
      name: 'CreatListPallet',
    });
  };

  const handleAddDatbase = () => {
    navigation.navigate({
      name: 'AddMaterialDatabase',
    });
  };

  const handleSeeDatbase = () => {
    navigation.navigate({
      name: 'MaterialsRegistered',
    });
  };

  const hh = () =>{
    alert(serachField)
  }
  return (
    <Container>
      <NameTitle title="PalletSimples" />
      <AreaView>
        <AreaInput>
          <SearchInput value={serachField} onChangeText={setseachFild} placeholder="Pesquisar"></SearchInput>
          <SubmitSearch onPress={hh}>
            <MaterialIcons name="search" size={30} color="#fff" />
          </SubmitSearch>
        </AreaInput>
        <Button funcao={handleSeeList} title="Ver lista de pallets" />
        <Button funcao={handleCreateList} title="Criar lista de pallets" />
        <Button funcao={handleAddDatbase} title="Cadastrar material na base" />
        <Button funcao={handleSeeDatbase} title="Materiais cadastrado" />
      </AreaView>
    </Container>
  );
};
