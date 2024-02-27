import { View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { ReusableText, ReusableBtn, HeightSpacer } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
        <HeightSpacer height={40} />
        <ReusableBtn
          onPress={() => {}}
          btnText={"Let's Go"}
          textColor={COLORS.white}
          width={(SIZES.width - 50) / 2}
          backgroundColor={COLORS.red}
          borderWidth={0}
          borderColor={COLORS.red}
        />
      </View>
    </View>
  );
};

export default Slides;
