import { Heading, Button, Box } from "@chakra-ui/react";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
export const GlobalFooter = () => {
  const { currentLang } = useContext(LangContext);
  const { callToAction } = currentLang;
  return (
    <footer>
      <Box>
        <Heading
          as="h2"
          size="lg"
          m={4}
          className={
            currentLang.lang !== "ENG" ? "rtl" : ""
          }
        >
          {callToAction.header}
        </Heading>
        <Box
          display="grid"
          gridGap={2}
          gridAutoFlow={{ base: "row dense", sm: "column" }}
        >
          {/* can map the buttons or set them as a theme (or both) - need to make CTA an arr*/}
          <Button bg="#E25E98" color="#19132F">
          <a href="https://wa.link/p13krt"  target="_blank" rel="noreferrer">
            {callToAction.production}
          </a>
          </Button>
          <Button bg="#E25E98" color="#19132F">
          <a href="https://wa.link/tg61hr"  target="_blank" rel="noreferrer">
            {callToAction.travel}
          </a>
          </Button>
          <Button bg="#E25E98" color="#19132F">
          <a href="https://wa.link/ciazm4"  target="_blank" rel="noreferrer">
            {callToAction.music}
          </a>
          </Button>
          <Button bg="#E25E98" color="#19132F">
          <a href="https://wa.link/71jtgv"  target="_blank" rel="noreferrer">
            {callToAction.translation}
          </a>
          </Button>
          <Button bg="#E25E98" color="#19132F">
          <a href="https://wa.link/xpnyw4"  target="_blank" rel="noreferrer">
            {callToAction.other}
          </a>
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
