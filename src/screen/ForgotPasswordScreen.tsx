import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
    
    const [username,setUsername] = useState('');
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onSendPressed = () =>{
       navigation.navigate('NewPassword' as never)
        
    }

    const onSignInPress =() =>{
        navigation.navigate('LogIn' as never)
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Reset your password</Text>
            <CustomInput
                name="username"
                control={control}
                placeholder="Username"
                rules={{
                    required: 'Username is required',
                }}
            />

            <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

            <CustomButton
            text="Back to Sign in"
            onPress={onSignInPress}
            type="TERTIARY"
            />

            

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




export default ForgotPasswordScreen