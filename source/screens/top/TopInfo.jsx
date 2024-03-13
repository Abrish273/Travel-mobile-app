import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileTile from "../../components/Reusable/ProfileTile";
import { useNavigation } from "@react-navigation/native";

const TopInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={{ margin: 20 }}>
      <ProfileTile
        icon={"person-outline"}
        text={"Personal Information"}
        onPress={() => navigation.navigate("")}
      />
      <ProfileTile
        icon={"logo-alipay"}
        text={"Payments"}
        onPress={() => navigation.navigate("Payments")}
      />
      <ProfileTile
        icon={"settings-outline"}
        text={"Settings"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default TopInfo;

const styles = StyleSheet.create({});
