import React from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import busses from '../../assets/Maps/points';

const getSize = (id) => {
  if (id === '3') {
    return 20;
  }
  return 40;
}

const getImage = (id) => {
  if (id === '3') {
    return require('../../assets/Maps/blue.jpg');
  }
  return require('../../assets/Maps/bus.png');
};

const HomeMap = (props) => {
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>

      {busses.map((bus) => (
        <Marker
          key={bus.id}
          coordinate={{latitude: bus.latitude, longitude: bus.longitude}}
        >
          <Image
            style={{
              width: getSize(bus.id),
              height: getSize(bus.id),
              resizeMode: 'contain',
              transform: [{
                rotate: `${bus.heading}deg`
              }]
            }}
            source={getImage(bus.id)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
