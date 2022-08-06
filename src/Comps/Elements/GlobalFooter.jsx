import { Heading, Button, Box } from "@chakra-ui/react";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
export const GlobalFooter = () => {
  const { currentLang } = useContext(LangContext);
  const { callToAction } = currentLang;
  console.log(callToAction);
  return (
    <footer>
      <Box p={2}>
        <Heading
          as="h2"
          size="lg"
          m={10}
          className={
            currentLang.lang !== "ENG" ? "rtl" : ""
          }
        >
          {callToAction.header}
        </Heading>
        <Box
          //   maxWidth="10rem"
          display="grid"
          gridGap={2}
          gridAutoFlow={{ base: "row dense", sm: "column" }}
        >
          <Button bg="#E25E98" color="#19132F">
            {callToAction.production}
          </Button>
          <Button bg="#E25E98" color="#19132F">
            {callToAction.travel}
          </Button>
          <Button bg="#E25E98" color="#19132F">
            {callToAction.music}
          </Button>
          <Button bg="#E25E98" color="#19132F">
            {callToAction.translation}
          </Button>
          <Button bg="#E25E98" color="#19132F">
            {callToAction.other}
          </Button>
        </Box>
          <br></br>
          <Box
          fontFamily={'Helvetica'}
          >

          <p>
          &#169; All rights reserved to Nave Klil hahoresh 나베 클릴 2022
          <br></br>
          &#169; All photographs created and owned By <a href="https://www.mooligoldberg.com/"  target="_blank" rel="noreferrer">Mooli Goldberg</a> 2022, unless stated otherwise.
          <br></br>
         Developed with &#128156; by <a href="https://golandev.tech/"  target="_blank" rel="noreferrer">Golan Blumenkrants</a> | Powered by <a href="https://reactjs.org/"  target="_blank" rel="noreferrer">React</a>

          </p>
          </Box>
      </Box>
    </footer>
  );
};
