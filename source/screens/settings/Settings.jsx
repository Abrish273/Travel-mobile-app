import { View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import AppBar from "../../components/Reusable/AppBar";
import ReusableText from "../../components/Reusable/ReusableText";
import { useNavigation } from "@react-navigation/native";
import { HeightSpacer, SettingsTile } from "../../components";

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 120 }}>
        <AppBar
          top={10}
          leftt={0}
          right={0}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
        <View style={{ marginHorizontal: 30 }}>
          <HeightSpacer height={100} />
          <ReusableText
            text={"Account Settings"}
            family={"xtrabold"}
            size={SIZES.xLarge - 5}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingsTile title={"Language"} title1={""} />
          <HeightSpacer height={10} />
          <SettingsTile title={"Country"} title1={"USA"} />
          <HeightSpacer height={10} />
          <SettingsTile title={"Currency"} title1={"USD"} />
          <HeightSpacer height={50} />
          <ReusableText
            text={"Support"}
            family={"xtrabold"}
            size={SIZES.xLarge - 5}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingsTile title={"Get Help"} title1={""} />
          <HeightSpacer height={10} />
          <SettingsTile title={"Give a feedback"} title1={""} />
          <HeightSpacer height={50} />
          <ReusableText
            text={"Legal"}
            family={"xtrabold"}
            size={SIZES.xLarge - 5}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingsTile title={"Terms of Service"} title1={""} />
          <HeightSpacer height={10} />
          <SettingsTile title={"Privacy Policy"} title1={""} />
          <HeightSpacer height={20} />
        </View>
      </View>
    </View>
  );
};

export default Settings;
