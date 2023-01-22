import React, { useEffect, useState } from "react";
import NavBar from '../Nav/NavBar';
import BlackGirl from '../BlackGirl/BlackGirl';
import SecondDiv from '../SecondDiv/SecondDiv';
import ThreedDiv from '../ThreedDiv/ThreedDiv';
import Footer from '../Footer/Footer';
import Four from '../Four/Four';

function Home() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      
      }, []);
  return (
    <div>
        <NavBar /> 
         <BlackGirl /> 
         <SecondDiv /> 
         <ThreedDiv />
          <Four />
          <Footer />

    </div>
  )
}

export default Home