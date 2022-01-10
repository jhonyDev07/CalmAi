import React from "react";
import  {View, 
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native"
import styles from "./style";

import { FontAwesome }  from "@expo/vector-icons";

export default function Phrases() {
 return (
   <SafeAreaView style={styles.container}>
       <View  style={styles.box}>
            <Text style={styles.phraseText}>
            “A persistência é o caminho do êxito”
            </Text>
            <Text>
                Charles Chaplin
            </Text>
       </View>

       <View style={styles.boxTwo}>
       <TouchableOpacity style
            style={styles.buttom}
            >

                <Text style={styles.iconButton}>
                    <FontAwesome
                        name="chevron-left"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style
            style={styles.buttomLike}
            >

                <Text style={styles.iconButton}>
                    <FontAwesome
                        name="heart-o"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style
            style={styles.buttom}
            >

                <Text style={styles.iconButton}>
                    <FontAwesome
                        name="chevron-right"
                        size={40}
                        color="#000000"
                    />
                </Text>
            </TouchableOpacity>

       </View>
   </SafeAreaView>
  );
}