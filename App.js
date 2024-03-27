// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faBell, faClipboardList, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import EmailUsuario from './src/pages/EmailUsuario/EmailUsuario';
import SenhaUsuario from './src/pages/SenhaUsuario/SenhaUsuario';
import TelaHome from './src/pages/TelaHome/TelaHome';
import TelaPerfil from './src/pages/Perfil/TelaPerfil';
import TelaPedidos from './src/pages/Pedidos/TelaPedidos';
import TelaNotificacao from './src/pages/Notificacao/TelaNotificacao';
import TelaCarrinho from './src/pages/TelaCarrinho/TelaCarrinho';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="TelaCarrinho" component={TelaCarrinho} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faShoppingCart} color={color} size={size} />
                ),
            }} />
        </TopTab.Navigator>
    );
}

function BottomTabs() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={TelaHome} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faHome} color={color} size={size} />
                ),
            }} />
            <BottomTab.Screen name="Notificacao" component={TelaNotificacao} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faBell} color={color} size={size} />
                ),
            }} />
            <BottomTab.Screen name="Pedidos" component={TelaPedidos} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faClipboardList} color={color} size={size} />
                ),
            }} />
            <BottomTab.Screen name="Perfil" component={TelaPerfil} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faUser} color={color} size={size} />
                ),
            }} />
        </BottomTab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="EmailUsuario" component={EmailUsuario} />
                <Stack.Screen name="SenhaUsuario" component={SenhaUsuario} />
                <Stack.Screen name="TelaHome" component={BottomTabs}/>
                <Stack.Screen name="TelaNotificacao" component={TelaNotificacao}/>
                <Stack.Screen name="TelaPedidos" component={TelaNotificacao}/>
                <Stack.Screen name="TelaPerfil" component={TelaPerfil}/>
                <Stack.Screen name="TelaCarrinho" component={TopTabs}/>
                <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function MainTabs() {
    return (
        <React.Fragment>
            <TopTabs />
            <BottomTabs />
        </React.Fragment>
    );
}
