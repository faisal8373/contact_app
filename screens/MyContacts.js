import { View, Text, FlatList, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect}from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts, { getAll } from 'react-native-contacts';
import { useIsFocused } from '@react-navigation/native';




const MyContacts = ({navigation}) => {

    const isFocused = useIsFocused();
const [myContacts, setMyContacts] = useState([]);

useEffect(() => {
    getAllContacts();
}, [isFocused])

   async function getAllContacts(){
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
                
            );
           
            if(permission === 'granted'){
                const contacts = await Contacts.getAll();
                console.log(contacts);
                setMyContacts(contacts);
            }
           
        }
        catch(error){
            console.log(error);
        }
        
    }

  return (
    <View>
 
      <Ionicons 
      name='add-circle'
      size={62}
      color='green'
      onPress={() => navigation.navigate('CreateContact')}
      />
      <Ionicons 
      name='apps-outline'
      size={62}
      color='grey'
      onPress={() => navigation.navigate('Profile')}
      />
      
    </View>
  )
}

export default MyContacts