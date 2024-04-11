// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faBell, faClipboardList } from '@fortawesome/free-solid-svg-icons';



import EmailUsuario from './src/pages/EmailUsuario/EmailUsuario';
import SenhaUsuario from './src/pages/SenhaUsuario/SenhaUsuario';
import TelaHome from './src/pages/TelaHome/TelaHome';
import TelaPerfil from './src/pages/Perfil/TelaPerfil';
import TelaPedidos from './src/pages/Pedidos/TelaPedidos';
import TelaNotificacao from './src/pages/Notificacao/TelaNotificacao';
import TelaCarrinho from './src/pages/TelaCarrinho/TelaCarrinho';
import NomeUsuario from './src/pages/NomeUsuario/NomeUsuario';
import CelularUsuario from './src/pages/CelularUsuario/CelularUsuario';
import CpfUsuario from './src/pages/CpfUsuario/CpfUsuario';
import { Title } from 'react-native-paper';
import Toast, { ErrorToast } from 'react-native-toast-message';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabs() {

    return (

        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
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
    const toastConfig = {
        error: (props) => (
            <ErrorToast
                {...props}
                text1Style={{
                    fontSize: 10
                }}
                text2Style={{
                    fontSize: 8
                }}
                text2NumberOfLines={2}
                style={{ borderLeftColor: "red" }}
            />
        )
    }
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="EmailUsuario" component={EmailUsuario} />
                    <Stack.Screen name="SenhaUsuario" component={SenhaUsuario} />
                    <Stack.Screen name="TelaHome" component={BottomTabs} />
                    <Stack.Screen name="TelaNotificacao" component={TelaNotificacao} />
                    <Stack.Screen name="TelaPedidos" component={TelaNotificacao} />
                    <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
                    <Stack.Screen name="TelaCarrinho" component={TelaCarrinho} />
                    <Stack.Screen name="NomeUsuario" component={NomeUsuario} />
                    <Stack.Screen name="CelularUsuario" component={CelularUsuario} />
                    <Stack.Screen name="CpfUsuario" component={CpfUsuario} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast config={toastConfig} />
        </>
    );
}
