import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components'

import Topo from './src/components/topo'
import Opcoes from './src/components/opcoes'

export default class App extends React.Component {
  render() {
    return (
     
      <View>
        <Topo></Topo>
        <Opcoes/>       
      </View>
    );
  }
}


