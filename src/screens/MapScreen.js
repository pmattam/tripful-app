import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  ImageBackground,
  Linking,
  Button,
  Dimensions
} from 'react-native';

let {width, height} = Dimensions.get('window')

const ASPECT_RATIO = (width / height);
const LATITUDE = 33.7490;
const LONGITUDE = -84.3880;
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log("maps props", props);
        this.state = {
          hotel: props.navigation.state.params.hotelPlan,
          region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          },       
          markers: []
        }
    };

    componentDidMount = () => {
      this.getMarker();
    }

    getMarker = () => {
      address = this.state.hotel.address; //"1.5 km northwest from Arenal Dam, La Fortuna, Costa Rica";
      console.log("address", address);
      var geoURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDhUOOJ3zqFcsqCSl9pyYMXXiyMw03wH4E`;
        fetch(geoURL, {method: 'GET'})
          .then(function(response) {
            return response.json();
          })
          .then(function(apiObjData) {
            console.log(apiObjData.results[0]);
            return apiObjData.results[0];
          }).then(function(geoData) {
            return marker = {
              coordinates: {
                latitude: geoData.geometry.location.lat,
                longitude: geoData.geometry.location.lng
              },
              id: 1
            };
          }).then((marker) => {
            console.log(marker);
            this.setState(() => ({markers: [marker]}))
          })
    }

    render() {
      const {region} = this.state.region
      return(
      <React.Fragment>
          <View style={styles.container}>
              <MapView
              style={styles.map}
              region={ region }
              onRegionChange={ (region)=> this.setState({region})}
              onRegionChangeComplete={(region)=> this.setState({region})}
              showsUserLocation={false}
              showsMyLocationButton={true}
              followsUserLocation={false}
              >
          
              {this.state.markers.map((marker, id) => (
                  <Marker
                      key={marker.id}
                      coordinate={marker.coordinates}
                      title={this.state.hotel.name}
                      description={marker.description}
                      pinColor={'lightmaroon'}
                      onPress={e => console.log(e.description)}
                  />
              ))}
              </MapView>
          </View>
      </React.Fragment>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  map: {
      ...StyleSheet.absoluteFillObject,
  }
});