import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components'

import Resultado from '../resultado'
const ButtonsWidth = styled.View`
  width: 33%;
`

const opcoesJokenPo = ['pedra', 'papel', 'tesoura']

class Opcoes extends Component {

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
      <View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <ButtonsWidth>
            <Button 
                title="pedra"
                onPress = {()=>{this.jokenpo("pedra")}}
                />
            </ButtonsWidth>
            <ButtonsWidth>
            <Button 
                title="papel"
                onPress = {()=>{this.jokenpo("papel")}}
                color="#841584"
            />
            </ButtonsWidth>
            <ButtonsWidth>
            <Button
                title="tesoura"
                onPress = {()=>{this.jokenpo("tesoura")}}
                color="#4db6ac"
            />
            </ButtonsWidth>
           
        </View>
 
        <Resultado
         escolhaComputador={this.state.escolhaComputador} 
         escolhaUsuario={this.state.escolhaUsuario} 
         resultado={this.state.resultado}/>
      </View>
    );
  }
}

export default Opcoes;
