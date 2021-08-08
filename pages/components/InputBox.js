import React from "react";
import {View,Text,StyleSheet} from 'react-native'
export default function InputBox(){
    return(
        <Text style={styles.footer}>Created by Welldy Rosman</Text>
    )
}
const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        height: 40, 
        color:'#23688F',
        bottom:0, 
      },
})