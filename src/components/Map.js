import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from '@rneui/themed';
import MapViewDirections from 'react-native-maps-directions';
import tw from 'twrnc';
import {setTravelTimeInfo} from '../redux/slice/navSlice';

const Map = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {origine, destination} = useSelector(state => state.nav);
  // const mapRef = useRef(null);

  // useEffect(() => {
  //   if (!origine || !destination) return;

  //   mapRef.current.fitToSippLiedMarkers(['origin', 'destination']),
  //     {
  //       edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
  //     };
  // }, [origine, destination]);

  // useEffect(() => {
  //   if (!origine || !destination) return;

  //   const getTravelTime = async () => {
  //     const URL = `https://maps.google.com/maps/api/distancematrix/json?units=imperial&origin=${origine.destination}&destination=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;

  //     fetch(URL)
  //       .then(res => res.json())
  //       .then(data => dispatch(setTravelTimeInfo(data.rows[0].elements[0])));
  //   };
  //   getTravelTime();
  // }, [origine, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <>
      <MapView
        // ref={mapRef}
        style={tw`flex-1`}
        // mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          // latitude: origine.location.lat,
          // longitude: origine.location.lng,
          //   latitudeDelta: 0.005,
          //   longitudeDelta: 0.005,
        }}>
        {/* {origine && destination && (
          <MapViewDirections
            origin={origin.des}
            destination={destination.desc}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColore='black'
          />
        )} */}
        {origine?.location && (
          <Marker
            coordinate={{
              latitude: origine.location.lat,
              longitude: origine.location.lng,
            }}
            title="Origine"
            description={origine.desc}
            identifier="origin"
          />
        )}
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.desc}
            identifier="destination"
          />
        )}
      </MapView>

      <TouchableOpacity
        style={tw`absolute top-2 left-3`}
        onPress={() => navigation.goBack()}>
        <Icon
          style={tw`p-2 bg-black rounded-full w-12 mt-4`}
          name="arrowleft"
          type="antdesign"
          color="white"
        />
      </TouchableOpacity>
    </>
  );
};

export default Map;
