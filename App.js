//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import {css} from './assets/css/Css'
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={css.container}>
      <MapView 
        style={css.map}>
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      </MapView>

      <View style={css.search}>
      
      </View>
    </View>
  );
}
