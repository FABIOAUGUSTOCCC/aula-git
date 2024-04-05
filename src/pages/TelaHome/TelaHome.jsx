import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart, faSearch);

const TelaHome = () => {
  const [searchText, setSearchText] = useState('');

  const handleButtonPress = ({navigation}) => {
    console.log('Botão pressionado!');
    navigation.navigate('TelaCarrinho');
  };

  const handleSearch = () => {
    console.log('Texto de pesquisa:', searchText);
   
  };

  return (
    <View>
       <View style={styles.faShoppingCartContainer}>
      <TouchableOpacity style={styles.faShoppingCartbutton} onPress={handleButtonPress}>
        <FontAwesomeIcon icon="shopping-cart" size={24} color="white"/>
      </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:170,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: '#3FA781',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  faShoppingCartContainer: {
    paddingLeft: 300,
    borderRadius: 100,
    marginTop:20,


  },
  faShoppingCartbutton: {
    alignItems: 'center',
    backgroundColor: '#3FA781',
    paddingVertical: 10,
    borderRadius: 100,
    borderWidth: 2,
    width: 50, 
    height: 50,
    marginTop:20, 
  },
});


export default TelaHome;