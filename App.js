import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ButtonsMargin = styled.View`
  margin-top: 20;
`

const opcoesJokenPo = ['pedra', 'papel', 'tesoura']

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }

  jokenpo(escolha){
    let sorteio = Math.floor(Math.random() * 3)

    let resultado = ''

    switch(escolha){
      case 'pedra':
        resultado = opcoesJokenPo[sorteio] == 'tesoura' && opcoesJokenPo[sorteio] != 'pedra' ? 'Você venceu' : 'Computador Venceu'
      break
      case 'papel':
        resultado = opcoesJokenPo[sorteio] == 'tesoura' && opcoesJokenPo[sorteio] != 'papel' ? 'Computador Venceu' : 'Você venceu'
      break
      case 'tesoura':
        resultado = opcoesJokenPo[sorteio] == 'papel' && opcoesJokenPo[sorteio] != 'tesoura' ? 'Você venceu' : 'Computador Venceu'
      break
    }

    this.setState({
      escolhaUsuario: escolha, 
      escolhaComputador:opcoesJokenPo[sorteio],
      resultado: opcoesJokenPo[sorteio] == escolha ? 'Empate' : resultado
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 10}}>Computador: {this.state.escolhaComputador}</Text>
        <Text style={{marginTop: 10}}>Você: {this.state.escolhaUsuario}</Text>
        <Text style={{marginTop: 10}}>Resultado: {this.state.resultado}</Text>
        <ButtonsMargin>
          <Button 
            title="pedra"
            onPress = {()=>{this.jokenpo("pedra")}}
            />
        </ButtonsMargin>
        <ButtonsMargin>
          <Button 
            title="papel"
            onPress = {()=>{this.jokenpo("papel")}}
            color="#841584"
          />
        </ButtonsMargin>
        <ButtonsMargin>
          <Button
          title="tesoura"
          onPress = {()=>{this.jokenpo("tesoura")}}
          />
        </ButtonsMargin>
      </View>
    );
  }
}


