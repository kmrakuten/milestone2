// Can select an account and add or subtract money
import React, {useState} from 'react';
import {Picker, View, Text, StyleSheet} from 'react-native';

const AccountScreen = () => {
  const [selectedValue, setSelectedValue] = useState('Checking');

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Checking" value="Checking" />
        <Picker.Item label="Savings" value="Savings" />
      </Picker>
      <Text style={styles.text}>{selectedValue} Balance: $5</Text>
      <Text style={styles.text}>Account Activity:</Text>
      <Text style={styles.text}>Purchase: -$2</Text>
      <Text style={styles.text}>Deposit: +$7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    padding: 30,
  },
  picker: {
    height: 50,
  },
  text: {
    fontSize: 20,
    margin: 8,
  },
});

export default AccountScreen;
