import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import {imageBaseUrl} from '../../App';
import {useSelector} from 'react-redux';

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: `${imageBaseUrl}3pn`,
  },
  {
    id: 'Uber-XL-334',
    title: 'Uber XL',
    multiplier: 1.2,
    image: `${imageBaseUrl}5w8`,
  },
  {
    id: 'Uber-LUX-783',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: `${imageBaseUrl}7pf`,
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const {travelTimeInfo} = useSelector(state => state.nav);
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-1 `}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-3 z-50`}>
          <Icon
            style={tw`p-1 bg-black rounded-full w-9`}
            name="arrowleft"
            type="antdesign"
            color="white"
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride
          {/* - {travelTimeInfo?.distance?.text} */}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              item.id === selected?.id && 'bg-gray-200'
            }`}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>Travel time...</Text>
              {/* <Text>{travelTimeInfo?.duration?.text} Travel Time</Text> */}
            </View>
            <Text style={tw`text-xl`}>
              $99
              {/* {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP',
              }).format(
                (travelTimeInfo?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100,
              )} */}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
