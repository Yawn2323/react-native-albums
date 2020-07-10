/**
 * @format
 */
//Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

/*
    Create a component
*/
const App = () => ( <Text>Some Text</Text> );

/*
    Render it on a Device
*/
AppRegistry.registerComponent('albums', () => App);