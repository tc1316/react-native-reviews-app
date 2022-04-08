import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
  },
});
