import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {useDispatch} from 'react-redux';
import NavFavourites from './NavFavourites';
import {Icon} from '@rneui/themed';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Goof Morning, Sonny</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          {/* <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
                backgroundColor: 'white',
              },
              textInput: {
                fontSize: 18,
                borderRadius: 0,
                backgroundColor: '#DDDDDF',
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            returnKeyType={'search'}
            // query={{
            //   key: '', //Надо сделать АПИ ключь
            //   language: 'ru',
            // }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  desc: data.description,
                }),
              );

              navigation.navigate('RideOptionsCard');
            }}
            fetchDetails={false}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          /> */}
        </View>
        <NavFavourites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`}>
        <TouchableOpacity
        onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex-row bg-black w-24 px-4 py-3 justify-between rounded-full`}>
          <Icon name="car" type="font-awesome" size={16} color="white" />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fastfood" type="inoicon" size={16} color="black" />
          <Text style={tw`text-black text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
