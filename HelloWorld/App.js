import React, {Component} from 'react';
import {Text, View} from 'react-native'

export default class App extends Component{
    render(){
        console.log("HELLO WORLD");
        return(
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}