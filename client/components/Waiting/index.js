import React from "react";
import { observer } from "mobx-react";

// Styles
import { Container, Text, View, Toast, Button, Spinner } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";
import { ImageBackground } from "react-native";

// Stores
import socketStore from "../../stores/SocketStore";
import { ConnectedText } from "../StartNomination/styles";

const Waiting = ({ navigation }) => {
  if (socketStore.start) navigation.replace("MovieList");
  return (
    <Container>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/b5/eb/7e/b5eb7ed0245cdcf6e68cf8f283e6190d.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <ConnectedText style={{ marginTop: 300 }}>
          Waiting for Host to Start
        </ConnectedText>
        <Spinner />
      </ImageBackground>
    </Container>
  );
};
export default observer(Waiting);
