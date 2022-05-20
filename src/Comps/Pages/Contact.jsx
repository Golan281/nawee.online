import { Box, Grid } from "@chakra-ui/react";
import {
  MdLocalPhone,
  MdEmail,
  MdFacebook,
} from "react-icons/md";
import { CgInstagram } from "react-icons/cg";
import {
  RiKakaoTalkFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { IconContext } from "react-icons/lib";

//use dohalnawee.com sitemap file
export const Contact = () => {
  return (
    <IconContext.Provider value={{ style: { display: "inline" }}}>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" m={20} gap={4}>
          <a
            href="https://www.instagram.com/l.nawee/"
            target="_blank"
            rel="noreferrer"
          >
            <CgInstagram size="2rem" />
          </a>
          <a
            href="https://www.facebook.com/naveklilhahoresh"
            target="_blank"
            rel="noreferrer"
          >
            <MdFacebook size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/nave-klil-hahoresh-24724a18b/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxFill size="2rem" />
          </a>
            <a href="tel:+972522796119">
              <MdLocalPhone size="2rem"/>
              <p>+972 52 2796 119</p>
            </a>
          <a href="#" target="_blank" rel="noreferrer">
            <RiKakaoTalkFill size="2rem" /> <p>nomok1</p>
          </a>
          <a href="mailto:contact@Navekh.kim@gmail.com">
            <MdEmail size="2rem" /> <p>Navekh.kim@gmail.com</p>
          </a>
        </Grid>
      </Box>
    </IconContext.Provider>
  );
};
