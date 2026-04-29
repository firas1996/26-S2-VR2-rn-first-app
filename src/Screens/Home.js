import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Item from "../Components/Item";

const Home = () => {
  const [items, setItems] = useState([]);
  const [itemData, setItemData] = useState({ id: 0, title: "", isFav: false });
  const inputChangeHandler = (txt) => {
    setItemData({ id: Math.random(), title: txt, isFav: false });
  };
  const addItem = () => {
    if (itemData.title.trim().length) {
      setItems([...items, itemData]);
      setItemData({ title: "" });
    }
  };
  const editFavItem = (id) => {
    setItems(
      items.map((element) => {
        return element.id === id
          ? { ...element, isFav: !element.isFav }
          : element;
      }),
    );
  };
  console.log(items);
  return (
    <View style={styles.container}>
      <View style={styles.vInp}>
        <TextInput
          style={styles.inp}
          onChangeText={inputChangeHandler}
          value={itemData.title}
        />
        <TouchableOpacity style={styles.btn} onPress={addItem}>
          <Text style={styles.btnTxT}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vItems}>
        <FlatList
          data={items}
          renderItem={(data) => {
            return <Item data={data.item} editFavItem={editFavItem} />;
          }}
        />
      </View>
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
    paddingHorizontal: 10,
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
