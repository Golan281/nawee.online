import { MediaItem } from "../Elements/MediaItem";
import { Grid, Heading, Center } from "@chakra-ui/react";
import korea_week_sm from "../../img/korea_week_sm.jpg";
import gayageum_sm from "../../img/gayageum_sm.jpg";
import ark_people_sm from "../../img/ark_people_sm.jpg";
import korean_translation_sm from "../../img/korean_translation_sm.jpg";
import sun_avoiders_sm from "../../img/sun_avoiders_sm.jpg";
import korean_friday_sm from "../../img/korean_friday_sm.jpg";
import jlem_tour_sm from "../../img/jlem_tour_sm.jpg";
import kim_live_sm from "../../img/kim_live_sm.jpg"

export const Portfolio = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" m={20} gap={10}>
      <MediaItem>
        <Heading as="h2" size="lg">
          קוריאה בישראל
        </Heading>
        <Center>
          <a
            href="https://ksf.co.il/events/korean-week"
            target="_blank"
          >
            <img className="portfolio-img" src={korea_week_sm}></img>
          </a>
        </Center>
        <a
          href="https://ksf.co.il/events/korean-week"
          target="_blank"
        >
          <h2>שבוע קוריאה 2022 באוניברסיטה העברית</h2>
        </a>
      </MediaItem>
      <MediaItem>
        {/* <h2>קוריאה בישראל</h2> */}
        <Center>
          <a
            href="https://www.youtube.com/watch?v=gNsDDVRsptA"
            target="_blank"
          >
            <img className="portfolio-img" src={gayageum_sm}></img>
          </a>
        </Center>
        <a
          href="https://www.youtube.com/watch?v=gNsDDVRsptA"
          target="_blank"
        >
          <h2>
            צלילים מקוריאה המסורתית: סולו גיאגום, אביב מאת
            הוואנג ביונג קי
          </h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Heading as="h2" size="lg">
          הפקות
        </Heading>
        <Center>
          <a
            href="https://www.facebook.com/media/set/?set=a.2181724548569511&type=3"
            target="_blank"
          >
            <img className="portfolio-img" src={ark_people_sm}></img>
          </a>
        </Center>
        <a
          href="https://www.facebook.com/media/set/?set=a.2181724548569511&type=3"
          target="_blank"
        >
          <h2>פסטיבל יוצאי התיבה / כביש אחד</h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Heading as="h2" size="lg">
          תרגומים
        </Heading>
        <Center>
          <a
            href="https://www.google.com/url?q=https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk"
            target="_blank"
          >
            <img className="portfolio-img" src={korean_translation_sm}></img>
          </a>
        </Center>
        <a
          href="https://www.google.com/url?q=https://www.mako.co.il/news-lifestyle/2022_q1/Article-3066a1120a81f71026.htm&sa=D&source=docs&ust=1653068284434044&usg=AOvVaw2c_MbTL3YLosFwgTHRnixk"
          target="_blank"
        >
          <h2>
            חדשות ערוץ 12: סדרת כתבות דוקו על דרום קוריאה
          </h2>
        </a>
      </MediaItem>
      <MediaItem>
        <Center>
          <a
            href="https://www.facebook.com/Thesunavoiders"
            target="_blank"
          >
            <img className="portfolio-img" src={sun_avoiders_sm}></img>
          </a>
        </Center>
        <a
          href="https://www.facebook.com/Thesunavoiders"
          target="_blank"
        >
          <h2>The Sun Avoiders Project</h2>
        </a>
      </MediaItem>
      <MediaItem>
        <h2>עוד פרוייקטים</h2>
        <div>
          <a
            href="https://www.explorekorea.co.il/%d7%aa%d7%a8%d7%91%d7%95%d7%aa-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%94/%d7%9e%d7%95%d7%a1%d7%99%d7%a7%d7%94-%d7%a7%d7%95%d7%a8%d7%99%d7%90%d7%a0%d7%99%d7%aa-%d7%94%d7%a7%d7%93%d7%9e%d7%94/"
            target="_blank"
          >
            כתבה על גוגאק - מוסיקה קוריאנית מסורתית פרק 1
            באתר אקספלור קוריאה
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?v=sVy3ZeFXQgI&t=3366s&ab_channel=KoreanStudiesForuminIsrael"
            target="_blank"
          >
            שישי קוריאני: הרצאה על מוסיקה מסורתית ומוסיקה
            בקוריאה
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/watch?t=3381&v=rPVK1rzBx_Y&feature=youtu.be"
            target="_blank"
          >
            מקס ברוך, קונצ'רטו לויולה וקלרינט, בקונצרט עם
            התזמורת העברית באוניברסיטה המורמונית
          </a>
        </div>
        <Center>
        <img src ={korean_friday_sm} className="portfolio-img"></img>
        </Center>
        <Center>
        <img src={jlem_tour_sm} className="portfolio-img"></img>
        </Center>
        <Center>
        <img src={kim_live_sm} className="portfolio-img"></img>
        </Center>
      </MediaItem>
    </Grid>
  );
};
