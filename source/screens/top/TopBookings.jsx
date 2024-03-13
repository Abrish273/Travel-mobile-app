import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const TopBookings = () => {
  const navigation = useNavigation()
  const hotels = [
    {
      _id: 1,
      country_id: 1,
      title: "Wait Disney world",
      imageUrl: require("../../../assets/images/Places/usa.jpg"),
      rating: 4.6,
      location: "USA New york",
      review: "2343 reviews",
    },
    {
      _id: 2,
      country_id: 1,
      title: "Statue of Liberty",
      imageUrl: require("../../../assets/images/Places/pak.jpg"),
      location: "USA New york",
      rating: 4.6,
      review: "2343 reviews",
    },
    {
      _id: 3,
      country_id: 2,
      title: "Statue of Liberty",
      imageUrl: require("../../../assets/images/Places/uk.jpeg"),
      location: "USA New york",
      rating: 4.6,
      review: "2343 reviews",
    },
  ];

  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <ReusableTile
              item={item}
              onPress={() => {
                navigation.navigate("HotelDetails");
              }}
            />
            {/* <View style={reusable.rowWithSpace("space-between")}>

            </View> */}
          </View>
        )}
      />
    </View>
  );
};

export default TopBookings;

const styles = StyleSheet.create({});
