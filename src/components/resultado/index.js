import React, { Component } from 'react';
import { View, Text,  Image, StyleSheet} from 'react-native';
import Icone from './icone'
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

class Resultado extends Component {
    constructor(props){
        super(props)
      }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20, marginBottom:20}}>{this.props.resultado}</Text>
        <Icone escolha={this.props.escolhaUsuario} jogador={"Você"}/>
        <Icone escolha={this.props.escolhaComputador} jogador={"Computador"}/>   
      </View>
    );
  }
}

export default Resultado;
