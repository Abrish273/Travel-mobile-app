import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  DescriptionText,
  NetworkImage,
  PopularList,
  ReusableBtn,
  ReusableText,
} from "../../components";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";

const PlacesDetails = () => {
  const route = useRoute();
  const id = route.params;
  const navigation = useNavigation();

  const place = {
    _id: 1,
    place_id: 1,
    title: " Statue of Liberty",
    contact_id: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis reprehenderit dicta velit ea quidem quas iste impedit ipsa. Obcaecati quae hic inventore adipisci assumenda id eveniet sed aspernatur? Sunt, ducimus.",
    imageUrl: require("../../../assets/images/Places/usa.jpg"),
    rating: 4.7,
    review: "2343 reviews",
    location: "New Orleans, USA",
    latitude: 43.5,
    longitude: -43.4,
    popular: [
      {
        _id: 1,
        title: "Urban center",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans , USA",
      },
      {
        _id: 2,
        title: "US capitol",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans",
      },
      {
        _id: 1,
        title: "US Aerospace museum",
        imageUrl: require("../../../assets/images/Places/usa.jpg"),
        rating: 4.7,
        review: "2343 reviews",
        location: "New Orleans",
      },
    ],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NetworkImage
            source={place.imageUrl}
            width={"100"}
            height={350}
            radius={30}
          />
          <AppBar
            title={place.title}
            color={COLORS.white}
            color1={COLORS.white}
            cx={COLORS.white}
            icon={"search1"}
            onPress1={() => navigation.navigate("Search")}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.description}>
            <ReusableText
              text={place.location}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <DescriptionText text={place.description} lines={10} />
            <View style={{ alignContent: "center", marginBottom: 20 }}>
              <View style={reusable.rowWithSpace("space-between")}>
                <ReusableText
                  text={"Popular Hotels"}
                  family={"medium"}
                  size={TEXT.xLarge}
                  color={COLORS.black}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Feather name="list" size={20} />
                </TouchableOpacity>
              </View>
              <PopularList data={place.popular} />

              <ReusableBtn
                onPress={() => navigation.navigate("HotelSearch")}
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

export default PlacesDetails;

const styles = StyleSheet.create({
  container: {
    backeground: "#F3F4F80",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
