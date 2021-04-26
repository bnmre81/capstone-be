import React from "react";

// Styles
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";

const DownButton = () => {
  const handleVote = () => {
    alert("down vote!");
  };
  return (
    <View>
      <TouchableOpacity onPress={handleVote}>
        <Text>Down Vote</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DownButton;
