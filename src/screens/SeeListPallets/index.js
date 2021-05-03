import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  AreaView,
  AreaViewList,
  Message,
  ListMaterials2,
  WraperCont,
  Codigo,
  Tom,
  Nome,
  ContA,
  ContC,
  Label,
  ViewSVG,
  Trash,
} from './styles';
import Button from '../../components/Button';
import NameTitleBack from '../../components/NameTitleBack';
import ListMaterials from '../../components/ListMaterials';
import Space from '../../components/Space';

import { DatabaseConnection } from '../../services/SQLlite';

const db = DatabaseConnection.getConnection();

export default () => {
  let [flatListItems, setFlatListItems] = useState([]);
  let [ conteudo , setSemConteudo ] = useState('')
  let [ marginTop, setMarginTop] = useState('0px')
 
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate({
      name : 'Home'
    });
  };
  const handleCreateList = () => {
    navigation.navigate({ name: 'CreatListPallet' });
  };
  
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM pallets_simples', [], (tx, results) => {
       if(results.rows.length === 0){
          setSemConteudo('Não há materias cadastrados')
          setMarginTop('50%')
       }
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setFlatListItems(temp);
        
      });
    });
  }, []);



  const ListMaterialsDB = (item) => {
    if (flatListItems == [""]){
      console.log("nada")
    }

    const deletePallets = () => {

    //  console.log(item.codigo)
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  pallets_simples where codigo=?',
        [item.codigo],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
           navigation.navigate({
              name: 'Home',
            });
          } else {
            alert('ERROR');
          }
        }
      );
    });
  };
    return (
      <AreaView key={item.codigo}>
        <ListMaterials2>
          <WraperCont space={true}>
            <Codigo>{item.codigo}</Codigo>
            <Tom>{item.tom}</Tom>
            <Trash onPress={deletePallets} >
              <ViewSVG style={styles.img}>
                <Feather  name="trash" size={20} color="black" />
              </ViewSVG>
            </Trash>
          </WraperCont>
          <WraperCont>
            <Nome>{item.nome}</Nome>
          </WraperCont>
          <WraperCont>
            <Label>Pallets A : </Label>
            <ContA>{item.pallets_a}</ContA>
            <Label margin={true}>Caixas A : </Label>
            <ContA>{item.caixas_a}</ContA>
          </WraperCont>
          <WraperCont>
            <Label>Pallets C : </Label>
            <ContC>{item.pallets_c}</ContC>
            <Label margin={true}>Caixas C : </Label>
            <ContC>{item.caixas_c}</ContC>
          </WraperCont>
        </ListMaterials2>
      </AreaView>
    );
  };

  return (
    <Container>
      <NameTitleBack funcao={handleBack} title="PalletSimples" />
      <Space width={'2px'} height={'40px'} color={'#F3F3F3'} />
      <Message marginTop={marginTop}>{conteudo}</Message>
      <AreaViewList
        data={flatListItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => ListMaterialsDB(item)}
      />
    </Container>
  );
};

export const styles = StyleSheet.create({
  img: {
    //  position : "absolute",
  },
});
