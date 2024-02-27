import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { OnBoard, Home } from "./source/screens";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();


const App = () => {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/Fonts/Regular.ttf"),
    medium: require("./assets/Fonts/Medium.ttf"),
    bold: require("./assets/Fonts/Regular.ttf"),
    light: require("./assets/Fonts/Light.ttf"),
    xtrabold: require("./assets/Fonts/ExtraBold.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
     if(fontsLoaded) {
       await SplashScreen.hideAsync();
     }
  }, [fontsLoaded]);
  if(!fontsLoaded) {
    return null
  }
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          component={OnBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
