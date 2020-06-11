import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(47, 52, 55);
  padding: 0 30px ${Platform.OS === "android" ? 40 : 20}px;
`;

export const Capa = styled.View`
  height: 90%;
  width: 100%;
  flex-direction: column;
  background-color: #454d4b;
  border-radius: 5px;
`;

export const TitleApp = styled.Text`
  font-size: 20px;
  color: #ddd;
  font-family: "BalsamiqSans_400Regular";
`;

export const TitleInfo = styled.Text`
  font-size: 16px;
  margin: 10px 4px 10px;
  align-self: center;
  text-align: center;
  color: #fff;
  width: 400px;
  font-family: "Roboto_400Regular";
`;

export const DescriptionInfo = styled.Text`
  font-size: 14px;
  margin: 1px 15px 1px;
  color: #ddd;
  font-family: "Roboto_300Light_Italic";
`;
export const HeaderView = styled.TouchableOpacity`
  flex-direction: row;
  margin: 25px 0px 24px;
  width: 330px;
`;
export const ClickOpen = styled.TouchableOpacity``;

export const IconsView = styled.View`
  flex-direction: row;
  margin: 1px 15px 1px;
  background-color: rgb(47, 52, 55);
  border-radius: 5px;
  padding: 3px;
`;

export const IconsText = styled.Text`
  font-size: 14px;
  margin: 1px 10px 1px;
  color: #ddd;
  font-family: "Roboto_300Light_Italic";
`;
