/**
Esse projeto é um exemplo do uso de props e criação de um componente de tela.
 */
import React,{Component}from 'react';
import {AppRegistry, Text,View} from 'react-native';
///Os componentes do react devem todos derivar de Component, que
///tem a gerência do ciclo de vida deles.
class Greeting extends Component{
  ///Todos os herdeiros de Component tem que implementar esse método
  ///e retornar nele um jsx
  ///Os componentes todos tem um membro chamado props, que carrega as propriedades passadas
  /// no jsx do pai pra eles
  render(){
    return(
      <Text>Hello, {this.props.name}!</Text>
    );
  }
}
export default class App extends Component {
  render() {
    return(
        <View style={{alignItems:'center'}}>
          <Greeting name="Mel Gibson"/>
          <Greeting name="Charles Bronson"/>
        </View>
    )
  }
}

