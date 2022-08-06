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
import nawee__contact from "../../img/nawee__contact.jpg";
export const About = () => {
  const { currentLang } = useContext(LangContext);
  const { aboutContent } = currentLang;
  return (
    <Container maxW={"7xl"} p="12">
      <Helmet prioritizeSeoTags>
        <title>
          Nave Klil Hahoresh | Intro | מי אני |
          소개
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
        linkUrl: "no-link",
        imgUrl: a_main_prof_mooli,
        header: aboutContent.aboutMe,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />
    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: b_nawee_produces,
        header: aboutContent.background,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />

    <Divider marginTop="12" />

    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: c_gayageum_mooli,
        header: aboutContent.education,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />

    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: d_rosetta_stone,
        header: aboutContent.hobbies,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: e_nawee_tour_guide,
        header: aboutContent.translationWork,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: f_nawee_working,
        header: aboutContent.tourGuideWork,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />
    <Divider marginTop="12" />
    <ItemBox
      content={{
        linkUrl:
        "no-link",
        imgUrl: nawee__contact,
        header: aboutContent.conclusion,
        rtl: (currentLang.lang !== 'ENG') ? true : false,
      }}
    />
    {/* <Divider marginTop="12" /> */}
    <MediaItem>
        <div>
            <h2 className="rtl">
              {aboutContent.myMission}
            </h2>
        </div>


      </MediaItem>
  </Container>
    );
};
