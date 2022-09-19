import { useState } from "react"
import { multiLangText } from "../lib/multiLang";
export const useLang = () => {
    //[0] is heb, [1] is eng, [2] is kr
    const [currentLang,setCurrentLang] = useState(multiLangText[0]);
    const switchToEng = () => {
        setCurrentLang(multiLangText[1]);
        return multiLangText[1];
    }
    const switchToHeb = () => {
        setCurrentLang(multiLangText[0]);
        return multiLangText[0];
    }
    const switchToKor = () => {
        setCurrentLang(multiLangText[2]);
        return multiLangText[2];
    }
    return { currentLang, setCurrentLang, switchToEng, switchToHeb, switchToKor };
}