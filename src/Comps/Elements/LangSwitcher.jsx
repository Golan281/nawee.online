import {
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";

export const LangSwitcher = () => {
  
  const { switchToEng, switchToHeb } = useContext(LangContext);
  return (
    <Center>
      <Grid templateColumns="repeat(2, 20px)" gap={2}>
        <Button onClick={switchToHeb} bg="#E25E98" color="#19132F" size="xs" fontSize={10}>
          HEB
        </Button>
        <Button onClick={switchToEng} bg="#E25E98" color="#19132F" size="xs" fontSize={10}>
          ENG
        </Button>
        {/* <Button bg="#E25E98" color="#19132F" size="xs">
          KR
        </Button> */}
      </Grid>
    </Center>
  );
};
