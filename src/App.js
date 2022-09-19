import './App.css';
import { GlobalNav } from './Comps/Elements/GlobalNav';
import { Contact } from './Comps/Pages/Contact';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Portfolio from "./Comps/Pages/Portfolio";
import { LangContext } from "./Contexts/LangContext";
import { useLang } from './Hooks/useLang';
import GlobalLangBar from './Comps/Elements/GlobalLangBar';
import { About } from "./Comps/Pages/About";
import { Helmet } from 'react-helmet-async';
import { extendTheme } from '@chakra-ui/react';
import { GlobalFooter } from './Comps/Elements/GlobalFooter';
import { NotFound } from './Comps/Elements/NotFound';
import logo from "./img/logo_pink.png";

const theme = extendTheme({
  fonts: {
    heading: `Open Sans,'Suez One','Montserrat'`,
    body: `'Montserrat', 'arial'`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: '#CCCCCC',
      },
    }
  }
})
function App() {
  const langContext = useLang();
  const location = useLocation();
  return (
    <React.Fragment>
      <Helmet prioritizeSeoTags>
        <title>נָאוֶה כליל החורש | Nave Klil Hahoresh | Korea & Israel Music</title>
        <meta name="description" content="באיזה כובע ניפגש הפעם? עמוד הבית של נָאוֶה כליל החורש (나위): מוסיקאית ומוסיקולוגית, מורת דרך, מתרגמת, מומחית לתרבות ומוסיקה קוריאנית מסורתית, מפיקת אירועים ועוד קצת.. " />
        <meta itemprop="image" content={logo} />
        <meta itemprop="og:image" content={logo} />
        <meta itemprop="twitter:image" content={logo} />
      </Helmet>
      <ChakraProvider theme={theme}>
        <LangContext.Provider value={langContext}>
          <div className="App">
            <header className="App-header">
              <GlobalLangBar />
              <GlobalNav />
              <Routes>
                <Route path="/home" exact element={<React.Fragment />} />
                <Route
                    path="/"
                    exact element={<Navigate to="/home" replace />}
                />
                <Route
                    path="/*"
                    exact element={<Navigate to="/404" replace />}
                />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/projects" exact element={<Portfolio />} />
                <Route path="/about" exact element={<About />} />
                <Route path='/404' element={<NotFound />} />
              </Routes>
              {(location.pathname !== "/home") && <GlobalFooter />}
            </header>
          </div>
        </LangContext.Provider>
      </ChakraProvider>
    </React.Fragment>
  );
}
export default App;
