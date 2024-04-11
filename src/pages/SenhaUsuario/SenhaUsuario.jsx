// EmailScreen.js
import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro';
import ToastService from '../../Services/ToastService';


export default function SenhaUsuario({ navigation, route }) {
  const [senha, setSenha] = useState('');

  const { usuario } = route.params;

  const handleProximoPress = () => {

    if (!senha) {
      ToastService.Error("Erro ao cadastrar", "Senha inválida")
      return;
    }

    usuario.senha = senha;
    navigation.navigate('NomeUsuario', { usuario });
  };

  return (
    <View style={styles.container}>
      <HeaderCadastro etapaAtual={1} />

      <View style={styles.content}>
        <Text style={styles.label}>Digite sua Senha:</Text>
        <Text style={styles.label}>{usuario.email}</Text>  {/* inserir logica para trazer o email cadastrado */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => setSenha(texto)}
            value={senha}
            autoCapitalize="none"
            placeholder='Insira sua senha:  6-64 caracteres'
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
