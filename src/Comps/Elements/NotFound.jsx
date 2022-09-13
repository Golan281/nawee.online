import { Box, Heading } from "@chakra-ui/react";
export const NotFound = () => {
  return (
    <Box m={4}>
      <Heading as="h1" size="xl" m={4}>
        404
      </Heading>
      <Heading as="h2" size="md" m={2}>
        Oops, the page was not found...
      </Heading>
        <p>There might be a typo in the address, or the page was moved.</p>
    </Box>
  );
};
