import {View,Text,StyleSheet,Image,useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../assets/images/logo.jpg'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase/firebase';



const LoginScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const {
        control,
        handleSubmit,
        formState: {errors},
      } = useForm();

    const onSignInPressed = async(data : any) =>{
        // validate user

        console.log(data.username);
        const email = data.email;
        const password = data.password;

        try {
            
            setLoading(true);
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.warn('Check your email');
            console.log(response);
            navigation.reset({
                index: 0,
                routes :[{name : 'Home' as never}]
              })
            
        } catch (error : any) {
            console.log(error);
        }
        finally{
            setLoading(false)
            
        }

        
        
    }

    const onForgetPasswordPressed = () =>{
        navigation.navigate('ForgotPassword' as never)
    }
    
    const onUsingGooglePressed = () =>{
        console.warn("onUsingGooglePressed");
        
    }

    const onUsingFacebookPressed = () =>{
        console.warn("onUsingFacebookPressed");
        
    }

    const onSignUpPressed = () =>{
        navigation.navigate('SignUp' as never)
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Image source={Logo} style = {[styles.logo , {height : height * 0.3}]} 
            resizeMode='contain'/>
            
            <CustomInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{required: 'Email is required'}}
            />

            <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                    value: 3,
                    message: 'Password should be minimum 3 characters long',
                    },
                }}
            />
            <CustomButton text={loading ? 'Loading...': 'Sign in'} onPress={handleSubmit(onSignInPressed)} type='PRIMARY'/>
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