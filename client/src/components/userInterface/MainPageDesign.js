import React from 'react'
import { NavBar } from './NavBar';
import { FixedSideBar } from './FixedSideBar';
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
