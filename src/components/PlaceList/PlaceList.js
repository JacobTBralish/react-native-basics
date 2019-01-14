import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          place={info.item.name}
          image={info.item.image}
          onPress={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
  //   <ScrollView style={styles.listContainer}>{mappedList}</ScrollView>
  //  or the flat list
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
