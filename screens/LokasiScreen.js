import React from 'react';
import { Text, StyleSheet, View, ImageBackground, WebView } from 'react-native';

const ComponentScreen = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: "https://www.google.com/maps/place/Prestige+Image+Motorcars/@-6.1156763,106.7843826,17z/data=!3m1!4b1!4m5!3m4!1s0x2e6a1da48a3cc913:0x289ca0a4f26e0fad!8m2!3d-6.1156816!4d106.7865713" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 766
    }
});

export default ComponentScreen;