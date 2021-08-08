import React,{useState,useEffect} from 'react'
import {StyleSheet,View,Text,Image, TextInput,TouchableOpacity} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Footer from './components/Footer';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
export default function RegisterPages({navigation}){
  const [bordercol,setBordercol]=useState({});
  const [bordercol2,setBordercol2]=useState({});
  const [bordercol3,setBordercol3]=useState({});
  const [bordercol4,setBordercol4]=useState({});
  const [gender, setGender] = useState('F');
  const [userid, setUserid] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const onReg=()=>{
      var obj={
        userid,gender,fullname,password,repassword
      }
      console.log(obj);
      axios.post('http://ws.welldyrosman.site/public/register',obj)
      .then(ret=>{
        alert("Membuat akun Berhasil Silahkan Login")
        navigation.navigate("LoginPages")
      }).catch(err=>{
        alert("Something error")
      })
  }

  const onFocus=(val)=>{
    const obj={
      borderWidth:1,
      borderColor:'yellow'
    }
    switch(val) {
      case 1:
        setBordercol(obj);
        break;
      case 2:
        setBordercol2(obj);
        break;
      case 3:
        setBordercol3(obj);
        break;
      case 4:
        setBordercol4(obj);
        break;
    }
  }
  const onBlur=(val)=>{
    switch(val) {
      case 1:
        setBordercol({});
        break;
      case 2:
        setBordercol2({});
        break;
      case 3:
        setBordercol3({});
        break;
      case 4:
        setBordercol4({});
        break;
    }
  }
    return (
        <View style={styles.container }>
          <Image
            style={styles.logo}
            source={require('../assets/SmallLogo.png')}/>
        <Text style={styles.headerlabel}>Register</Text>
        <View style={[styles.inputview,bordercol]}>
          <TextInput
                    onFocus={()=>onFocus(1)}
                    onBlur={()=>onBlur(1)}
                    style={styles.inputbox}
                    placeholder="User ID"
                    value={userid}
                    onChangeText={setUserid}
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="user-tie" size={14} color="white" />
        </View>
        <View style={[styles.inputview,bordercol2]}>
          <TextInput
                    onFocus={()=>onFocus(2)}
                    onBlur={()=>onBlur(2)}
                    style={styles.inputbox}
                    placeholder="Full Name"
                    value={fullname}
                    onChangeText={setFullname}
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="user-tie" size={14} color="white" />
        </View>
        
       
        <Picker
          style={styles.picker}
          selectedValue={gender}
          itemStyle={styles.pickeritem}
          onValueChange={(itemValue, itemIndex) =>
            setGender(itemValue)
          }>
          <Picker.Item color="white"  label="Male" value="M" />
          <Picker.Item color="white" label="Female" value="F" />
        </Picker>
               
        <View style={[styles.inputview,bordercol3]}>
          <TextInput
                    onFocus={()=>onFocus(3)}
                    onBlur={()=>onBlur(3)}
                    style={styles.inputbox}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="lock" size={14} color="white" />
        </View>
        <View style={[styles.inputview,bordercol4]}>
          <TextInput
                    onFocus={()=>onFocus(4)}
                    onBlur={()=>onBlur(4)}
                    style={styles.inputbox}
                    placeholder="Re Type Password"
                    secureTextEntry={true} 
                    value={repassword}
                    onChangeText={setRepassword}
                    placeholderTextColor="white"
                />
                <FontAwesome5 name="lock" size={14} color="white" />
        </View>
        <View style={styles.conbtn}>
        <TouchableOpacity onPress={onReg} style={styles.btnlogin}>
          <View style={{flexDirection:'row'}}>          
            <FontAwesome5 name="user-plus" size={16} color="white" />
            <Text  style={{color:'white',paddingLeft:5}}>Register</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.footlink}>
          <View >
            
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("LoginPages")} style={{flexDirection:'row'}}>
            <FontAwesome5 name="sign-out-alt" size={14} color="yellow" />
            <Text style={styles.linklabel}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
       <Footer/>
        </View>
    )
}
const styles = StyleSheet.create({
    picker:{
      width:'100%',
      borderWidth:0,
      paddingHorizontal:50,
      height:40,
      marginBottom:20,
    },
    pickeritem:{
      height:40,
      backgroundColor: '#23688F',
      fontSize:14,
      borderRadius:20,
    },
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
      marginTop:50
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
      paddingHorizontal:15,
      alignItems:'center'
    },
    inputbox:{
      width:'100%',
      color:'white' 
    }
  });