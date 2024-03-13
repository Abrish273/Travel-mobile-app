import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

const Chat = () => {
  return (
    <SafeAreaView style={{ height: SIZES.height, justifyContent: "center" }}>
      <Text>Chat</Text>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
