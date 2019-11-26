import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';

const KatalogMotor = () => {
    return (
 master
        <ImageBackground source={require('../assets/bgmobil.jpg')} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View>
                    <View style={styles.cardview}>
                        <ImageDetail 
                            title="Kawasaki Ninja 250"
                            price="Rp. 52.000.000"
                            imageSource={require('../assets/ninja250.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail 
                            title="CBR 250RR"
                            price="Rp.58.000.000"
                            imageSource={require('../assets/cbr250rr.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Yamaha R25"
                            price="Rp.54.000.000"
                            imageSource={require('../assets/r25.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Yamaha NMAX ABS"
                            price="Rp.31.000.000"
                            imageSource={require('../assets/nmax.jpg')}
                        />
                    </View>
                    
                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Yamaha Aerox ABS"
                            price="Rp.30.000.000"
                            imageSource={require('../assets/aerox.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Ducati Panigale"
                            price="Rp.345.000.000"
                            imageSource={require('../assets/ducatipanigale.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Kawasaki ZX6R"
                            price="Rp.325.000.000"
                            imageSource={require('../assets/zx6r.jpg')}
                        /> 
                    </View>            
                </View>
            </ScrollView>
        </ImageBackground>
    )
};

export default KatalogMotor;

const styles = StyleSheet.create({
    
    cardview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin:10,
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#999',
        padding: 5
    },

    center:{
         width: "90%",
         marginVertical: 5
    }
  });