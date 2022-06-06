import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View style={ styles.container }>
      <UselessTextInput
        multiline
        numberOfLines={10}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={ styles.input }
      />
    </View>
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
      alignItems: 'flex-start'
    },
});

export default UselessTextInputMultiline;