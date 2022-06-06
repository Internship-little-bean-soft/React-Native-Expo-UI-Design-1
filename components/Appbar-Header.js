import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Prompt_100Thin, Prompt_700Bold, } from '@expo-google-fonts/prompt';

export default function Appbar_Header() {

    return (
        <View style={ styles.container }>
            <TouchableOpacity
                onPress={() => alert('Hello, world!')}
                style={ styles.button }>
                <Text style={ styles.buttontext }>กลับ</Text>
            </TouchableOpacity>
            <Text style={ styles.text }>สร้างการประชุม</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        marginLeft: 20,
        width: '25%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#058AFA',
        elevation: 3,
        backgroundColor: 'white',
    },
    buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#058AFA',
        fontFamily: 'Prompt_700Bold',
    },
    text: {
        marginTop: 20,
        marginLeft: 8,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#058AFA',
        fontFamily: 'Prompt_700Bold',
    },
});