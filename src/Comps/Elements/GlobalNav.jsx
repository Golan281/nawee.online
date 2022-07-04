import {
  Grid,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import logo from "../../img/logo_pink.png";
// import { LangSwitcher } from "./LangSwitcher";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";

export const GlobalNav = () => {
  const { currentLang } = useContext(LangContext);
  return (
    <>
      {/* <SimpleGrid columns={{ base: 3, md: 3, sm: 1 }} minChildWidth="200px" spacing="40px"> */}
        <NavLink to="/home">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
      <Grid templateColumns="repeat(1, 22rem)" gap={2}>
        {/* <Grid
          templateColumns=
            "repeat(3, 260px)"
          gap={4}
        > */}

        <Grid templateRows="repeat(1, 1fr)">
          <Center>
            <Heading as="h1" size="xl">
              {currentLang.logo}
            </Heading>
          </Center>
        </Grid>
        <Grid>{/* <LangSwitcher /> */}</Grid>
      </Grid>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <NavLink to="/nawee">
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
        <>
          {/* <LangSwitcher /> */}
        </>
      {/* </SimpleGrid> */}
    </>
  );
};
