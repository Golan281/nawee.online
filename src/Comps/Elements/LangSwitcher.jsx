import {
  Button,
  Grid,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";

export const LangSwitcher = () => {
  return (
    <Center>
      <Grid templateColumns="repeat(1, 30px)" gap={2}>
        <Button bg="#E25E98" color="#19132F" size="xs">
          IL
        </Button>
        <Button bg="#E25E98" color="#19132F" size="xs">
          ENG
        </Button>
        <Button bg="#E25E98" color="#19132F" size="xs">
          KR
        </Button>
      </Grid>
    </Center>
  );
};
