import { MediaItem } from "../Elements/MediaItem";
import {
  Heading,
  Center,
  Button,
  Divider,
  Container,
} from "@chakra-ui/react";

import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ItemBox } from "../Elements/ItemBox";

import a_main_prof_mooli from "../../img/a_main_prof_mooli.jpg";
import b_nawee_produces from "../../img/b_nawee_produces.jpg";
import c_gayageum_mooli from "../../img/c_gayageum_mooli.jpg";
import d_rosetta_stone from "../../img/d_rosetta_stone.jpg";
import e_nawee_tour_guide from "../../img/e_nawee_tour_guide.jpg";
import f_nawee_working from "../../img/f_nawee_working.jpg";
export const About = () => {
  const { currentLang } = useContext(LangContext);
  const { aboutContent } = currentLang;
  return (
    <Container maxW={"7xl"} p="12">
      <Helmet prioritizeSeoTags>
        <title>
          Nave Klil Hahoresh | Projects | פרויקטים |
          프로젝트
        </title>
        <meta
          name="description"
          content="באיזה כובע ניפגש הפעם? עמוד הבית של נָאוֶה כליל החורש (나위): מוסיקאית ומוסיקולוגית, מורת דרך, מתרגמת, מומחית לתרבות ומוסיקה קוריאנית מסורתית, מפיקת אירועים ועוד קצת.. "
        />
      </Helmet>
    {/* //child Container here?
    //child container #2 */}
    <ItemBox
      content={{
        linkUrl: "https://ksf.co.il/events/korean-week",
        imgUrl: a_main_prof_mooli,
        header: aboutContent.aboutMe,
      }}
    />
    <ItemBox
      content={{
        linkUrl:
          "https://www.youtube.com/watch?v=gNsDDVRsptA",
        imgUrl: b_nawee_produces,
        header: aboutContent.background,
      }}
    />

    <Divider marginTop="12" />

    <ItemBox
      content={{
        linkUrl:
          "https://www.facebook.com/media/set/?set=a.2181724548569511&type=3",
        imgUrl: c_gayageum_mooli,
        header: aboutContent.education,
      }}
    />

    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
          "https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk",
        imgUrl: d_rosetta_stone,
        header: aboutContent.hobbies,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
          "https://www.facebook.com/Thesunavoiders",
        imgUrl: e_nawee_tour_guide,
        header: aboutContent.translationWork,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
          "https://www.facebook.com/Thesunavoiders",
        imgUrl: f_nawee_working,
        header: aboutContent.tourGuideWork,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
          "https://www.facebook.com/Thesunavoiders",
        // imgUrl: sun_avoiders_sm,
        header: aboutContent.conclusion,
      }}
    />
    <Divider marginTop="12" />
    <MediaItem>
        <div>
          <a
            href="https://www.explorekorea.co.il/%d7%aa%d7%a8%d7%91%d7%95%d7%aa-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%94/%d7%9e%d7%95%d7%a1%d7%99%d7%a7%d7%94-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%a0%d7%99%d7%aa-%d7%94%d7%a7%d7%93%d7%9e%d7%94/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              {aboutContent.myMission}
            </h2>
          </a>
        </div>
        <Heading as="h2" size="lg" m={10}>
          {aboutContent.callToAction}
        </Heading>

        {/* <Center m={10}>|
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
        </Center> */}
      </MediaItem>
  </Container>
    );
};
