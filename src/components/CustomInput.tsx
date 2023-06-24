import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}:any) => {
  return (
    <View style = {styles.container}>
      <TextInput 
        style= {styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry = {secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        width:'100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10
    },
    input : {}
})

export default CustomInput