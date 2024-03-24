// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EmailUsuario from './src/pages/EmailUsuario/EmailUsuario';
import SenhaUsuario from './src/pages/SenhaUsuario/SenhaUsuario';
import TelaHome from './src/pages/TelaHome/TelaHome'

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="EmailUsuario" component={EmailUsuario} />
                <Stack.Screen name="SenhaUsuario" component={SenhaUsuario} />
                <Stack.Screen name="TelaHome" component={TelaHome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
