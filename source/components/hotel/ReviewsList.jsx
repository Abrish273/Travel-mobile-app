import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewsTile from "../Tiles/Reviews/ReviewsTile";

const ReviewsList = ({ reviews }) => {
  return (
    <View>
      <FlatList
        data={reviews}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{marginBottom: 10}}>
            <ReviewsTile review={item} />
          </View>
        )}
      />
    </View>
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
