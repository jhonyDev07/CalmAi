import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "../ListVideos/style";
import { StatusBar } from "expo-status-bar";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";

export default function ListVideos(){

    const [searchText, setSearchText] = useState('');
    
    const handleOrderClick = () => {};

    return(
        <SafeAreaView>
            <View>
                <TextInput
                    placeholder="Busca"
                    placeholderTextColor={'#888'}
                    value="searchVideo"
                    onChangeText={(t) => setSearchText(t)}
                />

                <TouchableOpacity onPress={handleOrderClick}>
                    <MaterialCommunityIcons
                        name="order-alphabetical-ascending"
                        size={32}
                        color={'#888'}
                    />

                </TouchableOpacity>
            </View>

            <FlatList
                data={}
                renderItem={}
                keyExtractor={}
            
            />

        </SafeAreaView>    
    );
}