import './App.css';
import { GlobalNav } from './Comps/Elements/GlobalNav';
import { Contact } from './Comps/Pages/Contact';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Portfolio } from "./Comps/Pages/Portfolio";
import { LangContext } from "./Contexts/LangContext";
import { useLang } from './Hooks/useLang';
import GlobalTest from './Comps/Elements/GlobalTest';
import ArticleList from './Comps/Pages/About';
import { Helmet } from 'react-helmet-async';

function App() {
  const langContext = useLang();
  return (
    <ChakraProvider>
      <LangContext.Provider value={langContext}>
        <div className="App">
          <Helmet prioritizeSeoTags>
            <title>נָאוֶה כליל החורש | Nave Klil Hahoresh | Korea & Israel Music</title>
            <meta name="description" content="באיזה כובע ניפגש הפעם? עמוד הבית של נָאוֶה כליל החורש (나위): מוסיקאית ומוסיקולוגית, מורת דרך, מתרגמת, מומחית לתרבות ומוסיקה קוריאנית מסורתית, מפיקת אירועים ועוד קצת.. " />
          </Helmet>
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
          <Heading>נָאוֶה כליל החורש
        Nave Klil hahoresh 나베 클릴</Heading> */}
            <GlobalTest />
            <GlobalNav />
            <Routes>
              <Route path='/*' element={<React.Fragment />}></Route>
              <Route path="/home" element={<React.Fragment />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/nawee" element={<ArticleList />}></Route>
              <Route path="/about" element={<></>}></Route>
            </Routes>
            {/* <LangSwitcher /> */}
          </header>
        </div>
      </LangContext.Provider>
    </ChakraProvider>
  );
}

export default App;
