import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Item = ({ data, editFavItem }) => {
  console.log(data);
  return (
    <TouchableOpacity
      onPress={() => {
        editFavItem(data.id);
      }}
    >
      <View style={styles.item}>
        <Text style={styles.txt}>{data.title}</Text>
        <Ionicons
          name={data.isFav ? "heart" : "heart-outline"}
          size={32}
          color={data.isFav ? "red" : "white"}
        />
      </View>
    </TouchableOpacity>
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
