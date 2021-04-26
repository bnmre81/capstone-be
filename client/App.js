import { Root } from "native-base";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as Font from "expo-font";
import { observer } from "mobx-react";

// Main Navigator
import MainStack from "./components/navigation";

const theme = {
  primary: "#0A0E28",
  secondary: "#2493A2",
  accent: "#DCd33C",
};

function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <MainStack />
      </Root>
    </ThemeProvider>
  );
}

export default observer(App);
