import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import {
  Container,
  TitleDescriptionMovie,
  DescriptionMovieRating,
  Capa,
  TitleMovie,
  DescriptionMovie,
  HeaderView,
  TitleError,
  CapaInfo,
  ImageView,
  ButtonCreditos,
  ButtonTextCreditos,
} from "./styles";

interface Parametros {
  Actors: string;
  Director: string;
  Genre: string;
  Language: string;
  Plot: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Title: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
}

interface Params {
  imdbID: string;
}

const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const routeMovieParams = route.params as Params;
  const [moviex, setMoviex] = useState<Parametros>();

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?i=${routeMovieParams.imdbID}&apikey=4a3b711b`
      )
      .then(({ data }) => {
        setMoviex(data);
      });
  }, [routeMovieParams.imdbID]);

  function clickMoviesBack() {
    navigation.goBack();
  }

  function InfoClickMoviesApp() {
    navigation.navigate("Info");
  }

  return (
    <Container>
      {moviex ? (
        <Capa>
          <ImageView source={{ uri: moviex.Poster }} />
          <HeaderView onPress={clickMoviesBack}>
            <Ionicons
              name="ios-arrow-back"
              size={35}
              color="#fff"
              style={{ left: 8 }}
            />
          </HeaderView>

          <CapaInfo>
            <TitleMovie>{moviex.Title}</TitleMovie>
            <DescriptionMovie> {moviex.Plot}</DescriptionMovie>
            <TitleDescriptionMovie>Data de lançamento:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Released}</DescriptionMovie>
            <TitleDescriptionMovie>Linguagem:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Language}</DescriptionMovie>
            <TitleDescriptionMovie>Gênero:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Genre}</DescriptionMovie>
            <TitleDescriptionMovie>Direção:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Director}</DescriptionMovie>
            <TitleDescriptionMovie>Elenco:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Actors}</DescriptionMovie>
            <TitleDescriptionMovie>Duraçao:</TitleDescriptionMovie>
            <DescriptionMovie> {moviex.Runtime}</DescriptionMovie>
            <TitleDescriptionMovie>Avaliação IMDB:</TitleDescriptionMovie>
            <DescriptionMovieRating>
              {moviex.imdbRating} / 10
            </DescriptionMovieRating>
          </CapaInfo>
          <ButtonCreditos onPress={InfoClickMoviesApp}>
            <ButtonTextCreditos>Click Movies App Info</ButtonTextCreditos>
          </ButtonCreditos>
        </Capa>
      ) : (
        <TitleError>Carregando . . .</TitleError>
      )}
    </Container>
  );
};

export default Detail;
