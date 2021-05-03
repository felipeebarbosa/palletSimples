import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SeeListPallets from '../screens/SeeListPallets';
import CreatListPallet from '../screens/CreatListPallet';
import AddMaterialDatabase from '../screens/AddMaterialDatabase';
import MaterialsRegistered from '../screens/MaterialsRegistered';
import ScreenNull from '../screens/ScreenNull';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SeeListPallets" component={SeeListPallets} />
      <Stack.Screen name="CreatListPallet" component={CreatListPallet} />
      <Stack.Screen
        name="AddMaterialDatabase"
        component={AddMaterialDatabase}
      />
      <Stack.Screen
        name="MaterialsRegistered"
        component={MaterialsRegistered}
      />
      <Stack.Screen name="ScreenNull" component={ScreenNull} />
    </Stack.Navigator>
  );
};
