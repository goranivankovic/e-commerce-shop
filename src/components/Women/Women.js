
import Footer from '../Footer/Footer'
import  Navbar  from '../Nav/NavBar'
import womenStyle from '../../Styles/Women/Women.module.css'

import { useSelector, useDispatch } from 'react-redux'

import womenJacket from '../../Img/women/womenJacket.jpg'
import womenCoat from '../../Img/women/womenCoat.jpg'
import womenJacket2 from '../../Img/women/womenJacket2.jpg'
import womenJacket3 from '../../Img/women/womenJacket3.jpg'

import hodieGirl from '../../Img/women/hodieGirl.jpg'
import tshirt from '../../Img/women/tshirt.jpg'
import jeans from '../../Img/women/jeans.jpg'
import tshirt2 from '../../Img/women/tshirt2.jpg'

import shoe1 from '../../Img/women/shoe1.jpg'
import shoe2 from '../../Img/women/shoe2.jpg'
import shoe3 from '../../Img/women/shoe3.jpg'
import skirt from '../../Img/women/skirt.jpg'

import {  Link } from "react-router-dom";




import React, { useEffect, useState } from "react";

function Women() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  }, []);


  const slideText = useSelector((state) => state.counter.slideText)

  const iw1 = useSelector((state) => state.counter.iw1)
  const iw2 = useSelector((state) => state.counter.iw2)
  const iw3 = useSelector((state) => state.counter.iw3)
  const iw4 = useSelector((state) => state.counter.iw4)
  const iw5 = useSelector((state) => state.counter.iw5)
  const iw6 = useSelector((state) => state.counter.iw6)
  const iw7 = useSelector((state) => state.counter.iw7)
  const iw8 = useSelector((state) => state.counter.iw8)
  const iw9 = useSelector((state) => state.counter.iw9)
  const iw10 = useSelector((state) => state.counter.iw10)
  const iw11 = useSelector((state) => state.counter.iw11)
  const iw12 = useSelector((state) => state.counter.iw12)




  const wp1 = useSelector((state) => state.counter.wp1)
  const wp2 = useSelector((state) => state.counter.wp2)
  const wp3 = useSelector((state) => state.counter.wp3)
  const wp4 = useSelector((state) => state.counter.wp4)
  const wp5 = useSelector((state) => state.counter.wp5)
  const wp6 = useSelector((state) => state.counter.wp6)
  const wp7 = useSelector((state) => state.counter.wp7)
  const wp8 = useSelector((state) => state.counter.wp8)
  const wp9 = useSelector((state) => state.counter.wp9)
  const wp10 = useSelector((state) => state.counter.wp10)
  const wp11 = useSelector((state) => state.counter.wp11)
  const wp12 = useSelector((state) => state.counter.wp12)



  const row2Item3 = useSelector((state) => state.counter.row2Val3)
  const row2Item4 = useSelector((state) => state.counter.row2Val4)
  const row4Item2 = useSelector((state) => state.counter.row4Val2)
  const row1Item5 = useSelector((state) => state.counter.row1Val5)
  const row1Item4 = useSelector((state) => state.counter.row1Val4)
  const valuta = useSelector((state) => state.counter.valuta)
  return (
    <div>
      <Navbar />
      <div className={womenStyle.main}>
      <div className={womenStyle.emptyDiv}></div>
       
       <marquee className={womenStyle.slideTextDiv} direction="right">
               {slideText}
       </marquee>


       
      <div className={womenStyle.secondDiv} id="jackets">

         <div className={womenStyle.secondDivHeadline}>{row2Item4}, {row2Item3}</div> 


         <div className={womenStyle.secondDivImage}> 

       

 
         <div className={womenStyle.imageText}>
       <Link to="/women/womenjacket"> <img src={womenJacket} className={womenStyle.img} alt="" /></Link> 
            <div>{iw1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp1+((wp1/100)*20) ))}.00  {valuta}  </span>   <span >{wp1}.00 {valuta}</span>  </div>

         </div>

       
         <div className={womenStyle.imageText}>
         <Link to="/women/womencoat">   <img src={womenCoat} className={womenStyle.img} alt="" /></Link>
            <div>{iw2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp2+((wp2/100)*20) ))}.00  {valuta}  </span>   <span >{wp2}.00 {valuta}</span>  </div>

         </div>



         <div className={womenStyle.imageText}>
         <Link to="/women/womenjacket2">     <img src={womenJacket2} className={womenStyle.img} alt="" /></Link>
            <div>{iw3}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp3+((wp3/100)*20) ))}.00  {valuta}  </span>   <span >{wp3}.00 {valuta}</span>  </div>

         </div>


         <div className={womenStyle.imageText}>
         <Link to="/women/womenjacket3"> <img src={womenJacket3} className={womenStyle.img} alt="" /></Link>
            <div>{iw4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp4+((wp4/100)*20) ))}.00  {valuta}  </span>   <span >{wp4}.00 {valuta}</span>  </div>

         </div>




        </div>

      


    </div>




      {/* Second Row */}



      <div className={womenStyle.secondDiv} id="jeans">

<div className={womenStyle.secondDivHeadline}>{row1Item5}, {row4Item2} </div> 


<div className={womenStyle.secondDivImage}> 




<div className={womenStyle.imageText}>
<Link to="/women/hoodie"> <img src={hodieGirl} className={womenStyle.img} alt="" /></Link>
   <div>{iw5}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp5+((wp5/100)*20) ))}.00  {valuta}  </span>   <span >{wp5}.00 {valuta}</span>  </div>

</div>


<div className={womenStyle.imageText}>
<Link to="/women/tshirt">< img src={tshirt} className={womenStyle.img} alt="" /></Link>
   <div>{iw6}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp6+((wp6/100)*20) ))}.00  {valuta}  </span>   <span >{wp6}.00 {valuta}</span>  </div>

</div>



<div className={womenStyle.imageText}>
<Link to="/women/jeans"> <img src={jeans} className={womenStyle.img} alt="" /></Link>
   <div>{iw7}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp7+((wp7/100)*20) ))}.00  {valuta}  </span>   <span >{wp7}.00 {valuta}</span>  </div>

</div>


<div className={womenStyle.imageText}>
<Link to="/women/tshirt2"><img src={tshirt2} className={womenStyle.img} alt="" /></Link>
   <div>{iw8}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp8+((wp8/100)*20) ))}.00  {valuta}  </span>   <span >{wp8}.00 {valuta}</span>  </div>

</div>




</div>




</div>







              
                {/* Threed Row */}



      <div className={womenStyle.secondDiv} id="shoes">

<div className={womenStyle.secondDivHeadline}>{row1Item4}</div> 


<div className={womenStyle.secondDivImage}> 




<div className={womenStyle.imageText}>
<Link to="/women/shoe1"><img src={shoe1} className={womenStyle.img} alt="" /></Link>
   <div>{iw9}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp9+((wp9/100)*20) ))}.00  {valuta}  </span>   <span >{wp9}.00 {valuta}</span>  </div>

</div>


<div className={womenStyle.imageText}>

<Link to="/women/heels"><img src={shoe2} className={womenStyle.img} alt="" /> </Link>
   <div>{iw10}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp10+((wp10/100)*20) ))}.00  {valuta}  </span>   <span >{wp10}.00 {valuta}</span>  </div>

</div>



<div className={womenStyle.imageText}>
<Link to="/women/heels2"><img src={shoe3} className={womenStyle.img} alt="" /></Link>
   <div>{iw11}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp11+((wp11/100)*20) ))}.00  {valuta}  </span>   <span >{wp11}.00 {valuta}</span>  </div>

</div>


<div className={womenStyle.imageText}>
<Link to="/women/skirt"><img src={skirt} className={womenStyle.img} alt="" /></Link>
   <div>{iw12}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp12+((wp12/100)*20) ))}.00  {valuta}  </span>   <span >{wp12}.00 {valuta}</span>  </div>

</div>




</div>




</div>








        

        </div>
       <Footer />
  
    </div>
  )
}

export default Women