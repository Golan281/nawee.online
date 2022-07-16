//item box will hold single items

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

export const ItemBox = ({content}) => {
    console.log(content);
    return (
        <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
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
              <Image
                borderRadius="lg"
                src={content.imgUrl}
                alt={content.header}
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box
            zIndex="1"
            width="100%"
            position="absolute"
            height="100%"
          >
            <Box
              //   bgGradient={useColorModeValue(
              //     'radial(orange.600 1px, transparent 1px)',
              //     'radial(orange.300 1px, transparent 1px)'
              //   )}
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
          {/* <BlogTags tags={['Korea', 'Product']} /> */}
          <Heading as="h2" size="lg" m={4}>
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              href={content.linkUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.header}
            </Link>
          </Heading>
          {/* <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text> */}
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
    )
}