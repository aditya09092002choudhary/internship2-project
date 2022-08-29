import React from "react";
import abweb from "../src/img/unnamed.jpg"

import Common from "./Common";
const About =() => {
    return (
    <>
    <Common name="Welcome to About Page of " 
    imgsrc={abweb} 
    visit="/contact" 
    btname="Contact Now" />
    </>
    );
};

export default About;