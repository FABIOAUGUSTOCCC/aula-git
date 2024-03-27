import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";


export default function TelaCarrinho(){
    return(
        <View style={styles.container}>
        <Text style={styles.label}>Digite seu email:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleProximoPress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    );
}