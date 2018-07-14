import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
    //O construtor da classe.
    constructor(props){
        super(props);
        this.state={charlieBrown:'carai é o choris'};
    }
    render() {
        return (
            <View>
                <Text>{this.state.charlieBrown}</Text>
                {/* Se o nome da variavel no onChangeText e o nome da variável no estado o valor não será propagado. */}
                <TextInput
                    style={{height:40}}
                    placeholder="foobar"
                    onChangeText={(charlieBrown)=>this.setState({charlieBrown})}
                />
            </View>
        );
    }
}
