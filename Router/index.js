import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import RegisterPages from '../pages/RegisterPages';
import DetailDoc from '../pages/DetailDoc';
import Profile from '../pages/Profile';
import LoginPages from '../pages/LoginPages';
import MyReservation from '../pages/MyReservation';
import { FontAwesome5 } from '@expo/vector-icons';
import Splash from '../pages/Splash';

const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer options={{ headerShown: false }} >
            <Stack.Navigator>
                    <Stack.Screen name="Splash" options={{ headerShown: false }}  component={Splash} />
                    <Stack.Screen name="RegisterPages" options={{ headerShown: false }}  component={RegisterPages} />
                    <Stack.Screen name="LoginPages" options={{ headerShown: false }}  component={LoginPages} />
                    <Stack.Screen name="DetailDoc" options={{ headerShown: false }}  component={DetailDoc} />
                    <Stack.Screen name="MainApp" options={{ headerShown: false }}  component={MainApp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainApp=()=>(
    <Tab.Navigator screenOptions={({ route })=>({
        tabBarIcon: ({ focused,size,color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if(route.name==='My Reservasion'){
              iconName = 'book';
            }else{
                iconName = 'user-cog'; 
            }
            return <FontAwesome5 name={iconName} size={20} color={color} />;
        }
    })}>
        <Tab.Screen name="Home"  options={{ headerShown: false }}  component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="My Reservasion" options={{ headerShown: false }}  component={MyReservation}/>
        <Tab.Screen name="Profile" options={{ headerShown: false }}  component={Profile}/>
    </Tab.Navigator>

)


