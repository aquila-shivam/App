import {View,Text,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo.jpg'
import CustomInput from '../../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'


const LoginScreen = () => {
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');



    const {height} = useWindowDimensions();

    const onSignInPressed = () =>{
        console.warn('signIn Pressed');
        
    }

    const onForgetPasswordPressed = () =>{
        console.warn('forgetPassword pressed');
        
    }
    
    const onUsingGooglePressed = () =>{
        console.warn("onUsingGooglePressed");
        
    }

    const onUsingFacebookPressed = () =>{
        console.warn("onUsingFacebookPressed");
        
    }

    const onSignUpPressed = () =>{
        console.warn("onSignUpPressed");
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo , {height : height * 0.3}]} 
            resizeMode='contain'/>
            <CustomInput placeholder = "Username" value ={username} setValue = {setUsername}/>
            <CustomInput placeholder = "Password" value = {password} setValue = {setPassword} secureTextEntry = {true}/>
            <CustomButton text='Sign In' onPress={onSignInPressed} type='PRIMARY'/>
            <CustomButton text='Forget password ?' onPress={onForgetPasswordPressed}
            type = "TERTIARY"
            />
            <CustomButton 
                text='Sign in using google' 
                onPress={onUsingGooglePressed} 
                bgColor='#FAE9EA'
                fgColor='#DD4D44'
            />
            <CustomButton 
                text='Sign in using facebook' 
                onPress={onUsingFacebookPressed} 
                bgColor='#e3e3e3'
                fgColor='#363636'
            />

            <CustomButton 
                text={`Don't have an account ? Create one`} 
                onPress={onSignUpPressed}
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

    logo : {
        maxWidth : 300,
        width : '80%',
        maxHeight : 200,
    }
})




export default LoginScreen