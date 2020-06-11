import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: rgb(47, 52, 55);
  padding: 0px;
  height: 100%;
`;
export const Capa = styled.ScrollView`
  background-color: rgb(47, 52, 55);
`;

export const ImageView = styled.Image`
  width: 100%;
  height: 600px;
`;
export const CapaInfo = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  background-color: #454d4b;
  margin: 5%;
  border-radius: 6px;
  bottom: 150px;
`;
export const TitleMovie = styled.Text`
  font-size: 20px;
  margin: 10px 15px 10px;
  align-self: center;
  color: #fff;
  font-family: "BalsamiqSans_400Regular";
`;
export const DescriptionMovie = styled.Text`
  font-size: 14px;
  margin: 2px 10px 2px;
  color: #d1d1d1;
  padding: 5px;
  font-family: "Roboto_300Light_Italic";
`;
export const DescriptionMovieRating = styled.Text`
  font-size: 25px;
  margin: 2px 10px 2px;
  color: #d2691e;
  padding: 5px;
  font-family: "BalsamiqSans_400Regular";
`;
export const TitleDescriptionMovie = styled.Text`
  font-size: 14px;
  margin: 2px 10px 2px;
  color: #fff;
  padding: 5px;
  font-family: "Roboto_400Regular";
`;

export const HeaderView = styled.TouchableOpacity`
  margin: 0px 10px 0px;
  position: absolute;
  background-color: rgb(47, 52, 55);
  padding: 2px;
  border-radius: 20px;
  opacity: 0.6;
  width: 40px;
  margin-top: 10px;
`;

export const TitleError = styled.Text`
  font-size: 20px;
  margin: 64px 5px 24px;
  color: #ddd;
`;
export const ButtonCreditos = styled.TouchableOpacity`
  background-color: #454d4b;
`;
export const ButtonTextCreditos = styled.Text`
  font-size: 12px;
  text-align: center;
  padding: 3px;
  color: #d5d5d5;
  font-family: "BalsamiqSans_400Regular";
`;
