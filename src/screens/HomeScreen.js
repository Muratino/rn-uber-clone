import {SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import NavOption from '../components/NavOption';
import {imageBaseUrl} from '../../App';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../redux/slice/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`p-5 h-full`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{
            uri: `${imageBaseUrl}gzs`,
          }}
        />
        {/* <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          // query={{
          //   key: '', //Надо сделать АПИ ключь
          //   language: 'ru',
          // }}
          // onPress={(data, details = null) => {
          //   dispatch(
          //     setOrigin({
          //       location: details.geometry.location,
          //       desc: data.description,
          //     }),
          //   );

          //   dispatch(setDestination(null));
          // }}
          fetchDetails={false}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        /> */}

        <NavOption />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
