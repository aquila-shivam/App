import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

type CustomButtonProps = {
    onPress : () => void;
    text : string;
    type ?: string;
    bgColor?: string;
    fgColor?: string;
}

const CustomButton:React.FC<CustomButtonProps> = ({
    onPress,
    text,
    type,
    bgColor,
    fgColor
}) => {

    const buttonStyle = 
    type === 'PRIMARY' ? styles.container_PRIMARY : styles.container_TERTIARY;

    const textStyle = 
    type === 'PRIMARY' ? styles.text_PRIMARY : styles.text_TERTIARY;

  return (
    <Pressable 
    onPress={onPress} 
    style = {[
        styles.container,
        buttonStyle,
        bgColor ? {backgroundColor : bgColor} :{}
        ]}>
      <Text 
      style = {[
        styles.text,
        textStyle,
        fgColor ? {color : fgColor} : {}
        ]}>{text}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : '#3B71F3',
        width : '100%',
        padding : 15,
        marginVertical:5,
        alignItems : 'center',
        borderRadius : 5
    },
    container_PRIMARY : {
        backgroundColor : '#3B71F3'
    },
    container_TERTIARY : {
        backgroundColor : ''
    },
    text :{
        fontWeight : 'bold',
        color : 'white'
    },
    text_TERTIARY : {
        color : 'grey'
    },
    text_PRIMARY : {
        color : 'white'
    }

})

export default CustomButton