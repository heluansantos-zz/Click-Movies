import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import {
  Container,
  TitleApp,
  Capa,
  TitleInfo,
  DescriptionInfo,
  HeaderView,
  IconsView,
  IconsText,
  ClickOpen,
} from "./styles";

const Info = () => {
  const linkedinURL = "https://www.linkedin.com/in/heluan-santos-59983817b/";
  const githubURL = "https://github.com/heluansantos";
  const omdbURL = "http://www.omdbapi.com/";
  const codigoURL = "https://github.com/heluansantos/Click-Movies";

  const navigation = useNavigation();
  function clickMoviesBack() {
    navigation.goBack();
  }
  function openLinkedin() {
    Linking.canOpenURL(linkedinURL).then((supported) => {
      if (supported) {
        Linking.openURL(linkedinURL);
      } else {
        console.log("Erro na URL: " + linkedinURL);
      }
    });
  }
  function openGithub() {
    Linking.canOpenURL(githubURL).then((supported) => {
      if (supported) {
        Linking.openURL(githubURL);
      } else {
        console.log("Erro na URL: " + githubURL);
      }
    });
  }
  function openOmdb() {
    Linking.canOpenURL(omdbURL).then((supported) => {
      if (supported) {
        Linking.openURL(omdbURL);
      } else {
        console.log("Erro na URL: " + omdbURL);
      }
    });
  }
  function openCodigo() {
    Linking.canOpenURL(codigoURL).then((supported) => {
      if (supported) {
        Linking.openURL(codigoURL);
      } else {
        console.log("Erro na URL: " + codigoURL);
      }
    });
  }

  return (
    <Container>
      <HeaderView onPress={clickMoviesBack}>
        <Ionicons
          name="ios-arrow-back"
          size={35}
          style={{ marginRight: 50, bottom: 5 }}
          color="#ddd"
        />
        <TitleApp> Info Click Movies App </TitleApp>
      </HeaderView>
      <Capa>
        <TitleInfo>Resumo</TitleInfo>
        <DescriptionInfo>
          App desenvolvido para os amantes de filmes que buscam ficar sempre
          atualizados sobre lançamentos atuais ou passados por meio da API OMDb
          que é um serviço da Web RESTful para obter informações sobre filmes,
          todo o conteúdo e imagens no site são contribuídos e mantidos por
          usuários do próprio.
        </DescriptionInfo>
        <TitleInfo>Fonte</TitleInfo>
        <ClickOpen onPress={openOmdb}>
          <IconsView>
            <FontAwesome
              name="imdb"
              size={18}
              style={{ marginRight: 5, marginLeft: 5, top: 2 }}
              color="#ddd"
            />
            <IconsText>www.omdbapi.com </IconsText>
          </IconsView>
        </ClickOpen>
        <TitleInfo>Desenvolvedor</TitleInfo>
        <ClickOpen onPress={openLinkedin}>
          <IconsView>
            <FontAwesome
              name="linkedin-square"
              size={18}
              style={{ marginRight: 5, marginLeft: 5, top: 2 }}
              color="#ddd"
            />
            <IconsText>Heluan Santos</IconsText>
          </IconsView>
        </ClickOpen>
        <ClickOpen onPress={openGithub}>
          <IconsView>
            <FontAwesome
              name="github"
              size={18}
              style={{ marginRight: 5, marginLeft: 5, top: 2 }}
              color="#ddd"
            />
            <IconsText>heluansantos.github.io</IconsText>
          </IconsView>
        </ClickOpen>
        <TitleInfo>Código aberto</TitleInfo>
        <ClickOpen onPress={openCodigo}>
          <IconsView>
            <FontAwesome
              name="github"
              size={18}
              style={{ marginRight: 5, marginLeft: 5, top: 2 }}
              color="#ddd"
            />
            <IconsText>github.com/heluansantos/Click-Movies</IconsText>
          </IconsView>
        </ClickOpen>
      </Capa>
    </Container>
  );
};

export default Info;
