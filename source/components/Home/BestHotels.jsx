import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ReusableText from "../Reusable/ReusableText";
import reusable from "../Reusable/reusable.style";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import HotelCard from "../Tiles/Hotel/HotelCard";

const BestHotels = () => {
  const navigation = useNavigation();
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
    <View>
      <View
        style={[
          reusable.rowWithSpace("flex-start"),
          { paddingBottom: 20, justifyContent: "space-between" },
        ]}
      >
        <ReusableText
          text={"Best Hotels"}
          family={"medium"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={hotels}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            // margin={-45}
            onPress={() => {
              navigation.navigate("HotelDetails", item._id);
            }}
          />
        )}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({});
