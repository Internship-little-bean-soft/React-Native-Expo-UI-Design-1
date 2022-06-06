import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_100Thin, Prompt_700Bold, } from '@expo-google-fonts/prompt';

export default function Button3() {

  let [fontsLoaded] = useFonts({
    Prompt_100Thin, Prompt_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity
      onPress={() => alert('Hello, world!')}
      style={ styles.button }>
      <Text style={ styles.buttontext }>บันทึก</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: '#058AFA',
    width: '100%',
    marginBottom: 10,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'Prompt_700Bold',
  },
});
