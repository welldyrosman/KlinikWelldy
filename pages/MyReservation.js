import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
export default function MyReservation(){
    const [labelsucces,setLabesuccess]= useState({backgroundColor:'green'})
    const [labelfail,setLabefail]= useState({backgroundColor:'red'})
    const [data,setData]=useState({});
	
	const GetData=()=>{
        axios.get('http://ws.welldyrosman.site/public/myreservation/'+global.userdata.userid)
        .then(res=>{
            console.log('res: ',res.data)
            setData(res.data)
        });
    }
	useEffect(()=>{
        GetData()
    },[])
    // const data={
    //     next:[
    //         {tgl:'20-06-2021',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'21-06-2021',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'22-06-2021',poli:'Bidan & Umum',dokter:'Dr Welldy Rosman'},
    //         {tgl:'23-06-2021',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'24-06-2021',poli:'Bidan & Umum',dokter:'Dr Welldy Rosman'},
    //         {tgl:'25-06-2021',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //     ],
    //     last:[
    //         {tgl:'01-06-2021',status:'Cancelled', poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'02-06-2021',status:'Finish',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'03-06-2021',status:'Cancelled',poli:'Bidan & Umum',dokter:'Dr Welldy Rosman'},
    //         {tgl:'04-06-2021',status:'Finish',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //         {tgl:'05-06-2021',status:'Finish',poli:'Bidan & Umum',dokter:'Dr Welldy Rosman'},
    //         {tgl:'06-06-2021',status:'Finish',poli:'Gigi',dokter:'Dr Welldy Rosman'},
    //     ]
    // }
    return(
        <View style={styles.container}>
            <View style={styles.headercon}>
                <View style={{flexDirection:'row'}}>
                   
                    <Image
                    style={styles.logo}
                    source={require('../assets/SmallLogo.png')}/>
                </View>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Hallo {global.userdata.fullname}</Text>
            </View>
            <Text style={{marginLeft:20,color:'white',marginTop:45,marginBottom:10}}>Reservasi yang akan datang</Text>
            <View style={styles.nextbookcon}>
                <FlatList
                    style={{height:250}}
                    data={data.next}
                    keyExtractor={(item,index)=>`${item.tgl}-${index}`}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={styles.btnresev}>
                                <Text style={styles.labelres}>{item.tgl}</Text>
                                <Text style={styles.labelres}>{item.poli}</Text>
                                <Text style={styles.labelres}>{item.dokter}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
               
            </View>
            <Text style={{marginLeft:20,color:'white',marginTop:20,marginBottom:10}}>History Reservation</Text>
            <View style={styles.nextbookcon}>
                <FlatList
                    style={{height:250}}
                    data={data.last}
                    keyExtractor={(item,index)=>`${item.tgl}-${index}`}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity style={styles.btnresev}>
                                <View>
                                    <View style={[{padding:3,borderRadius:5},item.status=='Cancelled'?labelfail:labelsucces]}><Text style={{fontSize:8,textAlign:'center',color:'white'}}>{item.status}</Text></View>
                                    <Text style={styles.labelres}>{item.tgl}</Text>
                                </View>
                                <Text style={styles.labelres}>{item.poli}</Text>
                                <Text style={styles.labelres}>{item.dokter}</Text>
                            </TouchableOpacity>
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
	},
    labelres:{
        fontWeight:'bold'
    },
    headercon:{
        marginTop:30,
        marginHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logo:{
        height:30,
        width:30,
        marginLeft:20
    },
    nextbookcon:{
        marginHorizontal:20,
    },
    btnresev:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        marginVertical:5,
        justifyContent:'space-between'
    }
});