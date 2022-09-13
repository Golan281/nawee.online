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
import { Helmet } from "react-helmet-async";
import nawee__contact from "../../img/nawee__contact.jpg";
import React from "react";

export const Contact = () => {
  return (
    <React.Fragment>
      <Helmet prioritizeSeoTags>
        <title>
          Nave Klil Hahoresh | Contact | צרו קשר | 연락
        </title>
        <meta
          name="description"
          content="ניתן ליצור איתי קשר בטלפון, בווצאפ, במייל, בפייסבוק או באפליקציית המסרים הקוריאנית קקאו."
        />
        <meta itemprop="image" content={nawee__contact} />
        <meta
          itemprop="og:image"
          content={nawee__contact}
        />
        <meta
          itemprop="twitter:image"
          content={nawee__contact}
        />
      </Helmet>
      <IconContext.Provider
        value={{ style: { display: "inline" } }}
      >
        <Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            m={10}
            gap={4}
          >
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
              <MdLocalPhone size="2rem" />
              <p className="contact-text">
                +972 52 2796 119
              </p>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kakao.talk&hl=en&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <RiKakaoTalkFill size="2rem" />{" "}
              <p className="contact-text">nomok1</p>
            </a>
            <a href="mailto:contact@Navekh.kim@gmail.com">
              <MdEmail size="2rem" />{" "}
              <p className="contact-text">
                Navekh.kim@gmail.com
              </p>
            </a>
          </Grid>
        </Box>
      </IconContext.Provider>
    </React.Fragment>
  );
};
