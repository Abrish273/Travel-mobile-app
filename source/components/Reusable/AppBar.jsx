import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "../Reusable/ReusableText";
import { SIZES, COLORS } from "../../constants/theme";
import reusable from "./reusable.style";

const AppBar = ({ color, title, color1, icon, onPress, onPress1, cx }) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWithSpace("space-between")}>
        <TouchableOpacity style={styles.box(color)} onPress={onPress}>
          <AntDesign name="left" size={26} />
        </TouchableOpacity>
        <ReusableText
          text={title}
          family={"medium"}
          size={SIZES.medium}
          color={cx != null ? cx : COLORS.black}
        />
        <TouchableOpacity style={styles.box1(color1)} onPress={onPress1}>
          <AntDesign name={icon} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  overlay: ({
    position: "absolute",
    top: 60,
    left: 10,
    right: 12,
    justifyContent: "center",
  }),
  box: (color) => ({
    backgroundColor: color,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
  box1: (color1) => ({
    backgroundColor: color1,
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  }),
});
