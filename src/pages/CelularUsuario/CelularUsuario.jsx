import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CelularUsuario({navigation}) {
    const [celular, setCelular] = useState('');
  
    const handleProximoPress = () => {
      console.log('Celular inserido', celular);
      navigation.navigate('CpfUsuario');
    };

    return (
        <View style={styles.container}>
          <Text style={styles.label}>Insira seu celular (00) 00000-0000</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setCelular}
              value={celular}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleProximoPress}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      paddingTop: 60,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    inputContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#3FA781',
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 540,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });