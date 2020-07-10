import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsShowScreen = ({ navigation}) => {
  const id = navigation.getParam(id)
  return (
    <View>
      <Text>Results Show working</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
