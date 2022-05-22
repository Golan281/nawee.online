import './App.css';
import { GlobalNav } from './Comps/Elements/GlobalNav';
import { Contact } from './Comps/Pages/Contact';
import { ChakraProvider} from '@chakra-ui/react'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Portfolio } from "./Comps/Pages/Portfolio";
import { LangContext } from "./Contexts/LangContext";
import { useLang } from './Hooks/useLang';

function App() {
  const langContext = useLang();
  return (
    <ChakraProvider>
      <LangContext.Provider value={langContext}>

        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
          <Heading>נָאוֶה כליל החורש
        Nave Klil hahoresh 나베 클릴</Heading> */}
            <GlobalNav />
            <Routes>
              <Route path='/*' element={<React.Fragment />}></Route>
              <Route path="/home" element={<React.Fragment />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/nawee" element={<Portfolio />}></Route>
            </Routes>
            {/* <LangSwitcher /> */}
          </header>
        </div>
      </LangContext.Provider>
    </ChakraProvider>
  );
}

export default App;
