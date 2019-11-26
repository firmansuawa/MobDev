import React from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, WebView } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { ScrollView } from 'react-native-gesture-handler';

const KatalogMobil = () => {
    return (
        <ImageBackground source={require('../assets/bgmobil.jpg')} style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View>
                    <View style={styles.cardview}>
                        <ImageDetail 
                            title="Ferrari 488 Spider "
                            price="Rp. 10.000.000.000"
                            imageSource={require('../assets/ferrari.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail 
                            title="BMW M850i xDrive"
                            price="Rp. 4.000.000.000"
                            imageSource={require('../assets/bmw8.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail
                            title="Lamborghini Huracan"
                            price="Rp. 8.900.000.000"
                            imageSource={require('../assets/lamborghini.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail    
                            title="Porsche 718 Cayman S PDK"
                            price="Rp.2.500.000.000"
                            imageSource={require('../assets/porsche.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail    
                            title="BMW i8 Coupe Hybrid"
                            price="Rp.3.550.000.000"
                            imageSource={require('../assets/bmwi8.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail    
                            title="Audi R8 Coupe 5.2 V10"
                            price="Rp.7.500.000.000"
                            imageSource={require('../assets/audir8.jpg')}
                        />
                    </View>

                    <View style={styles.cardview}>
                        <ImageDetail    
                            title="Jeep Wrangler Unlimited Rubicon 4x4"
                            price="Rp.1.100.000.000"
                            imageSource={require('../assets/jeep.jpg')}
                        />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
};

export default KatalogMobil;

const styles = StyleSheet.create({

    cardview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f3f1ef',
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