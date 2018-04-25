import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {escolhaUsuario: ''}
  }

  setEscolhaUsuario(escolha){
    this.setState({escolhaUsuario: escolha})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button 
          title="Pedra"
          onPress = {()=>{this.setEscolhaUsuario("Pedra")}}
          />
        <Button 
          title="Papel"
          onPress = {()=>{this.setEscolhaUsuario("Papel")}}
        />
        <Button
         title="Tesoura"
         onPress = {()=>{this.setEscolhaUsuario("Tesoura")}}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
