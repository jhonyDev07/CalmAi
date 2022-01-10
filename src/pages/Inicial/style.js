import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap'
 },

 box:{
     width: 100,
     height: 100,
     margin: 10,
     flexDirection: "column",
     justifyContent:'space-around'


 },

 title:{
    fontSize: 48,
    color:"#8B1DBF",
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "RocknRollOne-Regular"
    


},

 titleButtom:{
     justifyContent:'center',
     alignItems:'stretch'
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
 iconButton:{
     color: "#fff",
     fontSize: 20,
     fontWeight:"bold",

 },

 buttonLogout:{
    width:60,
    height:60,
    position:"absolute",
    bottom:30,
    right:20,
    justifyContent:"center",
    alignItems:"center"
},

 iconButtonLogout:{
    color: "#fff",
    fontSize: 25,
    fontWeight:"bold",

}
});

export default styles