import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Vibration,SafeAreaView,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from '../utils/axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import useStore from '../utils/appStore';
import Toast from 'react-native-toast-message';


export default function Home({navigation}) {

    const [vevents,setVevents] = useState([]);
   
  
    useEffect(() => {
        const getVaxEvents = async () => {
            const res = await axios.get('get_vax_events');
            const result = await res;

            console.log(result.data);
           setVevents(result.data);
           
        }
        getVaxEvents();
     
    }, []);



    const handlePress = (id) => {
            
        navigation.navigate('Scan',{id:id});
       

    }

    
  
    
  
   
  
    return (
        <SafeAreaView style={styles.container}>
       
       
                <View>
                    <Text style={styles.heading}>Vaccine Events</Text>
                </View>
               
                {
                    vevents.map((event,index) => {
                      return(
                    <TouchableOpacity onPress={()=>handlePress(event.vax_event_id)}  key={index} style={styles.widgets}>
                        <Text style={styles.widgettitle}>{event.ve_name}</Text> 
                        <Text style={styles.box_text}>Slots: {event.ve_doses}</Text>
                        <Text style={styles.box_text}>Status: {event.ve_status == 0 ? 'Open' : 'Ended'}</Text>
                     </TouchableOpacity>
                      )
                    })
                }
              

               
               
   
              
   
              
   
   
   
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
        borderRadius : 20,
        backgroundColor : '#FF8C32',
       display : 'flex',   
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        height:  150,
        width : '80%',
        marginBottom : 15,
        paddingHorizontal: 10,
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
    }
  });
  