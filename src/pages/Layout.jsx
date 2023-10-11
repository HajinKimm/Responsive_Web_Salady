import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';

const Layout = () => {
    return (
        <div style={{width:'100%'}}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;