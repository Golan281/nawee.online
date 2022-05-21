import { useState, useEffect } from "react"


  //should affect the whole site, but currently just the menu & "מה אני" & the meta title/desc of both pages
export const useLang = () => {
    // const Lang = {
    //     HEB: 1,
    //     ENG: 2,
    //     KOR: 3,
    // };
    // Object.freeze(Lang);

    const [lang,setLang] = useState('HEB');
    const switchToEng = () => {
        setLang('ENG');
        return console.log(`lang switched`);
    }
    const switchToHeb = () => {
        setLang('HEB');
        return console.log(`lang switched`);
    }

    useEffect(()=> {
        //use effect will handle:
        //  - menu items
        //  - portfolio page headers and links
        //  - helmet (href lang) for both pages (if too much work - consider v2) 
        //  v2 - text direction (rtl for HEB, else ltr) when needed

    },[])

    return { lang, setLang, switchToEng, switchToHeb}
}