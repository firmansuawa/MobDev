import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>   
          <View style={styles.container}>
               
               <View style={styles.center,styles.BG}>
                    <Text style={styles.title}>Blessing Showroom</Text>
                    <Button
                         title="Buka Katalog Mobil"
                         color='#24252a'
                         onPress={() => navigation.navigate('KatalogMobil')}
                         
                    />
                    <Text>-</Text>

                    <Button
                         title="Buka Katalog Motor"
                         color='#24252a'
                         onPress={() => navigation.navigate('KatalogMotor')}
                    />
                    <Text>-</Text>

                    <Button
                         title="Lokasi Showroom"
                         color='#24252a'
                         onPress={() => navigation.navigate('Lokasi')}
                    />
               </View>
               
          </View>
       </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
     title: {
          textAlign: 'center',
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold',
          paddingTop: -1,
          marginVertical: 15
     },

     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
     },

     center:{
          width: "90%",
          marginVertical: 5
     },

     BG: {
          width: '90%',
          height: '40%',
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: 'rgba(0, 0 ,0, .5)'
      }

   });