import { MediaItem } from "../Elements/MediaItem";
import { Grid, Heading, Center, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import korea_week_sm from "../../img/korea_week_sm.jpg";
import gayageum_sm from "../../img/gayageum_sm.jpg";
import ark_people_sm from "../../img/ark_people_sm.jpg";
import korean_translation_sm from "../../img/korean_translation_sm.jpg";
import sun_avoiders_sm from "../../img/sun_avoiders_sm.jpg";
import korean_friday_sm from "../../img/korean_friday_sm.jpg";
import jlem_tour_sm from "../../img/jlem_tour_sm.jpg";
import kim_live_sm from "../../img/kim_live_sm.jpg";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";

export const Portfolio = () => {
  const { currentLang } = useContext(LangContext);
  const { portfolioContent } = currentLang;
  return (
    <Grid templateColumns="repeat(1, 1fr)" m={20} gap={10} width="80%" alignItems="center">
      <MediaItem>
        <Heading as="h2" size="lg" m={10}>
          {portfolioContent.korea_h1}
        </Heading>
        <Center>
          <a
            href="https://ksf.co.il/events/korean-week"
            target="_blank"
            rel="noreferrer"
          >
              {/* <Image
    boxSize='80%'
    objectFit='cover'
    src={korea_week_sm}
    // alt='Dan Abramov'
  /> */}
            <img
              className="portfolio-img"
              src={korea_week_sm}
              alt="korea week"
            ></img>
          </a>
        </Center>
        <a
          href="https://ksf.co.il/events/korean-week"
          target="_blank"
          rel="noreferrer"
        >
          <h2>{portfolioContent.koreaIL_h2}</h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Center>
          <a
            href="https://www.youtube.com/watch?v=gNsDDVRsptA"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio-img"
              src={gayageum_sm}
              alt="gatageum"
            ></img>
          </a>
        </Center>
        <a
          href="https://www.youtube.com/watch?v=gNsDDVRsptA"
          target="_blank"
          rel="noreferrer"
        >
          <h2>{portfolioContent.korea_gy_h2}</h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Heading as="h2" size="lg" m={10}>
        {portfolioContent.productions_h1}
        </Heading>
        <Center>
          <a
            href="https://www.facebook.com/media/set/?set=a.2181724548569511&type=3"
            target="_blank"
            rel="noreferrer"
            >
            <img
              className="portfolio-img"
              src={ark_people_sm}
              alt="out of the box festival poster"
              ></img>
          </a>
        </Center>
        <a
          href="https://www.facebook.com/media/set/?set=a.2181724548569511&type=3"
          target="_blank"
          rel="noreferrer"
          >
          <h2>
          {portfolioContent.productions_h2}
          </h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Heading as="h2" size="lg" m={10}>
          {portfolioContent.translationWork_h1}</Heading>
        <Center>
          <a
            href="https://www.google.com/url?q=https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio-img"
              src={korean_translation_sm}
              alt="12 news south korea documentary screenshot"
            ></img>
          </a>
        </Center>
        <a
          href="https://www.google.com/url?q=https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk"
          target="_blank"
          rel="noreferrer"
        >
          <h2>
          {portfolioContent.translationWork_h2}
          </h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Center>
          <a
            href="https://www.facebook.com/Thesunavoiders"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio-img"
              src={sun_avoiders_sm}
              alt="the sun avoiders"
            ></img>
          </a>
        </Center>
        <a
          href="https://www.facebook.com/Thesunavoiders"
          target="_blank"
          rel="noreferrer"
        >
          <h2>{portfolioContent.sunAvoiders_h2}</h2>
        </a>
      </MediaItem>
      <MediaItem>
      <Heading as="h2" size="lg" m={10}>{portfolioContent.moreProjects_h1}</Heading>
        <div>
          <a
            href="https://www.explorekorea.co.il/%d7%aa%d7%a8%d7%91%d7%95%d7%aa-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%94/%d7%9e%d7%95%d7%a1%d7%99%d7%a7%d7%94-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%a0%d7%99%d7%aa-%d7%94%d7%a7%d7%93%d7%9e%d7%94/"
            target="_blank"
            rel="noreferrer"
          >
<h2>{portfolioContent.moreProjects_h2_gugak}</h2>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=sVy3ZeFXQgI&t=3366s&ab_channel=KoreanStudiesForuminIsrael"
            target="_blank"
            rel="noreferrer"
            >
            <h2>{portfolioContent.moreProjects_h2_krFri}</h2>
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?t=3381&v=rPVK1rzBx_Y&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
            >
            <h2>{portfolioContent.moreProjects_h2_Concerto}</h2>
          </a>
        </div>
        <Center m={10}>
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
    </Grid>
  );
};
