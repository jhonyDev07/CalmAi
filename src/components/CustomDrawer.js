import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './style';
import firebase from "../config/firebase"

export function CustomDrawer(props, navigation) {
 return (
   <View style={styles.container}>

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>   
    </DrawerContentScrollView>
     <View style={{padding:20, borderTopWidth:1, borderTopColor:"#ACAAAA"}}>
        <TouchableOpacity
                    style={styles.buttonLogout}
                    onPress={()=>{logout()}}
                >
                    <Text style={styles.iconButtonLogout}>
                        <MaterialCommunityIcons
                            name="location-exit"
                            size={23}
                            color="#0000ff"
                        />
                    </Text>
                </TouchableOpacity>
     </View>
   </View>
  );
function logout(){
  firebase.auth().signOut().then(() => {
      navigation.navigate("Login")
    }).catch((error) => {

    });
}
}



