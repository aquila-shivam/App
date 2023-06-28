import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { FIREBASE_AUTH } from '../../firebase/firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {

  const auth = FIREBASE_AUTH;
  const [loading,setLoading] = useState(false);
  const navigation = useNavigation();
  const handleLogout = async()=>{    
    try {
      setLoading(true);
      await auth.signOut();
      navigation.reset({
        index :0,
        routes : [{name : 'LogIn' as never} ]
      })
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <View style = {styles.root}>
      <Text style = {styles.text}>HomeScreen</Text>

      <CustomButton text={loading ? 'Loading...' : 'Logout'} onPress={handleLogout} type='PRIMARY'/>

    </View>
  )
}


const styles = StyleSheet.create({
  
  root : {
    alignItems: 'center',
    padding : 20,
  },  
  
  text : {
        fontSize : 24,
        fontWeight : 'bold',
        color:'black'
    },
    container :{
        justifyContent : "center",
        alignItems : 'center'
    }
})

export default HomeScreen