import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContacts from './src/Pages/AppContacts'
import Contacts from './src/Pages/Contacts'
import Information from './src/Pages/Information'
import Financeiro from './src/Pages/Financeiro'
import Vendas from './src/Pages/Vendas'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AppContacts' component={AppContacts} />
      <Tab.Screen name='Contacts' component={Contacts} />
    </Tab.Navigator>
  )
}

export default function App() {



  return (
    /**
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AppContacts' component={Tabs} />
        <Stack.Screen name='Information' component={Information} />
      </Stack.Navigator>
    </NavigationContainer>

    */

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Financeiro' component={Financeiro} />
        <Drawer.Screen name='Vendas' component={Vendas} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}