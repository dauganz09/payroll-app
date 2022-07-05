import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Vibration,SafeAreaView,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from '../utils/axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from '../utils/appStore';
import Toast from 'react-native-toast-message';


export default function AddVaccine({navigation,route}) {

    const [nurse,setNurse] = useState('');
   
   
  
    useEffect(() => {
        console.log(route.params);
        AsyncStorage.getItem('nurse_id').then(value => {
            setNurse(value);
        }).catch(err => {
            console.log(err);
        })

    }, []);



    const handlePress = async (user_id,vax_id) => {

            console.log(user_id,vax_id,nurse);
            const res = axios.post('administer', {
                user_id,
                vax_id,
                nurse_id:nurse
            });

            const result = await res;
           
            if(!result == false){
                Toast.show({
                    type: 'success',
                    text1: 'Administered Successfully!',
                   
                  });
                const {data} = result;
               
                
                navigation.navigate('Home')
               
            }else{
                console.log('error');
            }
        
       

    }


    
  
    
  const {user,vaxevent} = route.params;
   
  
    return (

        <SafeAreaView style={styles.container}>
       
       
                <View>
                    <Text style={styles.heading}>Vaccine Proper</Text>
                </View>
               

                <View style={styles.widgets}>
                    <Text style={styles.title}>Fullname: </Text>
                    <Text style={styles.title}>{user.fname} {user.lname}</Text>

                </View>
                <View style={styles.widgets}>
                    <Text style={styles.title}>Vaccine Shot: </Text>
                    <Text style={styles.title}>{vaxevent.vax_manufacturer}</Text>
                    
                </View>
                <View style={styles.widgets}>
                    <Text style={styles.title}>Dose: </Text>
                    <Text style={styles.title}>{vaxevent.shot_no == 1 ? '1st Dose' : '2nd Dose'}</Text>
                    
                </View>
                <View style={styles.widgets}>
                    <Text style={styles.title}>Address: </Text>
                    <Text style={styles.title}>{user.address}</Text>
                    
                </View>
               
                <TouchableOpacity onPress={()=>handlePress(user.user_id,vaxevent.vax_event_id)} style={styles.login_button}>
                    <Text style={styles.login_button_text}>Administer Vaccine</Text>
                </TouchableOpacity>
                    
               


               
               
   
              
   
              
   
   
   
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#072227',
      flex: 1,
      
      alignItems: 'center',
      
      display: 'flex',
        flexDirection: 'column',
    },
    heading : {
      fontSize : 40,
      fontWeight : 'bold',
      color : 'white',
      marginBottom :40,
      
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EEEEEE',
        textTransform: 'uppercase',

    },
    widgettitle : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EEEEEE',
        textTransform: 'uppercase',
        textAlign : 'center',

    },
    box_text : {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#EEEEEE',
        textTransform: 'uppercase',
    },
    widgets: {
       
        
       display : 'flex',   
        flexDirection : 'row',
        alignItems : 'center',
        
        height:  40,
        width : '80%',
        marginBottom : 15,
        
    },
    footer : {
      fontSize : 35,
      fontWeight : 'bold',
      color : '#4FBDBA',
      textTransform : 'uppercase',
      textAlign: 'center',
    },
    welcome:{
      fontSize : 30,
      fontWeight : 'bold',
      color : 'white',
      textTransform : 'uppercase',
    },
    textbox :{
      display : 'flex',
      height: 120,
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
    },login_button : {
        display :'flex',
        justifyContent : 'center',
        alignItems : 'center',
        height : 70,
        width : 300,
        borderColor : 'white',
        borderWidth : 1,
        borderRadius : 5,
        marginTop : 15,
        paddingLeft : 10,
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        backgroundColor : '#FF8C32',
       

    },
    login_button_text : {
        fontSize : 20,
        fontWeight : 'bold',
        color : 'white',
        textTransform : 'uppercase',

    }
  });
  