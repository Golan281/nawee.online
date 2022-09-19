import {
  Grid,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import logo from "../../img/logo_pink.png";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
export const GlobalNav = () => {
  const { currentLang } = useContext(LangContext);
  return (
    <div className="global-nav">
        <NavLink to="/home">
          <img src={logo} className="App-logo" alt="logo" width="100%" height=
          "100%"/>
        </NavLink>
      <Grid templateColumns="repeat(1, 2fr)" gap={2} >
        <Grid templateRows="repeat(1, 1fr)" >
          <Center>
            <Heading as="h1" size="xl" fontFamily={'Suez One'}>
              {currentLang.logo}
            </Heading>
          </Center>
        </Grid>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} pt={4}>
        <NavLink to="/projects">
          <Button bg="#E25E98" color="#19132F">
            {currentLang.portfolioBtn}
          </Button>
        </NavLink>
        <NavLink to="/about">
          <Button bg="#E25E98" color="#19132F">
            {currentLang.aboutBtn}
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button bg="#E25E98" color="#19132F">
            {currentLang.contactBtn}
          </Button>
        </NavLink>
      </Grid>
    </div>
  );
};
