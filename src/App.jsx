import React from 'react';
import GlobalStyle from './styled/Global';
import {  BrowserRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;