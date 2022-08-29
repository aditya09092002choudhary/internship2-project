import React from "react";
import web from "../src/img/chngeee.jpg"
import Common from "./Common";
const Home =() => {
    return (
    <>
    <Common name="Get Started with your business with "
     imgsrc={web} 
     visit="/service" 
     btname="Get Started" />
    </>
    );
};

export default Home;