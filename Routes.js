import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Inicial from './src/pages/Inicial';
import Profile from './src/pages/Profile';
import Favorites from './src/pages/Favorites';
import Configuration from './src/pages/Configuration';
import Diary from './src/pages/Diary';
import Phrases from './src/pages/Phrases'
import Media from './src/pages/Media'

import {CustomDrawer} from './src/components/CustomDrawer';

import { Entypo, FontAwesome } from "@expo/vector-icons"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Routes = () => {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator();

    

    function MyDrawer() {
        return (
            <Drawer.Navigator initialRouteName='Inicial' 
                drawerContent={props => <CustomDrawer {...props}/>}
                screenOptions={{
                    drawerActiveBackgroundColor: "#9A0CDD",
                    drawerActiveTintColor:"FDFDFD",
                    drawerLabelStyle: {
                        marginLeft: -25, 
                        fontFamily: 'RocknRollOne-Regular', 
                        fontSize: 15,
                    },
                    }}
            >
                <Drawer.Screen name="Início" component={Inicial} options={{

                    drawerIcon: () => (
                        <Entypo
                            name='home'
                            size={30}
                            color={'#ACAAAA'}
                        />
                    )
                }}/>
                <Drawer.Screen name="Perfil"  component={Profile} options={{

                    drawerIcon: () => (
                        <FontAwesome
                            name='user'
                            size={30}
                            color={'#ACAAAA'}
                        />
                    )
                }}/>
                <Drawer.Screen name="Configurações" component={Configuration} options={{

                    drawerIcon: () => (
                        <FontAwesome
                            name='gear'
                            size={30}
                            color={'#ACAAAA'}
                        />
                    )   
                }}/>
                <Drawer.Screen name="Favorites" component={Favorites} options={{

                    drawerIcon: () => (
                        <FontAwesome
                            name='heart'
                            size={30}
                            color={'#ACAAAA'}
                        />
                    )
                }}/>
            </Drawer.Navigator>
        );
    }

    return(
        <NavigationContainer>
            
            
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                    name='Login' 
                    component={Login} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='Register' 
                    component={Register} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='Inicial' 
                    component={Inicial, MyDrawer} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name='Diary' 
                    component={Diary} 
                
                />
                 <Stack.Screen 
                    name='Phrases' 
                    component={Phrases} 
                
                />
                 <Stack.Screen 
                    name='Media' 
                    component={Media} 
                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    logo:{

    }
})

export default Routes;