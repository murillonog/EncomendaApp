import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css, Css} from '../assets/css/Css'

export default function Home({navigation}){
    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/cell-check.png')} />
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/package.png')} />
            </TouchableOpacity>           
        </View>
    )
}