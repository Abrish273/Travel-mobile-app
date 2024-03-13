import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
  HotelMap,
  ReviewsList,
  ReusableBtn,
} from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";

const HotelDetails = ({ navigation }) => {
  const hotel = {
    availability: {
      start: "2024-08-20T00:00:00.000Z",
      end: "2024-08-20T00:00:00.000Z",
    },
    coordinates: {
      latitude: 43.5,
      longtitude: -43.4,
    },
    _id: 1,
    country_id: 1,
    title: "Urban click",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero impedit odio cupiditate, saepe explicabo a tempore quae culpa nemo!",
    contact: 1,
    imageUrl: require("../../../assets/images/Places/usa.jpg"),
    rating: 4.8,
    review: "2343 reviews",
    location: "New Orleans, USA",
    price: 200,
    facilities: [
      {
        wifi: true,
        _id: 1,
      },
    ],
    reviews: [
      {
        _id: 1,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores deleniti quos deserunt repellat quam modi ipsa pariatur maiores enim!",
        rating: 4.6,
        user: {
          _id: 1,
          username: "Jhon Doe",
          profile: require("../../../assets/images/Places/pak.jpg"),
        },
      },
      {
        _id: 2,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores deleniti quos deserunt repellat quam modi ipsa pariatur maiores enim!",
        rating: 4.6,
        user: {
          _id: 1,
          username: "Jhon Doe",
          profile: require("../../../assets/images/Places/usa.jpg"),
        },
      },
      {
        _id: 3,
        review:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores deleniti quos deserunt repellat quam modi ipsa pariatur maiores enim!",
        rating: 4.6,
        user: {
          _id: 1,
          username: "Jhon Doe",
          profile: require("../../../assets/images/Places/usa.jpg"),
        },
      },
    ],
  };
  let coordinates = {
    id: hotel._id,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longtitude,
    title: hotel.title,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <ScrollView>
      <View style={{ height: 120 }}>
        <AppBar
          title={"Hotel Details"}
          color={COLORS.white}
          color1={COLORS.white}
          icon={"search1"}
          onPress1={() => navigation.navigate("Search")}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={240}
          radius={25}
        />
        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
              text={hotel.title}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />
            <ReusableText
              text={hotel.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />
            <View style={reusable.rowWithSpace("space-between")}>
              <Rating
                maxStars={5}
                stars={hotel.rating}
                bordered={true}
                color={"#FD9942"}
              />
              <ReusableText
                text={`(${hotel.review})`}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.container, { paddingTop: 80 }]}>
        <ReusableText
          text={"Description"}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />
        <DescriptionText text={hotel.description} />
        <HeightSpacer height={10} />
        <ReusableText
          text={"Location"}
          family={"medium"}
          size={SIZES.large}
          color={COLORS.black}
        />
        <HeightSpacer height={10} />
        <ReusableText
          text={hotel.location}
          family={"regular"}
          size={SIZES.small + 2}
          color={COLORS.gray}
        />
        <HeightSpacer height={10} />
        <HotelMap coordinates={coordinates} />
        <HeightSpacer height={10} />
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Reviews"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity>
            <Feather name="list" size={20} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={10} />
        <ReviewsList reviews={hotel.reviews} />
      </View>
      <View style={[reusable.rowWithSpace("space-between"), styles.bottom]}>
        <View>
          <ReusableText
            text={`\$ ${hotel.price}`}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />
          <ReusableText
            text={"Jan 01 - Dec 25"}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
        </View>
        <ReusableBtn
          onPress={() => {
            navigation.navigate("SelectRoom");
          }}
          btnText={"Select Room"}
          textColor={COLORS.white}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.green}
          borderWidth={0}
          borderColor={COLORS.green}
        />
      </View>
    </ScrollView>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 15,
  },
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 140,
    position: "absolute",
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20,
  },
  titleColumn: {
    padding: 15,
  },
  bottom: {
    paddingHorizontal: 10,
    // backgroundColor: ,
    height: 90,
    paddingVertical: 10,
  },
});
