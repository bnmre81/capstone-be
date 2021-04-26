import React from "react";

// Styles
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const UpButton = () => {
  const handleVote = () => {
    alert("Up vote!");
  };
  return (
    <View>
      <TouchableOpacity onPress={handleVote}>
        <Text>Up Vote</Text>
      </TouchableOpacity>
    </View>
  );
};
export default UpButton;
