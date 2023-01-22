
import Footer from '../Footer/Footer'
import  NavBar  from '../Nav/NavBar'

import manStyle from '../../Styles/Man/Man.module.css'

import { useSelector, useDispatch } from 'react-redux'

import womenJacket from '../../Img/man/jakna.jpg'
import womenCoat from '../../Img/man/muskaJakna.jpg'
import womenJacket2 from '../../Img/man/dzemper.jpg'
import womenJacket3 from '../../Img/man/dzemper2.jpg'

import hodieGirl from '../../Img/man/duks.jpg'
import tshirt from '../../Img/man/duks2.jpg'
import jeans from '../../Img/man/majica.jpg'
import tshirt2 from '../../Img/man/majica2.jpg'

import shoe1 from '../../Img/man/patike.jpg'
import shoe2 from '../../Img/man/patike2.jpg'
import shoe3 from '../../Img/man/patike3.jpg'
import skirt from '../../Img/man/cipele.jpg'


import {Link} from 'react-router-dom'

import React, { useEffect, useState } from "react";


function Man() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  }, []);


  const slideText = useSelector((state) => state.counter.slideText)

  const im1 = useSelector((state) => state.counter.im1)
  const im2 = useSelector((state) => state.counter.im2)
  const im3 = useSelector((state) => state.counter.im3)
  const im4 = useSelector((state) => state.counter.im4)
  const im5 = useSelector((state) => state.counter.im5)
  const im6 = useSelector((state) => state.counter.im6)
  const im7 = useSelector((state) => state.counter.im7)
  const im8 = useSelector((state) => state.counter.im8)
  const im9 = useSelector((state) => state.counter.im9)
  const im10 = useSelector((state) => state.counter.im10)
  const im11 = useSelector((state) => state.counter.im11)
  const im12 = useSelector((state) => state.counter.im12)




  const mp1 = useSelector((state) => state.counter.mp1)
  const mp2 = useSelector((state) => state.counter.mp2)
  const mp3 = useSelector((state) => state.counter.mp3)
  const mp4 = useSelector((state) => state.counter.mp4)
  const mp5 = useSelector((state) => state.counter.mp5)
  const mp6 = useSelector((state) => state.counter.mp6)
  const mp7 = useSelector((state) => state.counter.mp7)
  const mp8 = useSelector((state) => state.counter.mp8)
  const mp9 = useSelector((state) => state.counter.mp9)
  const mp10 = useSelector((state) => state.counter.mp10)
  const mp11 = useSelector((state) => state.counter.mp11)
  const mp12 = useSelector((state) => state.counter.mp12)



  const row2Item3 = useSelector((state) => state.counter.row2Val3)
  const row2Item4 = useSelector((state) => state.counter.row2Val4)
  const row3Item4 = useSelector((state) => state.counter.row3Val4)
  const row1Item5 = useSelector((state) => state.counter.row1Val5)
  const row1Item4 = useSelector((state) => state.counter.row1Val4)
  const valuta = useSelector((state) => state.counter.valuta)


  return (
    <div>
        <NavBar />

        <div className={manStyle.main}>
      <div className={manStyle.emptyDiv}></div>
       
       <marquee className={manStyle.slideTextDiv} direction="right">
               {slideText}
       </marquee>


       
      <div className={manStyle.secondDiv} id="jackets">

         <div className={manStyle.secondDivHeadline}>{row2Item4}, {row2Item3}</div> 


         <div className={manStyle.secondDivImage}> 

       

 
         <div className={manStyle.imageText}>
       <Link to={"/man/manjacket"}><img src={womenJacket} className={manStyle.img} alt="" /></Link>  
            <div>{im1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp1+((mp1/100)*20) ))}.00  {valuta}  </span>   <span >{mp1}.00 {valuta}</span>  </div>

         </div>

       
         <div className={manStyle.imageText}>
         <Link to={"/man/manjacket2"}>  <img src={womenCoat} className={manStyle.img} alt="" /></Link>
            <div>{im2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp2+((mp2/100)*20) ))}.00  {valuta}  </span>   <span >{mp2}.00 {valuta}</span>  </div>

         </div>



         <div className={manStyle.imageText}>
         <Link to={"/man/pullover"}>   <img src={womenJacket2} className={manStyle.img} alt="" /></Link>
            <div>{im3}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp3+((mp3/100)*20) ))}.00  {valuta}  </span>   <span >{mp3}.00 {valuta}</span>  </div>

         </div>


         <div className={manStyle.imageText}>
         <Link to={"/man/pullover2"}>    <img src={womenJacket3} className={manStyle.img} alt="" /></Link>
            <div>{im4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp4+((mp4/100)*20) ))}.00  {valuta}  </span>   <span >{mp4}.00 {valuta}</span>  </div>

         </div>




        </div>

      


    </div>




      {/* Second Row */}



      <div className={manStyle.secondDiv} id="jeans">

<div className={manStyle.secondDivHeadline}>{row1Item5}, {row3Item4} </div> 


<div className={manStyle.secondDivImage}> 




<div className={manStyle.imageText}>
<Link to={"/man/hoodie"}> <img src={hodieGirl} className={manStyle.img} alt="" /></Link>
   <div>{im5}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp5+((mp5/100)*20) ))}.00  {valuta}  </span>   <span >{mp5}.00 {valuta}</span>  </div>

</div>


<div className={manStyle.imageText}>
<Link to={"/man/hoodie2"}><img src={tshirt} className={manStyle.img} alt="" /></Link>
   <div>{im6}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp6+((mp6/100)*20) ))}.00  {valuta}  </span>   <span >{mp6}.00 {valuta}</span>  </div>

</div>



<div className={manStyle.imageText}>
<Link to={"/man/tshirt"}><img src={jeans} className={manStyle.img} alt="" /></Link>
   <div>{im7}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp7+((mp7/100)*20) ))}.00  {valuta}  </span>   <span >{mp7}.00 {valuta}</span>  </div>

</div>


<div className={manStyle.imageText}>
<Link to={"/man/tshirt2"}><img src={tshirt2} className={manStyle.img} alt="" /></Link>
   <div>{im8}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp8+((mp8/100)*20) ))}.00  {valuta}  </span>   <span >{mp8}.00 {valuta}</span>  </div>

</div>




</div>




</div>







              
                {/* Threed Row */}



      <div className={manStyle.secondDiv} id="shoes">

<div className={manStyle.secondDivHeadline}>{row1Item4}</div> 


<div className={manStyle.secondDivImage}> 




<div className={manStyle.imageText}>
<Link to={"/man/shoe1"}><img src={shoe1} className={manStyle.img} alt="" /></Link>
   <div>{im9}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp9+((mp9/100)*20) ))}.00  {valuta}  </span>   <span >{mp9}.00 {valuta}</span>  </div>

</div>


<div className={manStyle.imageText}>
<Link to={"/man/shoe2"}><img src={shoe2} className={manStyle.img} alt="" /></Link>
   <div>{im10}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp10+((mp10/100)*20) ))}.00  {valuta}  </span>   <span >{mp10}.00 {valuta}</span>  </div>

</div>



<div className={manStyle.imageText}>
<Link to={"/man/shoe3"}><img src={shoe3} className={manStyle.img} alt="" /></Link>
   <div>{im11}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp11+((mp11/100)*20) ))}.00  {valuta}  </span>   <span >{mp11}.00 {valuta}</span>  </div>

</div>


<div className={manStyle.imageText}>
<Link to={"/man/shoe4"}><img src={skirt} className={manStyle.img} alt="" /></Link>
   <div>{im12}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp12+((mp12/100)*20) ))}.00  {valuta}  </span>   <span >{mp12}.00 {valuta}</span>  </div>

</div>




</div>




</div>








        

        </div>



        <Footer/>

    </div>
  )
}

export default Man