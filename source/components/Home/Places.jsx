import { ActivityIndicator, StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { COLORS, SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";
import fetchCountries from "../../hooks/fetchCountries";

const Places = () => {
  // const {countries, isLoading, error, refetch} = fetchCountries()
  const countries = [
    {
      _id: 1,
      country: "USA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.",
      imageUrl: require("../../../assets/images/Places/usa.jpg"),
      region: "North America, USA",
    },
    {
      _id: 2,
      country: "Pakistan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.",
      imageUrl: require("../../../assets/images/Places/pak.jpg"),
      region: "South Asia, Pakistan",
    },
    {
      _id: 3,
      country: "UK",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.",
      imageUrl: require("../../../assets/images/Places/uk.jpeg"),
      region: "West Europe, UK",
    },
    {
      _id: 4,
      country: "Egypt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.",
      imageUrl: require("../../../assets/images/Places/uk.jpeg"),
      region: "West Europe, UK",
    },
    {
      _id: 5,
      country: "Israiel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.",
      imageUrl: require("../../../assets/images/Places/uk.jpeg"),
      region: "West Europe, UK",
    },
  ];
  if(isLoading) {
    return <ActivityIndicator 
      size={SIZES.xxLarge}
      color={COLORS.lightBlue}
    />
  } 
  return (
    <View>
      <HeightSpacer height={20} />
      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
