import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

class FirstView extends Component{
    render(){
        return(
            <View style={[{flex:1 , flexDirection:'row-reverse'}, styles.firstView] }>
                <View style={[{flex:1}, styles.secondView] }>
                    <Text>Foo</Text>
                </View>
                <View style={[{flex:1}, styles.secondView] }>
                    <Text>Bar</Text>
                </View>

            </View>
        );
    }
}

class SecondView extends Component{
    render(){
        return(
            <View style={[{flex:2}, styles.secondView] }>
                <View style={[styles.lorenIpsun] }>
                    <Text>Loren ipsun</Text>
                </View>

                <View style={[styles.dolorSit] }>
                    <Text>dolor sit amet</Text>
                </View>
            </View>
        )
    }
}

class ThirdView extends Component{
    render(){
        return(
            <View style={[{flex:3}, styles.thirdView] }>
                <View style={[styles.able]}>
                    <Text>Able</Text>
                </View>

                <View style={[styles.baker]}>
                    <Text>Baker</Text>
                </View>

                <View style={[styles.charlie]}>
                    <Text>Charlie</Text>
                </View>
            </View>
        );
    }
}

export default class App extends Component{
  render() {
    return (
        <View style={styles.container}>
            <FirstView/>
            <SecondView/>
            <ThirdView/>
        </View>
    );
  }
}
const styles = {
    able:{
        backgroundColor:'lightskyblue',
        borderWidth:1,
        borderRadius:5,
        position:'relative',
        marginLeft:5,
        marginTop:5

    },

    baker:{
        backgroundColor:'mediumseagreen',
        borderWidth:1,
        borderRadius:5,
        position:'relative',
        marginLeft:10,
        marginTop:10
    },

    charlie:{
        backgroundColor:'mistyrose',
        borderWidth:1,
        borderRadius:5,
        position:'relative',
        marginLeft:20,
        marginTop:20
    },

    container:{
        flex:1,
        backgroundColor : 'darkseagreen'
    },

    lorenIpsun:{
        backgroundColor: 'gainsboro',
        margin:5,
        borderRadius:10,
        borderWidth:1,
        padding:12,
        position:'absolute',
        height: 50,
        width: 100,
        top:100,
        left:10
    },

    dolorSit:{
        backgroundColor: 'gainsboro',
        margin:5,
        borderRadius:10,
        borderWidth:1,
        padding:12,
        position:'absolute',
        height: 50,
        width: 50,
        top: 35,
        left: 0
    },

    firstView: {
        backgroundColor: 'gainsboro',
        alignItems:'stretch',
        margin:5,
        borderRadius:10,
        borderWidth:1,
        padding:12,
    },

    secondView : {
        alignItems:'center',
        backgroundColor:'gold',
        margin:5,
        borderRadius:10,
        borderWidth:1,
        padding:12
    },

    thirdView : {
        alignItems:'flex-start',
        backgroundColor:'khaki',
        margin:5,
        borderRadius:10,
        borderWidth:1,
        padding:12,
    }
}
