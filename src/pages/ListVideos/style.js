import { StyleSheet, Dimensions } from "react-native";

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
 container:{
     flex:1,

 },
 view:{
     flex:1,
     height: screenHeight,
 }
});

export default styles