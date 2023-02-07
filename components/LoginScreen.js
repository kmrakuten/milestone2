import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { addDoc, collection } from 'firebase/firestore';
// import db from '../firebase/firebase.config'

const LoginScreen = ({navigation}) => {
  const [textMail, onChangeEmailText] = React.useState('');
  const [textPassword, onChangePasswordText] = React.useState('');

  const handleClick = async () => {
    // TODO check firebase for matching credentials instead of this
    if (textMail === 'a' && textPassword === 'a') {
      navigation.navigate('User');
    } else {
      alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.textInput}
          placeholder="Email address"
          value={textMail}
          onChangeText={text => onChangeEmailText(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={textPassword}
          onChangeText={text => onChangePasswordText(text)}
        />
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'left',
  },
  textInput: {
    fontSize: '20px',
    margin: 8,
    width: '100%',
  },
  buttonText: {
    fontSize: '20px',
    margin: 8,
    color: '#24a0ed',
  },
});

export default LoginScreen;
