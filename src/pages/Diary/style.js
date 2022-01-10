import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
    flex:1,
    flexDirection: "column",
    backgroundColor: "#FDFDFD",
    justifyContent:'space-around',
    alignItems:'center'
    
 },
 
 box: {
     width: 600,
     height: 175,
     backgroundColor: '#BB2AFF',
     margin: 10,
 },

 boxTwo: {
    width: 600,
    height: 300,
    backgroundColor: '#BB2AFF',
    margin: 10,
},

boxThree: {
    width: 600,
    height: 100,
    backgroundColor: '#BB2AFF',
    borderRadius: 150,
    margin: 10,
},

buttonSave:{
    width: 100,
    height: 50,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#FDFDFD",
    borderRadius: 50,
    marginTop:30
},

textInputOne:{
    backgroundColor:"#FDFDFD",
    marginEnd:20,
    marginStart:20,
    marginTop:20,
    height:35
    
},

textInputTwo:{
    backgroundColor:"#FDFDFD",
    marginEnd:20,
    marginStart:20,
    marginTop:20,
    height:150
    
},


textInputThree:{
    backgroundColor:"#FDFDFD",
    marginEnd:20,
    marginStart:20,
    marginTop:20,
    height:50
    
},
textBox:{
    fontSize:30,
    margin:20,
    marginBottom: 20
},

button:{
        width: 100,
        height: 50,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#BB2AFF",
        borderRadius: 50,
        marginTop:30
    
}

 
});

export default styles