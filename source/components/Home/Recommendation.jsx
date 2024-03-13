import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../Reusable/reusable.style";
import { FontAwesome6 } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile";

const Recommendation = () => {
  const navigation = useNavigation();

  const recommendations = [
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
    <View style={styles.container}>
      <View
        style={[
          reusable.rowWithSpace("spacee-between"),
          { paddingBottom: 20, justifyContent: "space-between" },
        ]}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <FontAwesome6 name="list-ul" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReusableTile
            item={item}
            onPress={() => {
              navigation.navigate("PlacesDetails", item._id);
            }}
          />
        )}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
