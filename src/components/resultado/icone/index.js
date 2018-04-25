import React, { Component } from 'react';
import { View, Text,  Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

class Icone extends Component {
  render() {
    switch(this.props.escolha){
        case 'pedra':
            return (
                <View style={styles.container}>
                    <Text>{this.props.jogador}</Text>
                    <Image source={require('../../../../assets/img/pedra.png')} />
                </View>
            );
        break
        case 'papel':
        return (
            <View style={styles.container}>
                <Text>{this.props.jogador}</Text>
                <Image source={require('../../../../assets/img/papel.png')} />
            </View>
        );
        break
        case 'tesoura':
        return (
            <View style={styles.container}>
                <Text>{this.props.jogador}</Text>
                <Image source={require('../../../../assets/img/tesoura.png')} />
            </View>
        );
        break
        default:
            return false
        break
    }
  }
}

export default Icone;
