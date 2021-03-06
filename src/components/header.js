//import Libraries for making component
import React from 'react';
import { Text,View } from 'react-native';

//Make Component
const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    return <View style={viewStyle}><Text style={textStyle}>{props.headerText}</Text></View>
};

const styles = {
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fefefe',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.9,
        elevation:2,
        position:'relative'
    },
    textStyle:{
        fontSize:20
    }
};

//Make component available to other parts of the app
export default Header;
