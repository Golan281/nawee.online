import {
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";
import { LangContext } from "../../Contexts/LangContext";
import { useContext } from "react";
export const LangSwitcher = () => {
  const { switchToEng, switchToHeb, switchToKor} = useContext(LangContext);
  return (
    <Center>
      <Grid templateColumns="repeat(3, 60px)" gap={2}>
        <Button onClick={switchToHeb} bg=" #19132F" color="#ECEDED" size="md" fontSize={18} fontWeight="regular" _hover={{ color: "#E25E98"}}>
          HE
        </Button>
        <Button onClick={switchToEng} bg=" #19132F" color="#ECEDED" size="md" fontSize={18} fontWeight="regular" _hover={{ color: "#E25E98"}}>
          EN
        </Button>
        <Button onClick={switchToKor} bg=" #19132F" color="#ECEDED" size="md" fontSize={18} fontWeight="regular" _hover={{ color: "#E25E98"}}>
          KR
        </Button>
      </Grid>
    </Center>
  );
};
