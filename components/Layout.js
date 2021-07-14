import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';

export default function Layout({children, isHomePage}) {
    return (
        <>
            <Navigation isHomePage={isHomePage}/>
            {children}  
            <Footer/>
        </>
    )
}
