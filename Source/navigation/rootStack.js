// navigation/RootStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack';
import AppStack from './appStack';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen 
        name="Auth" 
        component={AuthStack} 
        options={{ 
          presentation: 'modal',
          gestureEnabled: true
        }} 
      />
    </Stack.Navigator>
  );
}
