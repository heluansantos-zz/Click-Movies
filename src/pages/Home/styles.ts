import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  background-color: rgb(47, 52, 55);
  padding: 0 10px ${Platform.OS === "android" ? 10 : 20}px;
  height: 100%;
`;
export const Capa = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #454d4b;
  margin: 1px;
  margin-top: 40px;
  margin-bottom: 0px;
  height: 145px;
  border-radius: 6px;
`;
export const CapaScrollView = styled.ScrollView``;

export const CapaImage = styled.Image`
  width: 110px;
  height: 100%;
  border-radius: 5px;
  bottom: 16px;
  left: 12px;
`;
export const TitleApp = styled.Text`
  font-size: 36px;
  margin: 23px 0px 18px;
  color: orange;
  align-self: center;
  font-family: "Audiowide_400Regular";
`;
export const TitleSubApp = styled.Text`
  font-size: 26px;
  margin: 50px 0px 18px;
  color: #ddd;
  align-self: center;
  font-family: "Audiowide_400Regular";
  position: absolute;
`;
export const TitleError = styled.Text`
  font-size: 20px;
  margin: 64px 5px 24px;
  color: orange;
  align-self: center;
`;

export const TitleMovie = styled.Text`
  font-size: 18px;
  margin: 4px 1px 4px;
  color: #fff;
  width: 210px;
  font-family: "BalsamiqSans_400Regular";
  padding: 4px;
  left: 20px;
  top: 10px;
  padding: ${Platform.OS === "web" ? 25 : 0}px;
`;

export const DescriptionMovie = styled.Text`
  font-size: 12px;
  margin: 5px 13px 5px;
  color: orange;
  font-family: "Roboto_300Light_Italic";
`;

export const ViewInput = styled.View`
  margin-bottom: 10px;
  background-color: rgb(47, 52, 55);
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const ViewInputText = styled.TextInput`
  width: 88%;
  padding: 13px;
  padding-left: 10px;
  font-size: 17px;
  color: #ddd;
`;

export const ButtonInput = styled.TouchableOpacity`
  margin: 5px;
`;

export const ButtonCreditos = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 3px;
  top: 4px;
`;
export const ViewIconInfo = styled.View`
  top: 3px;
`;
export const ButtonTextCreditos = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #ddd;
  font-family: "BalsamiqSans_400Regular";
`;
