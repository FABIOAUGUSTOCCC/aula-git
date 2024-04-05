// EmailScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro';


export default function CelularUsuario({ navigation }) {
  const [celular, setCeluar] = useState('');

  const handleProximoPress = () => {
    console.log('Celular inserido:', celular);
    navigation.navigate('CpfUsuario');
  };

  return (
    <View style={styles.container}>
      <HeaderCadastro etapaAtual={3} />

      <View style={styles.content}>
        <Text style={styles.label}>Digite seu numero de celular: </Text>
        <Text style={styles.label}>email cadastrado</Text>  {/* inserir logica para trazer o email cadastrado */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setCeluar}
            value={celular}
            autoCapitalize="none"
            placeholder='(00)00000-0000'
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleProximoPress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 10
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
