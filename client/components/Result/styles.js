import styled from "styled-components/native";

export const ResultContainer = styled.View`
  flex: 1;
  background-color: #000;
`;

export const ResultBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const MainStyle = styled.View`
  padding: 0 32px;
  margin: 525px 0 32px 0;
`;

export const TextContainer = styled.View`
  background: rgba(0, 0, 0, 0);
`;

export const TextBackground = styled.View`
  margin: 1px;
  background-color: rgba(0, 0, 0, 0.88);
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 5px 10px 10px 10px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: 600;
`;

export const DetailText = styled.Text`
  color: #fff;
`;

export const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;
