import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import reusable from "../../components/Reusable/reusable.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import NetworkImage from "../../components/Reusable/NetworkImage";
import ReusableTile from "../../components/Reusable/ReusableTile";

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const search = [
    {
      _id: 1,
      country_id: 1,
      title: "Wait Disney world",
      imageUrl: require("../../../assets/images/Places/usa.jpg"),
      rating: 4.6,
      location: "USA New york",
      review: "2343 reviews",
    },
    {
      _id: 2,
      country_id: 1,
      title: "Statue of Liberty",
      imageUrl: require("../../../assets/images/Places/pak.jpg"),
      location: "USA New york",
      rating: 4.6,
      review: "2343 reviews",
    },
    {
      _id: 3,
      country_id: 2,
      title: "Statue of Liberty",
      imageUrl: require("../../../assets/images/Places/uk.jpeg"),
      location: "USA New york",
      rating: 4.6,
      review: "2343 reviews",
    },
  ];
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to visit"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      {search.length === 0 ? (
        <View style={{ marginTop: 100 }}>
          <NetworkImage
            source={require("../../../assets/images/onboard/search.png")}
            width={"100%"}
            height={300}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => {
                  navigation.navigate("PlacesDetails", item._id);
                }}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  input: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.lightBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});
