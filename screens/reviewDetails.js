import { Button, Text, View } from "react-native";

import React from "react";
import { globalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="Back to Home" onPress={pressHandler} />
    </View>
  );
}
