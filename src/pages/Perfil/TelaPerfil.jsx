import React from "react";
import { View, Text, ScrollView } from "react-native-web";


export default function TelaPerfil(){
    return(
        <ScrollView>
        <View>
            <Text>Minhas Informações </Text>
        </View>
        <View>
            <Text>Favoritos  </Text>
        </View>
        <View>
            <Text>Acessar Restaurante  </Text>
        </View>
        <View>
            <Text>Configurações  </Text>
        </View>
        <View>
            <Text>Sobre  </Text>
        </View>
        <View>
            <Text>Sair  </Text>
        </View>

        </ScrollView>
       
    )
}