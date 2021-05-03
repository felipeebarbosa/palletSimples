import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default () =>{
  const navigation = useNavigation();

  navigation.reset({
    routes : [{ name : 'SeeListPallets'}]
  })
  
  return (
    <SafeAreaView></SafeAreaView>
  )
}
