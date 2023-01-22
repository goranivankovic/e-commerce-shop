
import './App.css';

import React, { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Women from './components/Women/Women';
import Man from './components/Man/Man';
import Kid from './components/Kid/Kid';
import Home from './components/Home/Home';

import WomenCard1 from './components/WomenCards/WomenCard1';
import WomenCard2 from './components/WomenCards/WomenCard2';
import WomenCard3 from './components/WomenCards/WomenCard3';
import WomenCard4 from './components/WomenCards/WomenCard4';
import WomenCard5 from './components/WomenCards/WomenCard5';
import WomenCard6 from './components/WomenCards/WomenCard6';
import WomenCard7 from './components/WomenCards/WomenCard7';
import WomenCard8 from './components/WomenCards/WomenCard8';
import WomenCard9 from './components/WomenCards/WomeCard9';
import WomenCard10 from './components/WomenCards/WomenCard10';
import WomenCard11 from './components/WomenCards/WomenCard11';
import WomenCard12 from './components/WomenCards/WomenCard12';
import ShopingCart from './components/ShopingCart/ShopingCart';

import KidCard1 from './components/KidCards/KidCard1';
import KidCard2 from './components/KidCards/KidCard2';
import KidCard3 from './components/KidCards/KidCard3';
import KidCard4 from './components/KidCards/KidCard4';
import KidCard5 from './components/KidCards/KidCard5';
import KidCard6 from './components/KidCards/KidCard6';
import KidCard7 from './components/KidCards/KidCard7';
import KidCard8 from './components/KidCards/KidCard8';
import KidCard9 from './components/KidCards/KidCard9';
import KidCard10 from './components/KidCards/KidCard10';
import KidCard11 from './components/KidCards/KidCard11';
import KidCard12 from './components/KidCards/KidCard12';


import ManCard1 from './components/ManCards/ManCard1';
import ManCard2 from './components/ManCards/ManCard2';
import ManCard3 from './components/ManCards/ManCard3';
import ManCard4 from './components/ManCards/ManCard4';
import ManCard5 from './components/ManCards/ManCard5';
import ManCard6 from './components/ManCards/ManCard6';
import ManCard7 from './components/ManCards/ManCard7';
import ManCard8 from './components/ManCards/ManCard8';
import ManCard9 from './components/ManCards/ManCard9';
import ManCard10 from './components/ManCards/ManCard10';
import ManCard11 from './components/ManCards/ManCard11';
import ManCard12 from './components/ManCards/ManCard12';

function App() {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  }, []);

  return (
    <div>

<Routes>
         {/* Main routes*/}
        <Route path="/" element={<Home />} />
     
        <Route path="/women" element={<Women />}  />

        <Route path="/kid" element={<Kid />}  />

        <Route path="/man" element={<Man />}  />

        <Route path="/shop" element={<ShopingCart />}  />

        <Route path="*" element={<div>Not found</div>}  />

            {/* Women card  routes*/}

            <Route path="/women/womenjacket" element={<WomenCard1 />}  />
            <Route path="/women/womencoat" element={<WomenCard2 />}  />
            <Route path="/women/womenjacket2" element={<WomenCard3 />}  />
            <Route path="/women/womenjacket3" element={<WomenCard4 />}  />

            <Route path="/women/hoodie" element={<WomenCard5 />}  />
            <Route path="/women/tshirt" element={<WomenCard6 />}  />
            <Route path="/women/jeans" element={<WomenCard7 />}  />
            <Route path="/women/tshirt2" element={<WomenCard8 />}  />

            <Route path="/women/shoe1" element={<WomenCard9 />}  />
            <Route path="/women/heels" element={<WomenCard10 />}  />
            <Route path="/women/heels2" element={<WomenCard11 />}  />
            <Route path="/women/skirt" element={<WomenCard12 />}  />




             {/*Kid card  routes*/}

             <Route path="/kid/jacket" element={<KidCard1 />}  />
             <Route path="/kid/jacket2" element={<KidCard2 />}  />
             <Route path="/kid/jeans" element={<KidCard3 />}  />
             <Route path="/kid/jeans2" element={<KidCard4 />}  />

             <Route path="/kid/hoodie" element={<KidCard5/>}  />
             <Route path="/kid/hoodie2" element={<KidCard6/>}  />
             <Route path="/kid/tshirt" element={<KidCard7/>}  />
             <Route path="/kid/tshirt2" element={<KidCard8/>}  />

             <Route path="/kid/shoe1" element={<KidCard9/>}  />
             <Route path="/kid/shoe2" element={<KidCard10/>}  />
             <Route path="/kid/shoe3" element={<KidCard11/>}  />
             <Route path="/kid/shoe4" element={<KidCard12/>}  />



               {/*Man card  routes*/}

               <Route path="/man/manjacket" element={<ManCard1/>}  />
               <Route path="/man/manjacket2" element={<ManCard2/>}  />
               <Route path="/man/pullover" element={<ManCard3/>}  />
               <Route path="/man/pullover2" element={<ManCard4/>}  />

               <Route path="/man/hoodie" element={<ManCard5/>}  />
               <Route path="/man/hoodie2" element={<ManCard6/>}  />
               <Route path="/man/tshirt" element={<ManCard7/>}  />
               <Route path="/man/tshirt2" element={<ManCard8/>}  />

               <Route path="/man/shoe1" element={<ManCard9/>}  />
               <Route path="/man/shoe2" element={<ManCard10/>}  />
               <Route path="/man/shoe3" element={<ManCard11/>}  />
               <Route path="/man/shoe4" element={<ManCard12/>}  />
         
         
         



            
</Routes>
   
      
  
    </div>
  );
}

export default App;
