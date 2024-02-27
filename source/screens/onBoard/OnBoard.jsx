import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slides } from "../../components";

const OnBoard = () => {
  const slides = [
    {
      _id: 1,
      image: require("../../../assets/images/onboard/travel.jpg"),
      title: "Find the perfect place to stay",
    },
    {
      _id: 2,
      image: require("../../../assets/images/onboard/travel1.jpg"),
      title: "Discover the world",
    },
    {
      _id: 3,
      image: require("../../../assets/images/onboard/travel2.jpg"),
      title: "Find the best Hotels in the world",
    },
  ];
  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Slides item={item} />}
    />
  );
};

export default OnBoard;

const styles = StyleSheet.create({
  txt: {
    fontFamily: "bold",
    fontSize: 36,
  },
  container: {
    height: "100%",
    backgroundColor: "gray",
    // marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
