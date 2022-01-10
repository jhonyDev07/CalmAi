import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ListItem = ({data}) =>  {
    return(
        <TouchableOpacity>
    
            <View>
                <Text>{data.title}</Text>
                <Text>{data.description}</Text>
            </View>
        </TouchableOpacity>
    );
}