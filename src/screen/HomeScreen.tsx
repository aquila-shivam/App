import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>HomeScreen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
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