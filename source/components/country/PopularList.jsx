import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ReusableTile from '../Reusable/ReusableTile';

const PopularList = ({data}) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <View style={{ marginBottom: 10 }}>
        <ReusableTile
          item={item}
          onPress={() => navigation.navigate("HotelDetails", item._id)}
        />
      </View>
    );
  return (
    <FlatList 
     data={data}
     scrollEnabled={false}
     showsHorizontalScrollIndicator={false}
     renderItem={renderItem}
    />
  )
}

export default PopularList
