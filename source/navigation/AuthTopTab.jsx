import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Login, Registration, TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../components";
import AppBar from "../components/Reusable/AppBar";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={require("../../assets/images/onboard/avatarbg.webp")}
            width="100%"
            height={300}
          />
          {/* <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            color1={COLORS.white}
            icon={"logout"}
            onPress1={() => {}}
            //   onPress={() => navigation.goBack()}
          /> */}
          
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="SignUpf" component={Registration} />
        <Tab.Screen name="Loginn" component={Login} />
      </Tab.Navigator>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({
  profile: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 110,
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    borderWidth: 1,
    borderRadius: 90,
    // borderColor: COLORS.white,
  },
  name: {
    backgroundColor: COLORS.lightGrey,
    padding: 1,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
