import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../components";
import AppBar from "../components/Reusable/AppBar";

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={require("../../assets/images/onboard/avatarbg.webp")}
            width="100%"
            height={300}
          />
          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            color1={COLORS.white}
            icon={"logout"}
            onPress1={() => {}}
            //   onPress={() => navigation.goBack()}
          />
          <View style={styles.profile}>
            <NetworkImage
              source={require("../../assets/images/onboard/avatarbg.webp")}
              //   styles={styles.image}
              width={100}
              height={100}
              radius={50}
              //   borderColor={COLORS.lightWhite}
            />
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"King Andrew"}
                  family={"medium"}
                  size={SIZES.large}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"king1234@gmail.com"}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Infoo" component={TopInfo} />
        <Tab.Screen name="Trips" component={TopTrips} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

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
