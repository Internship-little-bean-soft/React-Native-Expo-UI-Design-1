import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaView style= { styles.container }>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default UselessTextInput;