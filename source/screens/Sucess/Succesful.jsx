import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  HeightSpacer,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReusableTile,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Succesful = () => {
  const navigation = useNavigation()
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
  ];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/onboard/checked.png")}
          style={styles.images}
        />

        <ReusableText
          text={"Booking Successful!"}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />
        <ReusableText
          text={"You can find your booking details below"}
          family={"medium"}
          size={TEXT.small}
          color={COLORS.gray}
        />
        <HeightSpacer height={50} />
        <View
          style={{
            marginRight: 170,
          }}
        >
          <ReusableText
            text={"Room Details"}
            family={"xtrabold"}
            size={TEXT.xLarge - 2}
            color={COLORS.black}
          />
        </View>
        <View style={styles.tile}>
          <ReusableTile item={hotels[0]} />
          <HeightSpacer height={20} />
          <ReusableBtn
            onPress={() => navigation.navigate("")}
            btnText={"Done"}
            textColor={COLORS.white}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Succesful;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    height: "85%",
  },
  tile:{
    width: SIZES.width,
    paddingHorizontal: 20,

  },
  images: {
    width: "40%",
    height: 200,
    resizeMode: "contain",
  },
});
