import React from "react";

// Styles
import { View, Text } from "native-base";
import { StartSessionBtn } from "./styles";

const StartSession = () => {
  const handleVote = () => {
    alert("Session started!");
  };
  return (
    <View>
      <StartSessionBtn>
        <Text>Start Session</Text>
      </StartSessionBtn>
    </View>
  );
};
export default StartSession;
