import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ConfirmEmailScreen = () => {
    const navigation = useNavigation(); 
    const [code,setCode] = useState('');

    const {control, handleSubmit, watch} = useForm();

    const onConfirmPressed = () =>{
        console.warn("onConfirmInPressed");
        navigation.navigate('Home' as never)
        
    }

    const onSignIn =() =>{
        console.warn('back');
        navigation.navigate('LogIn' as never)
        
    }

    const onResendPressed = () =>{
        console.warn('reset');
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Confirm your email</Text>
            <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username code is required',
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignIn}
          type="TERTIARY"/>

            

        </View>    
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding : 20,
    },

    title:{
        fontSize:24,
        fontWeight:'bold',
        color: '#051C60',
        margin : 10,
    },
    text : {
        color : 'grey',
        marginVertical : 10,
    },
    link : {
        color : '#FDB075'
    },

})




export default ConfirmEmailScreen