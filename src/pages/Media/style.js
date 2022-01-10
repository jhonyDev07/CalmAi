import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
    flex:1,
    backgroundColor: "#FDFDFD",
    alignItems:'center'
    
 },
 input:{
     flex:1,
     height:50,
     backgroundColor:'#363636',
     margin:30,
     borderRadius:5,
     fontSize:19,
     paddingLeft:15,
     paddingRight:15,
     color:'#FFFFFF'
 },
 searchArea:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"#0000FF"
 },
 orderButton:{
     width:32,
     marginRight:20
 },
 list:{
     flex:1
 },

 listBox:{
     width:600,
     height:300,
     backgroundColor:"#0000FF"
 }



})

export default styles;