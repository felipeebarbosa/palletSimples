import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default ({ placeholder, width,value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      width={width}
      defaultValue={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    backgroundColor: '#FFF',
    width: `${(props) => props.width}`,
    height: 45,
    borderRadius: 5,
    marginBottom: 30,
  },
});
