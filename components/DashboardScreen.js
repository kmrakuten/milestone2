// A list of accounts and their balances and statements, card activities
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checking: $5</Text>
      <Text style={styles.text}>Savings: $5</Text>
      <Text style={styles.text}>Recent Activity:</Text>
      <Text style={styles.text}>Purchase, Checking: -$2</Text>
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
  text: {
    fontSize: 20,
    margin: 8,
  },
});

export default DashboardScreen;
