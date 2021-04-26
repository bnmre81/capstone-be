import React from "react";
import { observer } from "mobx-react";

// Styles
import { Container, Text, View } from "native-base";
import { TextStyled, WaitingMsg } from "./styles";
import { ImageBackground } from "react-native";

// Stores
import socketStore from "../../stores/SocketStore";
import { ConnectedText } from "../StartNomination/styles";

const WaitingResult = ({ navigation }) => {
  if (socketStore.users === socketStore.done) {
    socketStore.highestVote();
    navigation.replace("Result");
  }
  return (
    <Container style={{ backgroundColor: "#D999B9" }}>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/b5/eb/7e/b5eb7ed0245cdcf6e68cf8f283e6190d.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <WaitingMsg>
          <TextStyled>Waiting for Result</TextStyled>
        </WaitingMsg>
        <ConnectedText>
          {socketStore.done}/{socketStore.users} Done
        </ConnectedText>
      </ImageBackground>
    </Container>
  );
};
export default observer(WaitingResult);
