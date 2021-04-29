import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import { Container, AreaView, AreaViewList, Message } from './styles';
import Button from '../../components/Button';
import NameTitleBack from '../../components/NameTitleBack';
import ListMaterials from '../../components/ListMaterials';

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
        <AreaViewList 
          data={[
            {
              codigo : 6060315,
              tom : 1120,
              nome : 'YORK SGR',
              palletsA : 1,
              caixasA : 1,
              palletsC : 2,
              caixasC : 3,
              

            }
          ]}
          keyExtractor={item => String(item.codigo)}
          renderItem={({item}) =>(
            <ListMaterials data={item}/>
          )}
        />
        
        <Button funcao={handleCreateList} title="Adicionar Material"></Button>
      </AreaView>
    </Container>
  );
};