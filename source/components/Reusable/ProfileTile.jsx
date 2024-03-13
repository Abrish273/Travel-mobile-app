import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileTile = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name={icon} size={24} color="black" />
      <View style={styles.subContainer}>
        <Text style={{ color: COLORS.lightGrey, fontSize: 16 }}>{text}</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    paddingRight: 40,
    marginBottom: 10,
  },
  subContainer: {
    marginLeft: 20,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
