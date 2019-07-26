/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';



class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    })
  }


  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={this.styles.container}>
        <View style={this.styles.inputContainer}>
          <TextInput
            style={this.styles.placeInput}
            value={this.state.placeName}
            placeholder='An Awesome Place'
            onChangeText={this.placeNameChangeHandler}

          />
          <Button title='Add'
            style={this.styles.placeButton}
            onPress={this.placeSubmitHandler} />
        </View>
        {placesOutput}
        <View>

        </View>

      </View>
    )
  }


  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 26,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    inputContainer: {
      //flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    placeInput: {
      width: "70%"
    },
    placeButton: {
      width: "30%"
    }
  });
}
export default App;
