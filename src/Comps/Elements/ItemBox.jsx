//item box will hold single items
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
} from "@chakra-ui/react";
export const ItemBox = ({content}) => {
    const { currentLang } = useContext(LangContext);
    const flexDirection = (currentLang.lang !== 'HEB') ? "row-reverse" : "row";
    return (
        <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: flexDirection }}
        justifyContent="space-between"
        className="word-break-normal"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href={content.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {(content.imgUrl === "no-img") ? (<div></div>) : (
                <Image
                  borderRadius="lg"
                  src={content.imgUrl}
                  alt={content.header}
                  objectFit="contain"
                  />
              )}
            </Link>
          </Box>
          <Box
            zIndex="1"
            width="100%"
            position="absolute"
            height="100%"
          >
            <Box
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading as="h2" size="md" m={0} className={(content.rtl === true ? 'rtl' : '')} fontFamily={'Helvetica'}>
            {(content.linkUrl === 'no-link') ? (content.header) : (
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href={content.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.header}
            </Link>
            )}
          </Heading>
        </Box>
      </Box>
    )
}