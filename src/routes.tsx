import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StatusBar } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_300Light_Italic,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { BalsamiqSans_400Regular } from "@expo-google-fonts/balsamiq-sans";
import { Audiowide_400Regular } from "@expo-google-fonts/audiowide";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Info from "./pages/Info";

const AppStack = createStackNavigator();

const Routes = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    BalsamiqSans_400Regular,
    Audiowide_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(47, 52, 55)" }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="rgb(47, 52, 55)"
          />
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Detail" component={Detail} />
            <AppStack.Screen name="Info" component={Info} />
          </AppStack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};

export default Routes;
