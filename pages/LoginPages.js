import React,{useState,useEffect} from 'react'
import {Animated,StyleSheet,View,Text,Image, TextInput,TouchableOpacity} from 'react-native'
import Footer from './components/Footer';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
export default function LoginPages({navigation}){
  const [bordercol,setBordercol]=useState({});
  const [bordercolpass,setBordercolpass]=useState({});
  const [userid,setUserid]=useState('welldy35');
  const [password,setPassword]=useState('1');
  const onFocus=(val)=>{
    const obj={
      borderWidth:1,
      borderColor:'yellow'
    }
    val==1?setBordercol(obj):setBordercolpass(obj)
  }
  const onBlur=(val)=>{
    val==1?setBordercol({}):setBordercolpass({})
  }
  const onLogin=()=>{
    console.log(userid);
    console.log(password);
    const data={userid,password}
   
    axios.post('http://ws.welldyrosman.site/public/loginuser',data)
    .then(ret=>{
      console.log(ret.data.data)
      global.userdata=ret.data.data
      navigation.navigate("MainApp",ret.data.data)
    }).catch(err=>{
      console.log(err)
      alert("Login Failed")
    })
   
  }
    return (
        <View style={styles.container }>
          <Image
            style={styles.logo}
            source={require('../assets/SmallLogo.png')}/>
        <Text style={styles.headerlabel}>Login</Text>
        <View style={[styles.inputview,bordercol]}>
          <TextInput
                    onFocus={()=>onFocus(1)}
                    onBlur={()=>onBlur(1)}
                    style={styles.inputbox}
                    value={userid}
                    onChangeText={setUserid}
                    placeholder="User ID/Email"
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="user-tie" size={14} color="white" />
        </View>
        <View style={[styles.inputview,bordercolpass]}>
          <TextInput
                    onFocus={()=>onFocus(2)}
                    onBlur={()=>onBlur(2)}
                    value={password}
                    style={styles.inputbox}
                    placeholder="Password"
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="lock" size={14} color="white" />
        </View>
        <View style={styles.conbtn}>
        <TouchableOpacity onPress={onLogin} style={styles.btnlogin}>
          <View style={{flexDirection:'row'}}>          
            <FontAwesome5 name="sign-out-alt" size={16} color="white" />
            <Text  style={{color:'white',paddingLeft:5}}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footlink}>
          <TouchableOpacity style={{flexDirection:'row'}} >
            <FontAwesome5 name="unlock-alt" size={14} color="yellow" />
            <Text style={styles.linklabel}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("RegisterPages")} style={{flexDirection:'row'}}>
            <FontAwesome5 name="user-plus" size={14} color="yellow" />
            <Text style={styles.linklabel}>Register</Text>
          </TouchableOpacity>
        </View>
        </View>
       <Footer/>
        </View>
    )
}
const styles = StyleSheet.create({
    footlink:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:50,
      paddingTop:15
    },
    linklabel:{
      color:'yellow'
    },
    container: {
      flex: 1,
      backgroundColor: '#008CDB',
      alignItems: 'center',
    },
    logo:{
      marginBottom:20,
      marginTop:150
    },
    conbtn:{
      alignContent:'center',
      width:'100%'
    },
    btnlogin:{
      marginHorizontal:50,
      borderWidth:1,
      borderColor:'white',
      borderRadius:10,
      padding:15,
      alignContent:'center',
      alignItems:'center'
    },
    headerlabel:{
      fontSize:25,
      fontWeight:'bold',
      color:'white',
      marginBottom:20
    },
    inputview:{
      flexDirection:'row',
      backgroundColor:"#23688F",
      borderRadius:25,
      height:40,
      marginBottom :20,
      marginHorizontal:50,
      justifyContent:"flex-start",
      paddingHorizontal:15,
      alignItems:'center'
    },
    inputbox:{
      width:'100%',
      color:'white' 
    }
  });