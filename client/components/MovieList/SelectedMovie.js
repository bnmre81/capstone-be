import React from "react";
import { useNavigation } from "@react-navigation/native";

// Styles
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { Image } from "react-native";

// Stores
import socketStore from "../../stores/SocketStore";

const SelectedMovie = ({ selected }) => {
  const navigation = useNavigation();

  const handleNominate = (item) => {
    socketStore.nominate(item);
    navigation.navigate("NominatedList");
  };
  return (
    <View>
      <View>
        <ScrollView
          style={{
            // backgroundColor: "#000",
            // opacity: 0.88,
            // position: "absolute",
            width: 350,
            height: 500,
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginHorizontal: 16,
            marginTop: 10,
            // top: 470,
            // right: 40,
          }}
        >
          <View
            style={{
              backgroundColor: "#000",
              opacity: 0.88,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${selected.poster_path}`,
              }}
              style={{
                width: 350,
                height: 400,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                shadowOffset: { width: 10, height: 10 },
                shadowColor: "white",
                shadowOpacity: 1.0,
              }}
            />
            <Text
              style={{
                color: "#fff",
                marginHorizontal: 10,
                marginTop: 10,
              }}
            >
              {selected.title}
            </Text>
            <Text style={{ color: "#fff", marginHorizontal: 10, marginTop: 7 }}>
              {selected.overview}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => handleNominate(selected)}
          style={{
            backgroundColor: "#ea0",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            width: 350,
            height: 50,
            marginHorizontal: 16,
            marginTop: 1,
          }}
        >
          <Text
            style={{
              color: "#000",
              marginLeft: 118,
              marginTop: 5,
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Nominate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectedMovie;
