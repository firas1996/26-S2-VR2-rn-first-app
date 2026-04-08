import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComp from "./src/Components/FirstComp";
import { useState } from "react";
import Login from "./src/Screens/Login";

export default function App() {
  const name = "Firas";
  const [test, setTest] = useState("");
  const getData = (data) => {
    setTest(data);
    console.log(test);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "red", fontSize: 24 }}>Hello, {test} </Text>
      <FirstComp name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      <Login />
    </View>
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
