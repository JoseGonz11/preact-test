import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './DefaultStyle.css'
import Header from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import {h} from "preact";
import {DefaultBody} from "./Index.jsx";
import NavBar from "./NavBar.jsx";

export function BodySelector(route){
    if (route === "/") {
        return (
            <>
                <Header/>
                <NavBar/>
                <DefaultBody/>
                <Footer/>
            </>
        );
    }
    else{
        return (<></>);
    }
}