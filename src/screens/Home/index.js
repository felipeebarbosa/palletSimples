import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';3
import { Alert } from 'react-native'

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

import { DatabaseConnection } from '../../services/SQLlite';

const db = DatabaseConnection.getConnection();

export default () => {
  // console.log('iae');
  const [serachField, setSeachFild] = useState('');
  const navigation = useNavigation();


  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='pallets_simples'",
        [],
        function (tx, res) {
          // console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS pallets_simples', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS pallets_simples(id INTEGER PRIMARY KEY AUTOINCREMENT, codigo INT(8), nome VARCHAR(20), tom INT(40), pallets_a INT(3), caixas_a INT(3), pallets_c INT(3), caixas_c INT(3))',
              []
            );
          }
        }
      );
    });
  }, []);

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

  const disabled = () => {
  setSeachFild('Não funcional')

    Alert.alert(
      'Função indisponível no momento!',
      ''
      );
  };
  return (
    <Container>
      <NameTitle title="PalletSimples" />
      <AreaView>
        <AreaInput>
          <SearchInput
            placeholder="Pesquisar"></SearchInput>
          <SubmitSearch onPress={disabled}>
            <MaterialIcons name="search" size={30} color="#fff" />
          </SubmitSearch>
        </AreaInput>
        <Button funcao={handleSeeList} title="Ver lista de pallets" />
        <Button funcao={handleCreateList} title="Criar lista de pallets" />
        <Button funcao={disabled} title="Cadastrar material na base" />
        <Button funcao={disabled} title="Materiais cadastrado" />
      </AreaView>
    </Container>
  );
};
