import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import NetworkImage from "../../components/Reusable/NetworkImage";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableText from "../../components/Reusable/ReusableText";
import DescriptionText from "../../components/Reusable/DescriptionText";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { PopularList, ReusableBtn } from "../../components";

const CountryDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params;
  console.log("item", item);
  const country = {
    _id: 1,
    country: "USA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis reprehenderit dicta velit ea quidem quas iste impedit ipsa. Obcaecati quae hic inventore adipisci assumenda id eveniet sed aspernatur? Sunt, ducimus.",
    imageUrl: require("../../../assets/images/Places/usa.jpg"),
    popular: [
      {
        _id: 1,
        title: "The Great Pyramid of Giza",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans",
      },
      {
        _id: 2,
        title: "Golden gate bridge",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans",
      },
      {
        _id: 3,
        title: "West Minister",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans",
      },
    ],
    region: "New Orleans, USA",
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NetworkImage
            source={country.imageUrl}
            width={"100"}
            height={350}
            radius={30}
          />
          <AppBar
            title={country.country}
            color={COLORS.white}
            color1={COLORS.white}
            cx={COLORS.white}
            icon={"search1"}
            onPress1={() => navigation.navigate("Search")}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.description}>
            <ReusableText
              text={country.region}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <DescriptionText text={country.description} lines={10} />
            <View style={{ alignContent: "center", marginBottom: 20 }}>
              <View style={reusable.rowWithSpace("space-between")}>
                <ReusableText
                  text={"Popular Descriptions"}
                  family={"medium"}
                  size={TEXT.xLarge}
                  color={COLORS.black}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Feather name="list" size={20} />
                </TouchableOpacity>
              </View>
              <PopularList data={country.popular} />

              <ReusableBtn
                onPress={() => {
                  navigation.navigate("HotelSearch");
                }}
                btnText={"Find Best Hotels"}
                textColor={COLORS.white}
                width={SIZES.width - 40}
                backgroundColor={COLORS.green}
                borderWidth={0}
                borderColor={COLORS.red}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backeground: "#F3F4F80",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
