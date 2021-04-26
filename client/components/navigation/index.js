import React from "react";

// Components
import MovieList from "../MovieList";
import NominatedList from "../NominatedList";
import Result from "../Result";
import Home from "../Home";
import Waiting from "../Waiting/index";
import StartNomination from "../StartNomination";
import WaitingResult from "../WaitingResult";

// Stores
import socketStore from "../../stores/SocketStore";

// Navigators
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { observer } from "mobx-react";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{ title: socketStore.room, headerShown: false }}
        />
        <Stack.Screen
          name="NominatedList"
          component={NominatedList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Waiting"
          component={Waiting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StartNomination"
          component={StartNomination}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WaitingResult"
          component={WaitingResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(MainStack);
