import React from 'react';
import GlobalStyle from './styled/Global';
import {  HashRouter ,  Routes,  Route,  Link  } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
const App = () => {
  return (
    <>
      <GlobalStyle/>
      <HashRouter style={{width:'100%'}}>
        
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>

          </Route>
        </Routes>

      </HashRouter>
    </>
  );
};

export default App;