import * as Font from "expo-font";

import AppLoading from "expo-app-loading";
import Home from "./screens/Home";

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
