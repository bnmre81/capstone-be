import React from "react";

// Styles
import { Text, View } from "native-base";
import { HomeContainer } from "./styles";

// Components
import JoinSession from "../Modals/JoinSession";
import StartSession from "../Modals/StartSession";
import { ImageBackground } from "react-native";

const Home = () => {
  return (
    <HomeContainer>
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/b5/eb/7e/b5eb7ed0245cdcf6e68cf8f283e6190d.jpg",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ marginTop: 330 }}>
          <StartSession />
          <JoinSession />
        </View>
      </ImageBackground>
    </HomeContainer>
  );
};
export default Home;
