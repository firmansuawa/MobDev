import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';

const KatalogMobil = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageDetail 
                title="Ferrari"
                price="Rp.1200"
                imageSource={require('../assets/ferrari.jpg')}
            />
            <ImageDetail 
                title="Pagani"
                price="Rp.1500"
                imageSource={require('../assets/pagani.jpg')}
            />
            <ImageDetail
                title="Lamborghini"
                price="Rp.1000"
                imageSource={require('../assets/lamborghini.jpg')}
            />
            <ImageDetail
                title="Buggati"
                price="Rp.2000"
                imageSource={require('../assets/buggati.jpg')}
            />
        </View>
        </ScrollView>
    )
};

export default KatalogMobil;

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },

    center:{
         width: "90%",
         marginVertical: 5
    }
  });