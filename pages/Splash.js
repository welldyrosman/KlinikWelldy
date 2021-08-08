import React,{useState,useEffect} from 'react'
import {StyleSheet,View,Text,Image, Dimensions} from 'react-native'
import Footer from './components/Footer';
export default function Splash({navigation}){
   
   
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("LoginPages")
        },3000)
        return()=>{
            setNama('Dijah')
        }
    },[])
    return(
        <View style={styles.container }>
            <Image 
            style={styles.logo}
            source={require('../assets/LogoSplash.png')}/>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#008CDB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        resizeMode:'contain'
    },
  });