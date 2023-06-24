/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import LoginScreen from './src/screen/LoginScreen/LoginScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
 
  return (
    <SafeAreaView style={styles.root}>
        <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  root : {
    flex:1,
    backgroundColor : '#F9FBFC'
  }
});

export default App;
