import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../components/Reusable/reusable.style";
import {
  HeightSpacer,
  ReusableText,
  Places,
  Recommendation,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { FontAwesome } from "@expo/vector-icons";
import homeStyle from "./home.style";
import { useNavigation } from "@react-navigation/native";
import BestHotels from "../../components/Home/BestHotels";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={reusable.container}>
      <ScrollView>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"hey User!"}
            family={"regular"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />
          <TouchableOpacity
            style={homeStyle.box}
            onPress={() => navigation.navigate("Search")}
          >
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />
        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.Large}
          color={COLORS.black}
        />
        <Places />
        <HeightSpacer height={15} />
        <Recommendation />
        <HeightSpacer height={15} />
        <BestHotels />
        <HeightSpacer height={15} />
        <BestHotels />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
