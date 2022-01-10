import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
    flex:1,
    flexDirection: "column",
    backgroundColor: "#FDFDFD",
    alignItems:'center'
    
 },
 
 box: {
     marginTop:100,
     width: 600,
     height: 300,
     backgroundColor: '#BB2AFF',
     margin: 10,
 },

 boxTwo: {
    width: 600,
    height: 175,
    backgroundColor: '#FDFDFD',
    margin: 10,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center"
},

 phraseText: {
     fontSize: 35,
     color:"#FDFDFD",
     justifyContent:"center"
 },

 phraseAuthor:{
     fontSize: 20,
     color:"#000000",

 },

 
 buttom:{
    width:60,
    height:60,
    bottom:30,
    margin: 10,
    backgroundColor:"#BB2BFF",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
},

buttomLike:{
    width:60,
    height:60,
    bottom:30,
    margin: 10,
    backgroundColor:"#FDFDFD",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
},


})

export default styles;