import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, Alert, TextInputBase, TouchableOpacity } from 'react-native';

export default function App() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const cadastro = () => {
  alert(nome);
  alert(email);
  alert(senha);
}

  return (
    <View style={styles.container}>
      <StatusBar hidden />
       

      <Image source={require('./assets/fantasmas.jpg')}
        style={styles.logo}        
      ></Image>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuario" onChangeText = {text => setNome(text)} 
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail" onChangeText = {text => setEmail(text)} 
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha" onChangeText = {text => setSenha(text)} 
      />  

      <TouchableOpacity style = {styles.btncadastro} onPress={() =>cadastro()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 15,
    borderRadius: 50      
    
  },

  btncadastro:{
    width: 100,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
    alignItems: 'center',
  }

  // button: {
  //   marginTop: 10,
  //   padding: 10,
  //   width: 300,
  //   backgroundColor: '#fff',
  //   fontSize: 30,
  //   borderRadius: 100
  // }
});
