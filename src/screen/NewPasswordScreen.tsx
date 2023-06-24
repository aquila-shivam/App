import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';


const NewPasswordScreen = () => {
    
    const [code,setCode] = useState('');
    const [newPassoword,setNewPassword] = useState('');
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const onSubmitPressed = () =>{
        navigation.navigate('Home' as never)
        
    }

    const onSignInPressed =() =>{
        navigation.navigate('LogIn' as  never)
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Reset your password</Text>
            <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

            <CustomButton 
                text='Submit' 
                onPress={onSubmitPressed} 
                type='PRIMARY'
            />
            <CustomButton 
                text={'Back to Sign in'} 
                onPress={ onSignInPressed}
                type = "TERTIARY"
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




export default NewPasswordScreen