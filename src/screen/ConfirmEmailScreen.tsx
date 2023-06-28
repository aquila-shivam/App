import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../components/CustomInput'
import { useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { FIREBASE_AUTH } from '../../firebase/firebase';
import { sendEmailVerification } from 'firebase/auth'
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ConfirmEmailScreen = () => {
    const navigation = useNavigation(); 
    const [loading,setLoading] = useState(false);
    const {control, handleSubmit, watch} = useForm();
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;
    let email= '';
    useEffect(()=>{
      isEmailVerified();
    },[navigation]);

    const isEmailVerified = async() => {
      
      console.log(user);
      
      await user?.reload();
      if(user && user.emailVerified){
        console.log('email verified');
        navigation.reset({
          index: 0,
          routes :[{name : 'Home' as never}]
        })
      }else
      {
        console.log('email not verified');
      }
    };


    const onConfirmPressed = async(data : any) =>{
        console.warn("onConfirmInPressed");
        
        if(user)
        {
          try {
            setLoading(true);
            email = data.email;
            await sendEmailVerification(user);
            console.log("Email verification sent!");
          } catch (error) {
            console.log(error);
          }
          finally{
            setLoading(false)
          }
        }
        
    }

    const onSignIn =() =>{
        console.warn('back');
        navigation.navigate('LogIn' as never)
        
    }

    const onResendPressed = () =>{
        console.warn('reset');
        isEmailVerified();
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Confirm your email</Text>
            <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email address is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomButton text={loading ? 'Loading...': 'Confirm'} onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Check Email Verification"
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