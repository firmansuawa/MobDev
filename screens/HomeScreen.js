import React from 'react';
import { Text, View, Button, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <ImageBackground source={require('../assets/background.jpg')} style={{ width: '100%', height: '100%' }}>   
          <View style={styles.container}>
               
               <View style={styles.center,styles.BG}>
                    <Text style={styles.title}>Blessing Showroom</Text>
                    <Button
                         title="Buka Katalog Mobil"
                         color='black'
                         onPress={() => navigation.navigate('KatalogMobil')}
                         
                    />
                    <Text>-</Text>

                    <Button
                         title="Buka Katalog Motor"
                         color='black'
                         onPress={() => navigation.navigate('KatalogMotor')}
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
          height: '27%',
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: 'rgba(0, 0 ,0, .5)'
      }

   });