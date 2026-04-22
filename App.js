import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComp from "./src/Components/FirstComp";
import { useState } from "react";
import Login from "./src/Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const name = "Firas";
  const [test, setTest] = useState("");
  const getData = (data) => {
    setTest(data);
    console.log(test);
  };
  const BTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <Text style={{ color: "red", fontSize: 24 }}>Hello, {test} </Text>
      <FirstComp name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      {/* <Login /> */}
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "Georgia",
              fontWeight: 300,
            },
          }}
        >
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
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
