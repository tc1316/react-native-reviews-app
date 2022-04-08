import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../styles/Global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}
