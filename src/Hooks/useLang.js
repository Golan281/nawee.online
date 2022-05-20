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
    const switchLanguage = () => {
        return `lang switched`;
    }


    useEffect(()=> {
        //use effect will handle:
        //  - helmet (href lang) 
        //  - text direction (rtl for HEB, else ltr)
    },[])

    return { lang, setLang, switchLanguage}
}