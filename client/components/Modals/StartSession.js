import React, { useState } from "react";

// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  StartSessionBtn,
} from "./styles";
import { Text } from "native-base";
import { View, Modal, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";

// Stores
import socketStore from "../../stores/SocketStore";
import { useNavigation } from "@react-navigation/native";

const StartSession = () => {
  //Modal State
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    socketStore.connect();
    setIsOpen(true);
  };

  //User State
  const [user, setUser] = useState("User");
  //Room State
  const [room, setRoom] = useState("Room Name");

  const navigation = useNavigation();

  const handleSubmit = () => {
    socketStore.hostRoom({ room, user });
    closeModal();
    navigation.replace("StartNomination");
  };
  //Render
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <ImageBackground
          source={{
            uri:
              "https://i.pinimg.com/originals/b5/eb/7e/b5eb7ed0245cdcf6e68cf8f283e6190d.jpg",
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <AuthContainer>
            <AuthTitle>Host</AuthTitle>
            <AuthTextInput
              onChangeText={(user) => setUser(user)}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#A6AEC1"
            />
            <AuthTextInput
              onChangeText={(roomName) => setRoom(roomName)}
              placeholder="Room Name"
              placeholderTextColor="#A6AEC1"
            />

            <AuthButton onPress={() => handleSubmit()}>
              <AuthButtonText>Start Session</AuthButtonText>
            </AuthButton>
            <TouchableOpacity onPress={() => closeModal()}>
              <Text style={{ marginTop: 20, color: "#bbe1fa" }}>Cancel</Text>
            </TouchableOpacity>
          </AuthContainer>
        </ImageBackground>
      </Modal>
      <StartSessionBtn onPress={() => openModal()}>
        <AuthButtonText>Start Session</AuthButtonText>
      </StartSessionBtn>
    </View>
  );
};

export default StartSession;
