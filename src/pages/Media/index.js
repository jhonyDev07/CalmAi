import React from "react";
import { useState, useEffect } from "react";
import  {View, 
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    FlatList
} from "react-native"
import styles from "./style";

import { FontAwesome, MaterialCommunityIcons }  from "@expo/vector-icons";
import  ListItem  from "./listItem";
import results from './listResults'

export default function Media() {
    const [searchText, setSearchText] = useState('');
    const [list,setList] = useState(results);
    useEffect(()=>{
        if(searchText===''){
            setList(results);
        }else{
            setList(
                results.filter( 
                    item => 
                        (item.titulo.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1))
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...results];

        newList.sort((a , b) => (a.titulo > b.titulo)?1:(b.titulo > a.titulo)?-1:0);


        setList(newList);
    };

 return (
   <SafeAreaView style={styles.container}>
       <View style={styles.searchArea}>
           <TextInput
                style={styles.input}
                placeholder="Pesquise um vídeo, música ou podcast"
                placeholderTextColor={"#888"}
                value={searchText}
                onChange={(t) => setSearchText(t)}
           />
           <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>

               <MaterialCommunityIcons
                name="order-alphabetical-ascending"
                size={32}
                color={"#888"}
               
               />

           </TouchableOpacity>
       </View>
       <View style={styles.listBox}>
       <FlatList
        data={list}
        style={styles.list}
        renderItem={({item}) => <ListItem data ={item}/>}
        keyExtractor={(item) => item.id}
       
       
       />
       </View>
   </SafeAreaView>
  );
}