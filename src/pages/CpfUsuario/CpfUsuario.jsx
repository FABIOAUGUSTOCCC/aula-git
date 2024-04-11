// EmailScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderCadastro from '../../Components/HeaderCadastro/HeaderCadastro';
import ToastService from '../../Services/ToastService';
import ApiService from '../../Services/ApiService';


export default function CpfUsuario({ navigation, route }) {
  const [cpf, setCpf] = useState('');

  const { usuario } = route.params;

  const handleProximoPress = async () => {
    if (!cpf) {
      ToastService.Error("Erro ao cadastrar", "CPF Inválido");
      return;
    }
    usuario.cpf = cpf;

    try {
      await ApiService.post('/clientes/cadastrarcliente', usuario);
      ToastService.Success("Usuário cadastrado com sucesso!");

    } catch (error) {
      ToastService.Error("Erro ao cadastrar usuário");
    }
  };

  return (
    <View style={styles.container}>
      <HeaderCadastro etapaAtual={4} />

      <View style={styles.content}>
        <Text style={styles.label}>Digite seu numero de CPF: </Text>
        <Text style={styles.label}>email cadastrado</Text>  {/* inserir logica para trazer o email cadastrado */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setCpf}
            value={cpf}
            autoCapitalize="none"
            placeholder='000.000.000-00'
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
