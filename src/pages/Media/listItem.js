import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome }  from "@expo/vector-icons";



const ListItem = ({ data }) => {
    return(
        <TouchableOpacity styles={styles.item}>
            <Image source={{uri: data.avatar}} styles={styles.itemPhoto} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>{data.titulo}</Text>
            </View>

        </TouchableOpacity>
        

        
    );

};

const styles = StyleSheet.create({

    item:{
        flexDirection:'row',
        marginLeft:30,
        marginRight:30,
        borderBottomWidth:1,
        borderBottomColor: '#444',
        paddingTop: 15,
        paddingBottom:15
    },

    itemPhoto: {
        width:50,
        height: 50,
        borderRadius:30
    },
    itemInfo:{
        marginLeft:20
    },
    itemP1:{
        fontSize:22,
        color:'#0000',
        marginBottom:5
    }
});

export default ListItem();