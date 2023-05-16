import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pagess/sharedd/Footer/Footer';
import NavBar from '../pagess/sharedd/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;