// User personal info screen
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import { addDoc, collection } from 'firebase/firestore';
// import db from '../firebase/firebase.config'

const UserScreen = ({navigation}) => {
  const [textFirstName, onChangeFirstNameText] = React.useState('Kai');
  const [textLastName, onChangeLastNameText] = React.useState('Moore');
  const [textPhone, onChangePhoneText] = React.useState('1234567');

  const handleClick = async () => {
    if (textFirstName !== '' && textLastName !== '' && textPhone !== '') {
      alert('Changes confirmed');
    } else {
      alert('Could not submit changes');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Edit Profile</Text>
        <TextInput
          style={styles.textInput}
          placeholder="First name"
          value={textFirstName}
          onChangeText={text => onChangeFirstNameText(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last name"
          value={textLastName}
          onChangeText={text => onChangeLastNameText(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone number"
          value={textPhone}
          onChangeText={text => onChangePhoneText(text)}
        />
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.buttonText}>Confirm</Text>
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
    width: '80%',
  },
  header: {
    fontSize: '24px',
    alignItems: 'center',
    margin: 8,
    width: '100%',
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

export default UserScreen;
