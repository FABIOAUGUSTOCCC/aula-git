import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro';
import ToastService from '../../Services/ToastService';

const EmailUsuario = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleProximoPress = async () => {

    if (!validarEmail(email)) {

      ToastService.Error("Erro ao cadastrar", "E-mail inválido");
      return;
    }

    const usuario = {
      email
    }

    navigation.navigate('SenhaUsuario', { usuario });
  };

  return (
    <View style={styles.container}>
      <HeaderCadastro etapaAtual={0} />

      <View style={styles.content}>
        <Text style={styles.label}>Digite seu email:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setEmail(texto)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleProximoPress}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default EmailUsuario;
