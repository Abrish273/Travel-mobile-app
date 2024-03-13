import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const HotelList = ({ navigation }) => {
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
    <SafeAreaView>
      <View style={{ height: 80 }}>
        <AppBar
          title={"Nearby Hotels"}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress1={() => navigation.navigate("Search")}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
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
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelList;

const styles = StyleSheet.create({});
