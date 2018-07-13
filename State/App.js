import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
class BlinkingText extends Component{
    //construtor, setando o estado inicial do objeto
    constructor(props){
        super(props);
        this.state = {isShowingText:true};
        setInterval(()=>{
            this.setState(previousState=>{
                return {isShowingText:!previousState.isShowingText};
            });
        }, 1000);
    }

    render(){
        let textToShow = this.state.isShowingText ? this.props.text : '';
        return (
            <Text>{textToShow}</Text>
        );
    }
}
export default class App extends Component{
    render(){
        return(
            <View>
                <BlinkingText text='CHARLES BRONSON'/>
            </View>
        )
    }
}