import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.listItem}>
        <Image
          // This will allow for the aspect ratio to be automatically set (landspace will not be cut off)
          //   resizeMode="contain"
          style={styles.placeImage}
          source={props.image}
        />
        <Text>{props.place}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default ListItem;
