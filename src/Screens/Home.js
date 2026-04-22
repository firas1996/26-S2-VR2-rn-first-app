import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vInp}>
        <TextInput style={styles.inp} />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vItems}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  vInp: {
    // backgroundColor: "red",
    flex: 1,
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  vItems: {
    // backgroundColor: "blue",
    flex: 7,
    width: "100%",
    marginBottom: 20,
    alignItems: "flex-start",
  },
  inp: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    height: 45,
    flex: 5,
    marginLeft: 16,
    paddi: 5,
    fontSize: 16,
  },
  btn: {
    flex: 1,
    backgroundColor: "purple",
    margin: 10,
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
  },
  btnTxT: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
