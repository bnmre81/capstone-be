import styled from "styled-components/native";

export const BoxItemContainer = styled.View`
  width: 50%;
  height: 50%;
  padding: 5px;
`;

export const BoxItemImage = styled.Image`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BoxItemText = styled.Text`
  color: black;
  font-weight: bold;
`;

export const BoxListContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 85%;
  padding: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;
