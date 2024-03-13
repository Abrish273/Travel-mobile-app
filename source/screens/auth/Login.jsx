// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import React, { useState } from "react";
// import { COLORS, SIZES } from "../../constants/theme";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { ReusableBtn } from "../../components";

// const validationSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Required"),
//   email: Yup.string().email("Provide a valid email").required("Required"),
// });

// const Login = () => {
//   const [loader, setLoader] = useState(false);
//   const [responseData, setResponseData] = useState(false);
//   const [obscuretext, setObscuretext] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(values);
//     // console.log(values.password);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : null}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150}
//       >
//         <View style={styles.container}>
//           <Formik
//             initialValues={{ email: "", password: "" }}
//             validationSchema={validationSchema}
//             onSubmit={(values) => {
//               // Handle form submission here
//               console.log(values);
//             }}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               touched,
//               handleSubmit,
//               values,
//               errors,
//               isValid,
//               setFieldTouched,
//             }) => (
//               <View>
//                 <View style={styles.wrapper}>
//                   <Text style={styles.label}>Email</Text>
//                   <View
//                     style={styles.inputWrapper(
//                       touched.email ? COLORS.lightBlue : COLORS.gray
//                     )}
//                   >
//                     <MaterialCommunityIcons
//                       name="email-outline"
//                       size={20}
//                       color={COLORS.gray}
//                     />
//                     <TextInput
//                       onChangeText={handleChange("email")}
//                       onBlur={() => setFieldTouched("email")}
//                       value={values.email}
//                       placeholder="Enter your email"
//                     />
//                   </View>
//                 </View>
//                 {/* Add password input field similarly */}
//                 <View style={styles.wrapper}>
//                   <Text style={styles.label}>Password</Text>
//                   <View
//                     style={styles.inputWrapper(
//                       touched.password ? COLORS.lightBlue : COLORS.gray
//                     )}
//                   >
//                     <MaterialCommunityIcons
//                       name="lock-outline"
//                       size={20}
//                       color={COLORS.gray}
//                     />
//                     <TextInput
//                       style={styles.input}
//                       onChangeText={handleChange("password")}
//                       onBlur={() => setFieldTouched("password")}
//                       value={values.password}
//                       placeholder="Enter your password"
//                       secureTextEntry={!obscuretext}
//                     />
//                   </View>
//                 </View>
//                 <ReusableBtn
//                   onPress={handleSubmit}
//                   btnText={"Log In"}
//                   textColor={COLORS.white}
//                   width={SIZES.width - 40}
//                   backgroundColor={COLORS.red}
//                   borderWidth={0}
//                   borderColor={COLORS.red}
//                   disabled={!isValid} // Disable button if form is not valid
//                 />
//               </View>
//             )}
//           </Formik>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: COLORS.lightGrey,
//   },
//   inputWrapper: (inputColor) => ({
//     backgroundColor: COLORS.white,
//     borderWidth: 1,
//     borderColor: inputColor,
//     gap: 5,
//     height: 50,
//     borderRadius: 12,
//     flexDirection: "row",
//     paddingHorizontal: 15,
//     alignItems: "center",
//   }),
//   wrapper: {
//     marginBottom: 20,
//   },
//   label: {
//     fontFamily: "regular",
//     fontSize: SIZES.small,
//     marginBottom: 5,
//     textAlign: "right",
//   },
// });

import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  AsyncStorage,
  Alert,
  StyleSheet,
  Text,
} from "react-native";
import { ReusableBtn } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [obscuretext, setObscureText] = useState(true); // Assuming you have defined 'obscuretext' state for managing password visibility

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleSubmit = async (email, password) => {
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://192.168.3.28:5001/auth/",
        JSON.stringify({
          email,
          password,
          
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);

      // if (response.status === 200) {
      //   // Axios doesn't have a built-in .ok property, so you can check the status directly
      //   await AsyncStorage.setItem("accessToken", response.data.accessToken);

      //   // Redirect to home screen or perform other actions
      // } else {
      //   Alert.alert("Error", response.data.message);
      // }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width - 20,
        marginTop: 10,
      }}
    >
      <View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper(COLORS.lightBlue)}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={COLORS.gray}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChangeEmail}
              value={email}
              placeholder="Enter your email"
            />
          </View>
        </View>
        {/* Add password input field similarly */}
        <View style={styles.wrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper(COLORS.lightBlue)}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={COLORS.gray}
            />
            <TextInput
              style={styles.input}
              onChangeText={handleChangePassword}
              value={password}
              placeholder="Enter your password"
              secureTextEntry={obscuretext}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <ReusableBtn
            onPress={handleSubmit}
            btnText={"Log In"}
            textColor={COLORS.white}
            width={SIZES.width - 50}
            backgroundColor={COLORS.red}
            borderWidth={0}
            borderColor={COLORS.red}
            //   disabled={!isValid}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.lightGrey,
  },
  inputWrapper: (inputColor) => ({
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: inputColor,
    gap: 5,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    marginHorizontal: 10,
    marginLeft: 25,
  }),
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    marginBottom: 5,
    textAlign: "right",
  },
});
