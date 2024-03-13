import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import reusable from "./reusable.style";
import { COLORS } from "../../constants/theme";

const Rating = ({ rating }) => {
  return (
    <View style={[reusable.rowWithSpace("flex-start") , {alignItems: "center"}]}>
      <MaterialCommunityIcons name="star" size={20} color={"#FD9942"} />
      <WidthSpacer width={5} />
      <ReusableText
        text={rating}
        family={"medium"}
        size={14}
        color={COLORS.gray}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
