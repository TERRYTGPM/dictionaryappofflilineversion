import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import dictionary from "../database"

export default class Homescreen extends React.Component {

  constructor(){
    super();
    this.state = { 
      text: '',
      isSearchPressed: false,
      wordreturnedformdatabase: "  ",
      word: '',
      lexigalCatagory: '',
      examples: [],
      definition: ""
    }
  }
  getWord = (word2)=>{

     var searchWord = word2.toLowerCase();

     try{
       var word1 = dictionary[searchWord]["word"]
       var lexigalCatagory1 = dictionary[searchWord]["lexigal Category"]
       var definition1 = dictionary[searchWord]["defintion"]

       this.setState({
         wordreturnedformdatabase: word1,
         lexigalCatagory: lexigalCatagory1,
         definition: definition1,

       })
       console.log("is this working")

     } catch(err){
       console.log("is this working")

      alert("This word is not available");
      this.setState({
        isSearchPressed: false,
        text: ''
      })

     }





  }





/*
 getWord = async(word)=>{
    var searchWord = word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchWord+".json"
    return fetch(url).then((data)=>{
      if(data.status === 200){
          return data.json();
      }else{
        return null
      }
    }).then((response)=>{
      var responseObject = response;
      if(response) {
        var wordData = responseObject.definitions[0] 
        var definition = wordData.description
        var lexigalCatagory = wordData.wordType;
        this.setState({
          isSearchPressed: true,
          word: this.state.text,
          definition: definition,
          lexigalCatagory: lexigalCatagory

        })
      } else{
        this.setState({
          isSearchPressed: true,
          word: this.state.text,
          definition: "404 Not Found. You will now be terminated"
        })
      }
    })
  }
*/




  render(){
  return (
    <View style={styles.container}>

        <TextInput
        style={styles.ajflasdjflksajfasdjflkjfaslkfjsdlkfksdajflksdjak}
          onChangeText={
            (text1)=>{
                this.setState({
                  word: text1
                })
            }
          }
          placeholder="Search..."
        ></TextInput><TouchableOpacity
          onPress={()=>{ 
          
          this.getWord(this.state.word) } }
        >
        
          <Image source={require("../assets/search-icon-large.png")} style={{height: 50, width: 50}} ></Image>
        </TouchableOpacity> 
        <Text>{this.state.definition}</Text> </View>

  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: "center",
    backgroundColor: "cyan",
    width: "100%"
  },

  ajflasdjflksajfasdjflkjfaslkfjsdlkfksdajflksdjak: {
    borderWidth: 3,
    borderColor: "lime"
  }


});
