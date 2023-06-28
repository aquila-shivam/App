import {View,Text,StyleSheet,ScrollView} from 'react-native'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {useForm} from 'react-hook-form';
import {FIREBASE_AUTH, FIREBASE_DB} from '../../firebase/firebase'
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



const SignUpScreen = () => {
    
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();
    const auth = FIREBASE_AUTH;
    const [loading,setLoading] = useState(false);
    
    const onUsingGooglePressed = () =>{
        console.warn("onUsingGooglePressed");
        
    }

    const onUsingFacebookPressed = () =>{
        console.warn("onUsingFacebookPressed");
        
    }

    const onSignInPressed = () =>{
        console.warn("onSignInPressed");
        navigation.navigate('LogIn' as never)
        
    }

    const onRegisterPressed = async (data : any) =>{
        console.log(data);
        const email = data.email;
        const password = data.password;
        try {
            
            setLoading(true);
            const response = await createUserWithEmailAndPassword(auth,email,password);
            createUserInformation(response,data)
            console.log(response);
        } catch (error : any) {
            console.log(error);  
        }
        finally{
            setLoading(false)
            navigation.navigate('ConfirmEmail' as never)
        }
    }

    const createUserInformation = async (user : UserCredential,data : any) =>{
        
        try {
            
            const docRef = await setDoc(doc(FIREBASE_DB,`users/${user.user.uid}`),{
                username : data.username,
                email : user.user.email
            })
            console.log(docRef);
            
        } catch (error : any) {
            console.log(error);
            
        }
    }

    const onTermofUsePressed = () =>{
        console.warn('onTermofUsePressed')
    }

    const onPrivacypolicyPressed = () =>{
        console.warn('onPrivacypolicyPressed');
        
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style = {styles.root}>
            <Text style = {styles.title}>Create an account</Text>
            <CustomInput
                name="name"
                control={control}
                placeholder="Name"
                rules={{
                    required: 'Name is required',
                    minLength: {
                    value: 3,
                    message: 'Name should be at least 3 characters long',
                    },
                    maxLength: {
                    value: 24,
                    message: 'Name should be max 24 characters long',
                    },
                 }}
            />

            <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            rules={{
                required: 'Username is required',
                minLength: {
                value: 3,
                message: 'Username should be at least 3 characters long',
                },
                maxLength: {
                value: 24,
                message: 'Username should be max 24 characters long',
                },
            }}
            />
            <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
            />
            <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
                required: 'Password is required',
                minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
                },
            }}
            />
            <CustomInput
            name="password-repeat"
            control={control}
            placeholder="Repeat Password"
            secureTextEntry
            rules={{
                validate: value => value === pwd || 'Password do not match',
            }}
            />

            <CustomButton
            text={loading ? 'Loading...' : 'Register'}
            onPress={handleSubmit(onRegisterPressed)}
            />

            <Text style={styles.text}>
                By registering ,you confirm that 
                you accept our <Text style = {styles.link} onPress={onTermofUsePressed}>Term of use</Text> and 
                <Text style = {styles.link} onPress={onPrivacypolicyPressed}> Privacy policy</Text> 
            </Text>
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
                text={`Have an account ? Sign in`} 
                onPress={onSignInPressed}
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




export default SignUpScreen