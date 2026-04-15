import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComp from "./src/Components/FirstComp";
import { useState } from "react";
import Login from "./src/Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";

export default function App() {
  const name = "Firas";
  const [test, setTest] = useState("");
  const getData = (data) => {
    setTest(data);
    console.log(test);
  };
  const BTab = createBottomTabNavigator();
  return (
    <>
      {/* <Text style={{ color: "red", fontSize: 24 }}>Hello, {test} </Text>
      <FirstComp name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      <NavigationContainer>
        <BTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "Georgia",
              fontWeight: 300,
            },
          }}
        >
          <BTab.Screen name="Login" component={Login} />
          <BTab.Screen name="Home" component={Home} />
        </BTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    color: "green",
    fontSize: 24,
  },
});
