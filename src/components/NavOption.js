import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {imageBaseUrl} from '../../App';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: `${imageBaseUrl}3pn`,
    screen: 'Map',
  },
  {
    id: '436',
    title: 'Order food',
    image: `${imageBaseUrl}28w`,
    screen: 'EatsScreen',
  },
];

const NavOption = () => {
  const navigation = useNavigation();
  const {origin} = useSelector(state => state.nav);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(`${item.screen}`)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          // disabled={!origin}
        >
          <View
          // style={tw`${!origin && 'opacity-20'}`}
          >
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-12 mt-4`}
              type="antdesign"
              name="arrowleft"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;
