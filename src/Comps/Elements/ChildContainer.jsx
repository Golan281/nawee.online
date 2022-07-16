//child container is for each section

//sub conts for projects & who I am
//one link box for both img & heading
//accepts href & multilang info as param
import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Container,
  //   Tag,
  //   Wrap,
  //   WrapItem,
  //   SpaceProps,
  //   useColorModeValue,
  //   VStack,
} from "@chakra-ui/react";


export const ChildContainer = ({ content }) => {
  console.log(content);
  return (
    <React.Fragment>
      <Heading as="h2" size="lg" m={4}>
        {content.mainHeader}
      </Heading>
      <Divider marginTop="12" />
      //map all relevant item boxes = even put in an arr on this file
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
      {/* <Heading as="h2" marginTop="5">
        Latest articles
      </Heading> */}
      {/* <Divider marginTop="5" /> */}
    </React.Fragment>
  );
};
