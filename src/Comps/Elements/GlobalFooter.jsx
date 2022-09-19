import {
  Heading,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
export const GlobalFooter = () => {
  const { currentLang } = useContext(LangContext);
  const { callToAction } = currentLang;
  return (
    <footer>
      <Box pt={2}>
        <Heading
          as="h2"
          size="lg"
          m={4}
          fontFamily={'Suez One'}
          className={
            currentLang.lang !== "ENG" ? "rtl" : ""
          }
        >
          {callToAction.header}
        </Heading>
        <Center>
          <Box
            display="grid"
            gridGap={2}
            gridAutoFlow={{
              base: "row dense",
              sm: "column",
            }}
          >
            {callToAction.tagsArray.map((ctaTag)=>
            <Button bg="#E25E98" color="#19132F" key={ctaTag.cta}>
              <a
                href={ctaTag.href}
                target="_blank"
                rel="noreferrer"
              >
                {ctaTag.cta}
              </a>
            </Button>
            )}
          </Box>
        </Center>
        <br></br>
        <Center p={2}>
          <Box fontFamily={"Helvetica"}>
            <p>
              &#169; All rights reserved to Nave Klil
              hahoresh 나베 클릴 2022
              <br></br>
              &#169; All photographs created and owned By{" "}
              <a
                href="https://www.mooligoldberg.com/"
                target="_blank"
                rel="noreferrer"
              >
                Mooli Goldberg
              </a>{" "}
              2022, unless stated otherwise.
              <br></br>
              Developed with &#128156; by{" "}
              <a
                href="https://golandev.tech/"
                target="_blank"
                rel="noreferrer"
              >
                Golan Blumenkrants
              </a>{" "}
              | Powered by{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </p>
          </Box>
        </Center>
      </Box>
    </footer>
  );
};
