import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { Text, View } from "native-base";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-native";

// Components
import SelectedMovie from "./SelectedMovie";

// Stores
import movieStore from "../../stores/MovieStore";

const MovieItem = ({ movies }) => {
  const [selected, setSelected] = useState(movieStore.randomMoviesList[0]);
  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleNominate = (item) => {
    socketStore.nominate(item);
    navigation.navigate("NominatedList");
  };
  return (
    <>
      <Text style={{ color: "#aaa", marginHorizontal: 12, fontWeight: "bold" }}>
        Movies{" "}
      </Text>
      <View>
        <FlatList
          horizontal
          keyExtractor={(item) => item.id.toString()}
          data={movieStore.randomMoviesList}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity onPress={() => handleSelect(item)}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 12,
                      margin: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      <SelectedMovie selected={selected} handleNominate={handleNominate} />
    </>
  );
};
export default observer(MovieItem);
