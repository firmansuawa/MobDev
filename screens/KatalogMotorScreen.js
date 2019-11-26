import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';

const KatalogMotor = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageDetail 
                title="Kawasaki Ninja 250"
                price="Rp. 52.000.000"
                imageSource={require('../assets/ninja250.jpg')}
            />
            <ImageDetail 
                title="CBR 250RR"
                price="Rp.58.000.000"
                imageSource={require('../assets/cbr250rr.jpg')}
            />
            <ImageDetail
                title="Yamaha R25"
                price="Rp.54.000.000"
                imageSource={require('../assets/r25.jpg')}
            />
            <ImageDetail
                title="Yamaha NMAX ABS"
                price="Rp.31.000.000"
                imageSource={require('../assets/nmax.jpg')}
            />
            <ImageDetail
                title="Yamaha Aerox ABS"
                price="Rp.30.000.000"
                imageSource={require('../assets/aerox.jpg')}
            />
            <ImageDetail
                title="Ducati Panigale"
                price="Rp.345.000.000"
                imageSource={require('../assets/ducatipanigale.jpg')}
            />
            <ImageDetail
                title="Kawasaki ZX6R"
                price="Rp.325.000.000"
                imageSource={require('../assets/zx6r.jpg')}
            />             
        </View>
        </ScrollView>
    )
};

export default KatalogMotor;

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