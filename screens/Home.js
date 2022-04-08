import { Button, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../styles/Global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to Review Details" onPress={pressHandler} />
    </View>
  );
}
