import React from 'react'
import {Header} from './Header';
import {FixedSideBar} from './FixedSideBar';
import {ItemsDisplay} from './ItemsDisplay';
import {Footer} from './Footer';

const MainPageDesign=() =>{
    return (
        <div className="GroceryMarketPage">
            <div className="header">
                <Header/>
            </div>
            <div className="fixedSideBar">
                <FixedSideBar/>
            </div>
            <div className="displayItems">
               <ItemsDisplay/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export {MainPageDesign};
