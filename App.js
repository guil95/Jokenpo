import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions } from 'react-native';
import styled from 'styled-components'

import Topo from './src/components/topo'
import Opcoes from './src/components/opcoes'
const { height, width } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
     
      <View style={{width: width}}>
        <Topo></Topo>
        <Opcoes/>       
      </View>
    );
  }
}


