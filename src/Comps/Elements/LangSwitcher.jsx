import {
  Button,
  Grid,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

export const LangSwitcher = () => {
  const [lang,setLang] = useState('HEB');
  const switchToEng = () => {
      setLang('ENG');
      return console.log(`lang switched`);
  }
  const switchToHeb = () => {
      setLang('HEB');
      return console.log(`lang switched`);
  }
  return (
    <Center>
      <Grid templateColumns="repeat(1, 30px)" gap={2}>
        <Button onClick={switchToHeb} bg="#E25E98" color="#19132F" size="xs">
          HEB
        </Button>
        <Button onClick={switchToEng} bg="#E25E98" color="#19132F" size="xs">
          ENG
        </Button>
        {/* <Button bg="#E25E98" color="#19132F" size="xs">
          KR
        </Button> */}
      </Grid>
    </Center>
  );
};
