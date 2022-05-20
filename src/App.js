import logo from './img/logo_pink.png';
import './App.css';
import { GlobalNav } from './Comps/Elements/GlobalNav';
import { Contact } from './Comps/Pages/Contact';
import { ChakraProvider, Heading } from '@chakra-ui/react'
import React, { useState } from 'react';
import { LangSwitcher } from './Comps/Elements/LangSwitcher';
import { Route, Routes } from 'react-router-dom';
import { Portfolio } from "./Comps/Pages/Portfolio";

function App() {

  const [lang, setLang] = useState();
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
}

export default App;
