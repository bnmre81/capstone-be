import styled from "styled-components/native";

export const CarouselContainerView = styled.View`
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
export const CaruselImage = styled.Image`
  width: 270px;
  height: 500px;
  border-radius: 10px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CaruselText = styled.Text`
  color: ${(props) => props.theme.accent};
  text-align: center;
  font-weight: bold;
`;

export const IconContainer = styled.View`
  margin: 10px 0;
  width: 270px;
  height: 30px;
  flex-direction: row;
`;

export const StartNominationButton = styled.TouchableOpacity`
  background-color: #7d8ca3;
  height: 70px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-top: 350px;
`;

export const ResultBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.accent};
  height: 70px;
  width: 300px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

// background-color: ${(props) => props.theme.primary};
