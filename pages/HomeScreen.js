import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image,AppRegistry} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
export default function HomeScreen({route,navigation}){
	console.log(navigation);
	console.log(route);
	console.log(global.userdata)
	//const { fullname } = route.params;
	const [datas,setDatas]=useState([]);
	
	const GetData=()=>{
        axios.get('http://ws.welldyrosman.site/public/dokter')
        .then(res=>{
            console.log('res: ',res.data)
            setDatas(res.data)
        });
    }
	useEffect(()=>{
        GetData()
    },[])

	// const datas=[
	// 	{name:'Dr.Welldy R',image:require("../assets/welldy.png"),poli:'Bindan & Umum'},
	// 	{name:'Dr.Arkatama',image:require("../assets/arka.png"),poli:'Gigi'},
	// 	{name:'Dr.Intan Aris',image:require("../assets/intan.png"),poli:'Bindan & Umum'},
	// 	{name:'Dr.Gressa Danantya',image:require("../assets/gressa.png"),poli:'Gigi'},
	// ]
	return(
		<View style={styles.container }>
			<View style={styles.headercon}>
				<View style={styles.textcon}>
          	        <Text style={{fontSize:20,fontWeight:'bold'}}>Hallo {global.userdata.fullname}</Text>
				    <TouchableOpacity onPress={()=>{
						global.userdata=null
						navigation.navigate("LoginPages")
						}} style={styles.btnlogout}>
						<FontAwesome5 name="sign-out-alt" size={16} color="#565656" />
					   <Text style={{color:'#565656',paddingLeft:5}}>Log Out</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Text style={{textAlign:'center', color:'white',fontSize:24,fontWeight:'bold',marginVertical:20}}>Reservasi</Text>
			<View style={styles.conreservasi}>
				<TouchableOpacity onPress={()=>{
            alert("GA SEJAUH ITU BROO")
          }} style={styles.btnreservasi}>
					<View style={{alignItems:'center'}}>
					<FontAwesome5 name="stethoscope" size={90} color="#008CDB" />
					<Text style={{color:"#008CDB",marginTop:20}}>Poli Umum & Bidan</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity  onPress={()=>{
            alert("GA SEJAUH ITU BROO")
          }} style={styles.btnreservasi}>
					<View style={{alignItems:'center'}}>
						<FontAwesome5 name="tooth" size={90} color="#008CDB" />
						<Text style={{color:"#008CDB",marginTop:20}}>Poli Gigi</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.dokterlist}>
				<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
					<Text style={{color:'white',fontSize:20}}>Daftar Dokter</Text>
					<TouchableOpacity style={{backgroundColor:'#C4C4C4',padding:5,borderRadius:10}}>
						<Text style={{color:'#565656',fontSize:10}}>Show More</Text>
					</TouchableOpacity>
				</View>
				<FlatList
				 style={{marginVertical:10}}
					data={datas}
					horizontal={true} 
					keyExtractor={(item,index)=>`${item.name}-${index}`}
					renderItem={({item})=>{
						let Image_Http_URL ={ uri: 'http://ws.welldyrosman.site/arka.png'};
						return(
							<TouchableOpacity onPress={()=>{
								global.selectedDoc=item.id
								navigation.navigate("DetailDoc")
							}} style={styles.condokter}>
								 <Image
									style={styles.docpic }
									source={{uri: 'http://ws.welldyrosman.site/'+item.image}}/>
								<Text style={{fontSize:12,fontWeight:'bold'}}>{item.name}</Text>
								<Text style={{fontSize:11,color:'grey',marginBottom:15}}>Poli {item.poli}</Text>
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
	  headercon:{
		  backgroundColor:'white',
		  height:100,
		  width:'100%',
		  borderBottomEndRadius:20,
		  borderBottomStartRadius:20,
	  },
	  textcon:{
		  marginTop:50,
		  marginHorizontal:20,
		  flexDirection:'row',
		  justifyContent:'space-between'
	  },
	  btnlogout:{
		  backgroundColor:'#C4C4C4',
		  padding:8,
		  borderRadius:8,
		  flexDirection:'row'
	  },
	  conreservasi:{
		  flexDirection:'row',
		  padding:10
	  },
	  btnreservasi:{
		  padding:20,
		  backgroundColor:'white',
		  marginHorizontal:10,
		  borderRadius:10,
		  flex:1,
	  },
	  dokterlist:{
		  paddingHorizontal:15,
		  marginVertical:15,
		  backgroundColor:'#23688F'
	  },
	  condokter:{
		  backgroundColor:'white',
		  padding:8,
		  borderRadius:10,
		  marginHorizontal:5,
		  marginVertical:10
	  },
	  docpic:{
		  borderRadius:8,
		  marginBottom:10,
		  height:115,
		  width:115
	  }
})