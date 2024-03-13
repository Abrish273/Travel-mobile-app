import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.height * 0.05,
    marginHorizontal: 15,
  },
  rowWithSpace: (justifyContent) =>  ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
});
export default reusable;
