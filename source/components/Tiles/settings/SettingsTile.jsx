import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "../../Reusable/reusable.style";
import ReusableText from "../../Reusable/ReusableText";
import { COLORS, TEXT } from "../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "../../Reusable/WidthSpacer";

const SettingsTile = ({ title, title1, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText
        text={title}
        family={"regular"}
        size={TEXT.small}
        color={COLORS.dark}
      />
      {title === "Language" ? (
        <View style={reusable.rowWithSpace("flex-start")}>
          <Image
            source={require("../../../../assets/images/Places/usa.jpg")}
            style={styles.image}
          />
          <WidthSpacer width={5} />
          <ReusableText
            text={"English"}
            family={"regular"}
            size={TEXT.small}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      ) : (
        <View style={reusable.rowWithSpace("flex-start")}>
          <ReusableText
            text={title1}
            family={"regular"}
            size={TEXT.small}
            color={COLORS.gray}
          />
          <WidthSpacer width={5} />
          <AntDesign name="right" size={20} color={COLORS.dark} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingsTile;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderBottomWidth: 1,
  },
  image: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
});
