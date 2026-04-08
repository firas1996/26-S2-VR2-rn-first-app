import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstComp = ({ name, getData }) => {
  const x = "World!";
  getData(x);
  return (
    <View>
      <Text>Hello, {name} !</Text>
    </View>
  );
};

export default FirstComp;

const styles = StyleSheet.create({});
