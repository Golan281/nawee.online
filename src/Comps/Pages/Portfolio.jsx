import React from "react";
import { MediaItem } from "../Elements/MediaItem";
import { NavLink } from "react-router-dom";
import {
  Center,
  Button,
  Heading,
  Divider,
  Container,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
import { ItemBox } from "../Elements/ItemBox";
import korea_week_sm from "../../img/korea_week_sm.jpg";
import gayageum_sm from "../../img/gayageum_sm.jpg";
import ark_people_sm from "../../img/ark_people_sm.jpg";
import korean_translation_sm from "../../img/korean_translation_sm.jpg";
import sun_avoiders_sm from "../../img/sun_avoiders_sm.jpg";
import korean_friday_sm from "../../img/korean_friday_sm.jpg";
import jlem_tour_sm from "../../img/jlem_tour_sm.jpg";
import kim_live_sm from "../../img/kim_live_sm.jpg";
const Portfolio = () => {
  const { currentLang } = useContext(LangContext);
  const { portfolioContent } = currentLang;
  return (
    <Container maxW={"7xl"} p="12">
      <Helmet prioritizeSeoTags>
        <title>
          Nave Klil Hahoresh | Projects | פרויקטים |
          프로젝트
        </title>
        <meta
          name="description"
          content="תרגום עברית קוריאנית, תרגום אנגלית קוריאנית, הפקות אירועים, הוראת דרך, מוסיקה מסורתית קוריאנית, הרצאות, הופעות מוסיקה ועוד."
        />
        <meta itemprop="image" content={gayageum_sm} />
        <meta itemprop="og:image" content={gayageum_sm} />
        <meta itemprop="twitter:image" content={gayageum_sm} />
      </Helmet>
      <Heading as="h2" size="lg" m={4}>
        {portfolioContent.korea_h1}
      </Heading>
      <ItemBox
        content={{
          linkUrl: "https://ksf.co.il/events/korean-week",
          imgUrl: korea_week_sm,
          header: portfolioContent.koreaIL_h2,
        }}
      />
      <ItemBox
        content={{
          linkUrl:
            "https://www.youtube.com/watch?v=gNsDDVRsptA",
          imgUrl: gayageum_sm,
          header: portfolioContent.korea_gy_h2,
        }}
      />
      <Divider marginTop="12" />
      <Heading as="h2" size="lg" m={4} pt={8}>
        {portfolioContent.productions_h1}
      </Heading>
      <ItemBox
        content={{
          linkUrl:
            "https://www.facebook.com/media/set/?set=a.2181724548569511&type=3",
          imgUrl: ark_people_sm,
          header: portfolioContent.productions_h2,
        }}
      />
      <Divider marginTop="12" />
      <Heading as="h2" size="lg" m={4} pt={8}>
        {portfolioContent.translationWork_h1}
      </Heading>
      <ItemBox
        content={{
          linkUrl:
            "https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk",
          imgUrl: korean_translation_sm,
          header: portfolioContent.translationWork_h2,
        }}
      />
      <Divider marginTop="12" />
      <ItemBox
        content={{
          linkUrl:
            "https://www.facebook.com/Thesunavoiders",
          imgUrl: sun_avoiders_sm,
          header: portfolioContent.sunAvoiders_h2,
        }}
      />
      <Divider marginTop="12" />
      <MediaItem>
        <Heading as="h2" size="lg" m={10}>
          {portfolioContent.moreProjects_h1}
        </Heading>
        <div>
          <a
            href="https://www.explorekorea.co.il/%d7%aa%d7%a8%d7%91%d7%95%d7%aa-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%94/%d7%9e%d7%95%d7%a1%d7%99%d7%a7%d7%94-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%a0%d7%99%d7%aa-%d7%94%d7%a7%d7%93%d7%9e%d7%94/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              {portfolioContent.moreProjects_h2_gugak}
            </h2>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=sVy3ZeFXQgI&t=3366s&ab_channel=KoreanStudiesForuminIsrael"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              {portfolioContent.moreProjects_h2_krFri}
            </h2>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?t=3381&v=rPVK1rzBx_Y&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              {portfolioContent.moreProjects_h2_Concerto}
            </h2>
          </a>
        </div>
        <Center m={10}>|
          <img
            src={korean_friday_sm}
            className="portfolio-img"
            alt="korean friday flyer"
          ></img>
        </Center>
        <Center m={10}>
          <img
            src={jlem_tour_sm}
            className="portfolio-img"
            alt="jerusalem tour"
          ></img>
        </Center>
        <Center m={10}>
          <img
            src={kim_live_sm}
            className="portfolio-img"
            alt="live kimchi workshop flyer"
          ></img>
        </Center>
      </MediaItem>
      <NavLink to="/contact">
        <Button bg="#E25E98" color="#19132F">
          {currentLang.contactBtn}
        </Button>
      </NavLink>
    </Container>
  );
};
export default Portfolio;
