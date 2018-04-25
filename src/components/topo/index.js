import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

class Topo extends Component {
  render() {
    return (
      <View >
        <Image source={require('../../../assets/img/jokenpo.png')} />
      </View>
    );
  }
}

export default Topo;
