import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Item = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.item}>
      <Text style={styles.txt}>{data.title}</Text>
      <Ionicons name="heart-outline" size={24} color="white" />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "darkblue",
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  txt: {
    color: "white",
    fontSize: 18,
  },
});
