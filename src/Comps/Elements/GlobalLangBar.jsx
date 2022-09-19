import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import { LangSwitcher } from './LangSwitcher';
export default function GlobalLangBar() {
  return (
    <>
      <Box bg={'inherit'} px={4} pos="absolute" top="0" left="0">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'flex', md: 'flex' }}>
                  <LangSwitcher pt={10}/>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}