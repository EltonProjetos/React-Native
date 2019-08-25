/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState} from 'react';
import {View,Text,
Image,
StyleSheet,
TouchableOpacity,
Alert} from 'react-native';



const App = () => {
  const [saldo,setSaldo]=useState(sal=0);

  const [debito,setDebito]=useState(deb=50);

  const [deposito,setDeposito]=useState(dep=50);
  
    
  const handledepositar =()=>{   
  setSaldo(saldo+deposito);

  }

  const handleretirar =()=>{
    if (saldo <= 0){
      Alert.alert(':( Não foi possível sacar..');
     
      
    }else{
      setSaldo(saldo-debito);
    }
    
  }

  return (
    
    <View style={style.container}>
           
      <View style={style.container02}>
      <Text style={style.textsaldo}>Saldo : R$ {saldo}</Text>         
      </View>

      <View style={style.containerbotao}>
      <TouchableOpacity style={style.botao} onPress={handledepositar}>
        <Text style={style.textbotao}>Depositar</Text>

      </TouchableOpacity>  
      <TouchableOpacity style={style.botao} onPress={handleretirar} >
        <Text style={style.textbotao}>Retirar</Text>
      </TouchableOpacity> 
      </View>     
      
    </View>
   
  );
};
const style=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:150,
    alignItems:'center',
    backgroundColor:'#AB2AAB'
    
  },
  container02:{
    alignItems:'center',
    width:300,
    height:450,
    backgroundColor:'#FFFFFF',
    borderRadius:8
  },
  textsaldo:{
    padding:15,
    fontSize:20,
   
  },
  textbotao:{
    
    fontSize:20,
    color:'#AB2abb'
    
   
  },
  containerbotao:{
    flexDirection:'row',
    height:40,
    width:300,
    paddingTop:40,
    
  },

  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    height:40,    
    borderRadius:8,
    margin:10

  
  }


});

export default App;
