import React, {useState, useEffect} from "react";
import { 
    View, 
    Text,
    TouchableOpacity,
    FlatList 
} from "react-native";

import firebase from "../../config/firebase"
import styles from "./style";
import { FontAwesome, MaterialCommunityIcons, Foundation, Entypo, Feather, AntDesign } from "@expo/vector-icons"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function Inicial({navigation}){
    
    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
          }).catch((error) => {

          });
    }
    return(
    <View style = {styles.container}>
        <View style = {styles.box}>
        <TouchableOpacity style
            style={styles.buttom}
            onPress={() => navigation.navigate("Media")}
            >

                <Text style={styles.iconButton}>
                    <MaterialCommunityIcons
                        name="television-play"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style
            style={styles.buttom}
            onPress={() => navigation.navigate("Phrases")}
            >

                <Text style={styles.iconButton}>
                    <Entypo
                        name="quote"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.box}>
        <TouchableOpacity style
            style={styles.buttom}
            onPress={() => navigation.navigate("Diary")}
            >

                <Text style={styles.iconButton}>
                    <AntDesign
                        name="edit"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style
            style={styles.buttom}
            onPress={() => navigation.navigate("NewTask")}
            >

                <Text style={styles.iconButton}>
                    <Feather
                        name="phone-call"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>
        
        </View>
        
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



    )
}