import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
export default function DetailDoc({navigation}){
    const [data,setData]=useState({})
    // const data={
    //     name:"Welldy Rosman",
    //     poli:'Gigi',
    //     image:require('../assets/welldy.png'),
    //     praktek:[
    //         { day:'Senin',start:'07.00',end:'10.00'},
    //         { day:'Selasa',start:'07.00',end:'10.00'},
    //         { day:'Kamis',start:'07.00',end:'10.00'},
    //         { day:'Jumat',start:'07.00',end:'10.00'},
    //     ]
    // }
    const GetData=()=>{
        let id=global.selectedDoc;
        axios.get('http://ws.welldyrosman.site/public/dokter/'+id)
        .then(res=>{
            console.log('res: ',res.data)
            setData(res.data)
        });
    }
	useEffect(()=>{
        GetData()
    },[])
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems:'flex-start',marginTop:30}}>
            <Feather name="arrow-left" size={25} color="white" />
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
            <Image
            style={styles.logo}
            source={{uri: 'http://ws.welldyrosman.site/'+data.image}}/>
            </View>
            <Text style={{fontSize:20,color:'white',textAlign:'center',alignContent:'center'}}>{data.name}</Text>
            <Text style={{fontSize:15,color:'#CDCCCC',textAlign:'center',alignContent:'center'}}>Poli {data.poli}</Text>
            <View style={styles.timecon}>
                <FlatList
                    data={data.praktek}
                    keyExtractor={(item,index)=>`${item.day}-${index}`}
                    renderItem={({item})=>{
                        return(
                            <View style={styles.timedet}>
                                <View style={{flexDirection:'row'}}>
                                    <FontAwesome5 name="calendar-day" size={14} color="black" />
                                    <Text style={{paddingLeft:5}}>{item.day}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                <FontAwesome5 name="stopwatch" size={14} color="black" />
                                    <Text style={{paddingLeft:5}}>{item.start}</Text>
                                    <Text>-</Text>
                                    <Text>{item.end}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#008CDB',
        paddingHorizontal:20
	},
    logo:{
        marginTop:80,
        borderRadius:15,
        marginBottom:10,
        height:115,
        width:115
    },
    timecon:{
        backgroundColor:'white',
        marginTop:30,
        padding:20,
        width:'100%',
        borderRadius:20,
    },
    timedet:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
    }
})