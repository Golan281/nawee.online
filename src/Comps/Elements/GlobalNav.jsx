import {
  Grid,
  GridItem,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import logo from "../../img/logo_pink.png";
import { LangSwitcher } from "./LangSwitcher";
import { NavLink } from "react-router-dom";

export const GlobalNav = () => {
  // const [] lang state
  return (
    <>
      <Grid templateColumns="repeat(3, 260px)" gap={4}>
        <NavLink to="/home">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        {/* <Heading>Nave Klil Hahoresh</Heading> */}
        {/* <Heading>נָאוֶה כליל החורש</Heading>
          <Heading>나베 클릴</Heading> */}
        <Grid templateRows="repeat(1, 1fr)">
          <Center>
            {/* <div className="center"> */}
            <h1>Nave Klil Hahoresh</h1>
            {/* </div> */}
          </Center>
        </Grid>
        <Grid>
          <LangSwitcher />
        </Grid>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <NavLink to="/nawee">
          <Button bg="#E25E98" color="#19132F">
            מה אני
          </Button>
        </NavLink>
        <NavLink to="/contact">
          <Button bg="#E25E98" color="#19132F">
            צרו קשר
          </Button>
        </NavLink>
      </Grid>
    </>
  );
};
