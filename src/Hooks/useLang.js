import { useState, useEffect } from "react"
import { multiLangText } from "../lib/multiLang";


  //should affect the whole site, but currently just the menu & "מה אני" & the meta title/desc of both pages
export const useLang = () => {

    const [currentLang,setCurrentLang] = useState(multiLangText[0]);
    const switchToEng = () => {
        setCurrentLang(multiLangText[1]);
        return console.table(`lang switched`, multiLangText[1]);
    }
    const switchToHeb = () => {
        setCurrentLang(multiLangText[0]);
        return console.table(`lang switched`, multiLangText[0]);
    }

    useEffect(()=> {
        //use effect will handle:
        //  - menu items
        //  - portfolio page headers and links
        //  - helmet (href lang) for both pages (if too much work - consider v2) 

        // on v2 - text direction (rtl for HEB, else ltr) when needed

    },[])

    return { currentLang, setCurrentLang, switchToEng, switchToHeb };
}