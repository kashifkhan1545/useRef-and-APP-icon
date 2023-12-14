import React, { useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const App = () => {

const input = useRef();
const updateButton = ()=> { 
   input.current.focus();
   input.current.setNativeProps({
fontSize:24,
color:'red', 
   })
};
    return (
        <View style={styles.container} >
            <Text style={{textAlign:'center', fontSize: 30, margin: 20, color: 'skyblue',}}>useRef in React Native</Text>
            <TextInput ref={input} style={styles.input} placeholder="Enter User Name" />
            <TextInput style={styles.input}  placeholder="Enter User Password" />
            <Button  title='update' onPress={updateButton}></Button>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderColor: 'skyblue',
        borderWidth: 2,
        margin: 10,
    },
});
export default App;
