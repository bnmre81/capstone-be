import styled from "styled-components/native";

export const StartNominationButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.accent};
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-top: 350px;
`;

export const StartNominationContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

export const ConnectedText = styled.Text`
  text-align: center;
  font-weight: bold;
  margin-top: 0px;
  color: #fff;
  font-size: 20px;
`;
