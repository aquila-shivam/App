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


    const getButtonStyle = () => {
        switch (type) {
          case 'PRIMARY':
            return styles.container_PRIMARY;
          case 'SECONDARY':
            return styles.container_SECONDARY;
          case 'TERTIARY':
            return styles.container_TERTIARY;
          default:
            return styles.container_PRIMARY;
        }
      };
    
      const getButtonTextStyle = () => {
        switch (type) {
          case 'PRIMARY':
            return styles.text_PRIMARY;
          case 'SECONDARY':
            return styles.text_SECONDARY;
          case 'TERTIARY':
            return styles.text_TERTIARY;
          default:
            return styles.text_PRIMARY;
        }
      };

  return (
    <Pressable 
    onPress={onPress} 
    style = {[
        styles.container,
        getButtonStyle(),
        bgColor ? {backgroundColor : bgColor} :{}
        ]}>
      <Text 
      style = {[
        styles.text,
        getButtonTextStyle(),
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
    text :{
        fontWeight : 'bold',
        color : 'white'
    },
    container_PRIMARY : {
        backgroundColor : '#3B71F3'
    },
    container_TERTIARY : {
        backgroundColor : ''
    },
    container_SECONDARY :{
        borderColor : '#3B71F3',
        backgroundColor: 'white',
        borderWidth : 2
    },
    text_TERTIARY : {
        color : 'grey'
    },
    text_PRIMARY : {
        color : 'white'
    },
    text_SECONDARY : {
        color:'#3B71F3'
    }

})

export default CustomButton