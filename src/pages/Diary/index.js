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

export default function Diary(){

    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.textBox}>Defina seu dia em apenas uma palavra:</Text>
            <TextInput
                multiline={true}
                textAlignVertical="top"
                style={styles.textInputOne}
                placeholder = " Escreva aqui"
                type="text"
            />
        </View>
        <View style={styles.boxTwo}>
            <Text style={styles.textBox}>Registre seus pensamentos de hoje:</Text>
            <TextInput
                style={styles.textInputTwo}
                multiline={true}
                textAlignVertical="top"
                placeholder = " Escreva aqui"
                type="text"
            />
        </View>
        <View style={styles.box}>
            <Text style={styles.textBox}>Como está se sentindo hoje ?</Text>
            <TextInput
                multiline={true}
                textAlignVertical="top"
                style={styles.textInputThree}
                placeholder = " Escreva aqui"
                type="text"
            />
        </View>
        <View style={styles.buttonSave}>
             <TouchableOpacity
                 disable={true}
                 style={styles.button}
                >
                  <Text style={styles.textButtonLogin}>Salvar</Text>
             </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}