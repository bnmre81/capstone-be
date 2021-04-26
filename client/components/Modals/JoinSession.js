import React, { useState } from "react";
import socketStore from "../../stores/SocketStore";
// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  JoinSessionBtn,
} from "./styles";
import { Text } from "native-base";
import { TouchableOpacity, View, Modal, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JoinSession = () => {
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
    navigation.replace("Waiting");
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
            <AuthTitle>Join</AuthTitle>
            <AuthTextInput
              onChangeText={(username) => setUser(username)}
              placeholder="User"
              autoCapitalize="none"
              placeholderTextColor="#fff"
            />
            <AuthTextInput
              onChangeText={(roomName) => setRoom(roomName)}
              placeholder="Room Name"
              autoCapitalize="none"
              placeholderTextColor="#fff"
            />
            <AuthButton onPress={handleSubmit}>
              <AuthButtonText>Join Session</AuthButtonText>
            </AuthButton>
            <TouchableOpacity onPress={closeModal}>
              <Text style={{ marginTop: 20, color: "#fff" }}>Cancel</Text>
            </TouchableOpacity>
          </AuthContainer>
        </ImageBackground>
      </Modal>
      <JoinSessionBtn onPress={openModal}>
        <AuthButtonText>Join Session</AuthButtonText>
      </JoinSessionBtn>
    </View>
  );
};
export default JoinSession;
