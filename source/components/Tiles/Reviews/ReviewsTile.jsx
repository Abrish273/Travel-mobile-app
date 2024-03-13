import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reusable from "../../Reusable/reusable.style";
import NetworkImage from "../../Reusable/NetworkImage";
import { COLORS, SIZES } from "../../../constants/theme";
import WidthSpacer from "../../Reusable/WidthSpacer";
import ReusableText from "../../Reusable/ReusableText";
import DescriptionText from "../../Reusable/DescriptionText";
import Rating from "../../Reusable/Rating";

const ReviewsTile = ({ review }) => {
  return (
    <View style={styles.reviewBorder}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <NetworkImage
            source={review.user.profile}
            width={55}
            height={50}
            radius={50}
          />
          <WidthSpacer width={20} />
          <View>
            <View style={{ flexDirection: "row" }}>
              <ReusableText
                text={review.user.username}
                family={"medium"}
                size={SIZES.small + 2}
                color={COLORS.black}
              />
              <WidthSpacer width={170} />
              <View style={reusable.rowWithSpace("space-between")}>
                <Rating rating={review.rating} />
              </View>
            </View>
            <DescriptionText text={review.review} lines={2} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewsTile;

const styles = StyleSheet.create({
  reviewBorder: {
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: COLORS.lightGrey,
  },
});
