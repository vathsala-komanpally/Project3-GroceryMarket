import React from 'react'
import { NavBar } from './NavBar';
import { Header } from './Header';
import { FixedSideBar } from './FixedSideBar';
import { ItemsDisplay } from './ItemsDisplay';
import { Footer } from './Footer';

const MainPageDesign = () => {
    return (
        <div>
            <NavBar />
            <FixedSideBar />
            <Footer />

        </div>
    )
}

export { MainPageDesign };
