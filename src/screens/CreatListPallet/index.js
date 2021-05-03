import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import InputText from '../../components/InputText';
import InputNumber from '../../components/InputNumber';
import InputNumberSmall from '../../components/InputNumberSmall';
import Label from '../../components/Label';
import NameTitleBack from '../../components/NameTitleBack';
import Button from '../../components/Button';
import Space from '../../components/Space';

import { Container, AreaView, AreaInput, AreaLabel, Column, Column2 } from './styles';

import { DatabaseConnection } from '../../services/SQLlite';

const db = DatabaseConnection.getConnection();

export default () => {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [tom, setTom] = useState('');
  const [palletsA, setPalletsA] = useState('');
  const [caixasA, setCaixasA] = useState('');
  const [palletsC, setPalletsC] = useState('');
  const [caixasC, setCaixasC] = useState('');
  const [ erro , setErro] = useState('#fff')

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  let cadaMaterials = () => {
    // console.log(codigo, nome, tom, palletsA, palletsC, caixasA, caixasC);
    if(codigo === '' || tom === ''){
     return Alert.alert('','CÓDIGO ou TOM inválido!')
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO pallets_simples (codigo, nome, tom, pallets_a, caixas_a, pallets_c, caixas_c) VALUES (?,?,?,?,?,?,?)',
        [codigo, nome, tom, palletsA, caixasA, palletsC, caixasC],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            setPalletsA('')
            setPalletsC('')
            setCaixasA('')
            setCaixasC('')
            setCodigo('')
            setTom('')

            // navigation.navigate({
            //   name: 'Home',
            // });
            
          } else alert('Erro ao tentar material');
        }
      );
    });
  };
  // codigo,
  // nome,
  // tom,
  // palletsA,
  // caixasA,
  // palletsC,
  // caixasC

  return (
    <Container>
      <NameTitleBack funcao={handleBack} title="PalletSimples" />
      <AreaView>
        <Label size={'20px'} color={true} label="Material" bold={true} />

        <AreaInput>
          <Column2 width={'80%'}>
            <Label
              size={'15px'}
              marginRight={'110px'}
              color={true}
              label="CÓDIGO *"
              bold={false}
            />
            <InputNumber
              placeholder="Ex: 1234567"
              width={'74%'}
              value={codigo}
              onChangeText={setCodigo}
              error={erro}
            />
          </Column2>
          <Column2 width={'40%'}>
            <Label
              size={'15px'}
              marginRight={'50px'}
              color={true}
              label="TOM *"
              bold={false}
            />
            <InputNumber
              placeholder="Ex: 1100"
              width={'95%'}
              value={tom}
              onChangeText={(t) => setTom(t)}
            />
          </Column2>
        </AreaInput>

        <Label size={'20px'} color={true} label="Quantidades" bold={true} />
        <AreaInput>
          <Column width={'55%'}>
            <Label size={'15px'} color={true} label="PALLETS A" bold={false} />
            <InputNumberSmall
              placeholder="Ex: 5"
              value={palletsA}
              onChangeText={(t) => setPalletsA(t)}
            />
          </Column>
          <Column width={'55%'}>
            <Label size={'15px'} color={true} label="CAIXAS A" bold={false} />
            <InputNumberSmall
              placeholder="Ex: 5"
              value={caixasA}
              onChangeText={(t) => setCaixasA(t)}
            />
          </Column>
        </AreaInput>
        <AreaInput>
          <Column width={'55%'}>
            <Label size={'15px'} color={true} label="PALLETS C" bold={false} />
            <InputNumberSmall
              placeholder="Ex: 5"
              value={palletsC}
              onChangeText={(t) => setPalletsC(t)}
            />
          </Column>
          <Column width={'55%'}>
            <Label size={'15px'} color={true} label="CAIXAS C" bold={false} />
            <InputNumberSmall
              placeholder="Ex: 5"
              value={caixasC}
              onChangeText={(t) => setCaixasC(t)}
            />
          </Column>
        </AreaInput>
        <Button funcao={cadaMaterials} title="Salvar" />
      </AreaView>
    </Container>
  );
};
