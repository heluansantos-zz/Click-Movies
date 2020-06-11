import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import {
  Container,
  TitleApp,
  Capa,
  ViewInput,
  ButtonInput,
  ViewInputText,
  TitleMovie,
  DescriptionMovie,
  ButtonCreditos,
  ButtonTextCreditos,
  TitleError,
  CapaScrollView,
  CapaImage,
} from "./styles";

interface Post {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const Home = () => {
  const [searchText, setSearchText] = useState("man");
  const [movie, setMovie] = useState<Post[]>([]);
  const navigation = useNavigation();
  const [value, onChangeText] = React.useState("");

  useEffect(() => {
    if (searchText === " ") {
      return;
    }
    axios
      .get(`https://www.omdbapi.com/?s=${searchText}&apikey=4a3b711b`)
      .then(({ data }) => {
        setMovie(data.Search);
      });
  }, [searchText]);

  function movieDetail(imdbID: string) {
    navigation.navigate("Detail", {
      imdbID: imdbID,
    });
  }

  function InfoClickMoviesApp() {
    navigation.navigate("Info");
  }

  function submitSearch() {
    if (value !== "") {
      setSearchText(value);
    } else {
      setSearchText("america");
    }
  }

  return (
    <Container>
      <TitleApp>C l i c k M o v i e s</TitleApp>
      <ViewInput>
        <ViewInputText
          maxLength={30}
          placeholder="Digite o nome do filme"
          autoCorrect={false}
          placeholderTextColor="#454d4b"
          underlineColorAndroid="#454d4b"
          onChangeText={(text) => onChangeText(text)}
          onSubmitEditing={submitSearch}
          onKeyPress={submitSearch}
          value={value}
        />
        <ButtonInput onPress={submitSearch}>
          <FontAwesome name="search" size={30} color="#454d4b" />
        </ButtonInput>
      </ViewInput>
      <CapaScrollView>
        {movie ? (
          movie.map((filme) => (
            <Capa key={filme.imdbID} onPress={() => movieDetail(filme.imdbID)}>
              <CapaImage source={{ uri: filme.Poster }} />
              <TitleMovie>{filme.Title}</TitleMovie>
              <DescriptionMovie>{filme.Year}</DescriptionMovie>
            </Capa>
          ))
        ) : (
          <TitleError>Tente outra palavra chave!</TitleError>
        )}
      </CapaScrollView>
      <ButtonCreditos onPress={InfoClickMoviesApp}>
        <ButtonTextCreditos>Click Movies App Info</ButtonTextCreditos>
      </ButtonCreditos>
    </Container>
  );
};

export default Home;
