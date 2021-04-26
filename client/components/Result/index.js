import React from "react";
import { observer } from "mobx-react";

// Styles
import { Spinner } from "native-base";

import {
  ResultBackground,
  MainStyle,
  TextContainer,
  TextBackground,
  TitleText,
  DetailText,
} from "./styles";

// Stores
import socketStore from "../../stores/SocketStore";

const Result = ({ navigation }) => {
  const result = socketStore.result;
  if (!result) return <Spinner />;
  return (
    <ResultBackground
      source={{
        uri: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      }}
    >
      <MainStyle>
        <TextContainer>
          <TextBackground>
            <TitleText>{result.title}</TitleText>
            <DetailText>{result.overview}</DetailText>
          </TextBackground>
        </TextContainer>
      </MainStyle>
    </ResultBackground>
  );
};
export default observer(Result);
