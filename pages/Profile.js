import React,{useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image,TextInput} from 'react-native';
export default function Profile(){
    const data={
        userid:global.userdata.userid,
        fullname:global.userdata.fullname,
        gender:global.userdata.gender=='M'?'Male':'Female',
        image:require('../assets/welldy.png'),
        regdate:global.userdata.created_at
    }
    return(
        <View style={styles.container}>
            <View style={{alignSelf:'center',marginTop:50}}>
                <View style={{backgroundColor:'white',padding:5,borderRadius:100,alignSelf:'flex-start'}}>
                    <Image
                    style={styles.logo}
                    source={data.image}/>
                </View>
            </View>
            <Text style={{fontSize:30,color:'white',textAlign:'center',alignContent:'center',marginVertical:30}}>{data.fullname}</Text>
            <View style={styles.inputview}>
                <Text style={styles.labelsmall}>USER ID</Text>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginBottom:10}}>{data.userid}</Text>
            </View>
            <View style={styles.inputview}>
                <Text style={styles.labelsmall}>GENDER</Text>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginBottom:10}}>{data.gender}</Text>
            </View>
            <View style={styles.inputview}>
                <Text style={styles.labelsmall}>REGISTRATION DATE</Text>
                <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginBottom:10}}>{data.regdate}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    labelsmall:{
        color:'white',
        marginTop:5,
        fontSize:10
    },
    container: {
		flex: 1,
		backgroundColor: '#008CDB',
	},
    logo:{
        borderRadius:100
    },
    inputview:{
        backgroundColor:"#23688F",
        borderRadius:15,
        marginBottom :12,
        marginHorizontal:25,
        alignItems:"center",
        paddingHorizontal:15,
      },
})