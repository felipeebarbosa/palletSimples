import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import InputText from '../../components/InputText';
import InputNumber from '../../components/InputNumber';
import InputNumberSmall from '../../components/InputNumberSmall';
import Label from '../../components/Label';
import NameTitleBack from '../../components/NameTitleBack';
import Button from '../../components/Button';
import Space from '../../components/Space';

import { Container, AreaView, AreaInput, AreaLabel, Column } from './styles';

export default () => {



  const [ codigo, setCodigo ] = useState('')
  const [tom, setTom] = useState('');
  const [palletsA, setPalletsA] = useState();
  const [caixasA, setCaixasA] = useState('');
  const [palletsC, setPalletsC] = useState('');
  const [caixasC, setCaixasC] = useState('');

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <NameTitleBack funcao={handleBack} title="PalletSimples" />
      <AreaView>
        <Label size={'20px'} color={true} label="Material" bold={true} />
       
        <AreaInput>
        <Column width={'60%'}>
        <Label size={'15px'} marginRight={'110px'} color={true} label="CÓDIGO" bold={false} />
          <InputNumber
            placeholder="Ex: 1234567"
            width={'100%'}
            value={codigo}
            onChangeText={setCodigo}
          />
          </Column>
          <Column  width={'40%'}>
          <Label size={'15px'} marginRight={'50px'} color={true} label="TOM" bold={false} />
          <InputNumber
            placeholder="Ex: 1100"
            width={'70%'}
            value={tom}
            onChangeText={(t) => setTom(t)}
          />
          </Column>
        </AreaInput>

        <Label size={'20px'} color={true} label="Quantidades" bold={true} />
        <AreaInput>
        <Column  width={'55%'}>
        <Label size={'15px'} color={true} label="PALLETS A" bold={false} />
          <InputNumberSmall
            placeholder="Ex: 5"
            value={palletsA}
            onChangeText={(t) => setPalletsA(t)}
          />
          </Column>
          <Column  width={'55%'}>
          <Label size={'15px'} color={true} label="CAIXAS A" bold={false} />
          <InputNumberSmall
            placeholder="Ex: 5"
            value={caixasA}
            onChangeText={(t) => setCaixasA(t)}
          />
          </Column>
        </AreaInput>
        <AreaInput>
        <Column  width={'55%'}>
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
        <Button  title="Salvar" />
      </AreaView>
    </Container>
  );
};
