import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default class ListForm extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = text => {
    this.setState({ placeName: text });
  };

  handleAdd = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    // this.setState({ placeName: "" });
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="black"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="Awesome placeholder"
        />
        <Button
          style={styles.addButton}
          title="Add"
          color="green"
          onPress={this.handleAdd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: "70%"
  },
  addButton: {
    width: "30%"
  }
});
