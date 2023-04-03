import React, { useEffect, useState } from "react";

import kidStyles from '../../Styles/Kid/Kid.module.css'
import Footer from '../Footer/Footer'
import  NavBar  from '../Nav/NavBar'


import { useSelector, useDispatch } from 'react-redux'

import womenJacket from '../../Img/kid/jakna.jpg'
import womenCoat from '../../Img/kid/jakna2.jpg'
import womenJacket2 from '../../Img/kid/jeans.jpg'
import womenJacket3 from '../../Img/kid/jeans2.jpg'

import hodieGirl from '../../Img/kid/duks.jpg'
import tshirt from '../../Img/kid/duks2.jpg'
import jeans from '../../Img/kid/majica.jpg'
import tshirt2 from '../../Img/kid/majica2.jpg'

import shoe1 from '../../Img/man/patike.jpg'
import shoe2 from '../../Img/man/patike2.jpg'
import shoe3 from '../../Img/man/patike3.jpg'
import skirt from '../../Img/kid/shoe4.jpg'


import { Link} from 'react-router-dom'


function Kid() {
    
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  }, []);


  const slideText = useSelector((state) => state.counter.slideText)

  const ik1 = useSelector((state) => state.counter.ik1)
  const ik2 = useSelector((state) => state.counter.ik2)
  const ik3 = useSelector((state) => state.counter.ik3)
  const ik4 = useSelector((state) => state.counter.ik4)
  const ik5 = useSelector((state) => state.counter.ik5)
  const ik6 = useSelector((state) => state.counter.ik6)
  const ik7 = useSelector((state) => state.counter.ik7)
  const ik8 = useSelector((state) => state.counter.ik8)
  const ik9 = useSelector((state) => state.counter.ik9)
  const ik10 = useSelector((state) => state.counter.ik10)
  const ik11 = useSelector((state) => state.counter.ik11)
  const ik12 = useSelector((state) => state.counter.ik12)




  const kp1 = useSelector((state) => state.counter.kp1)
  const kp2 = useSelector((state) => state.counter.kp2)
  const kp3 = useSelector((state) => state.counter.kp3)
  const kp4 = useSelector((state) => state.counter.kp4)
  const kp5 = useSelector((state) => state.counter.kp5)
  const kp6 = useSelector((state) => state.counter.kp6)
  const kp7 = useSelector((state) => state.counter.kp7)
  const kp8 = useSelector((state) => state.counter.kp8)
  const kp9 = useSelector((state) => state.counter.kp9)
  const kp10 = useSelector((state) => state.counter.kp10)
  const kp11 = useSelector((state) => state.counter.kp11)
  const kp12 = useSelector((state) => state.counter.kp12)



  const row2Item3 = useSelector((state) => state.counter.row2Val3)
  const row2Item4 = useSelector((state) => state.counter.row2Val4)
  const row4Item2 = useSelector((state) => state.counter.row4Val2)
  const row1Item5 = useSelector((state) => state.counter.row1Val5)
  const row1Item4 = useSelector((state) => state.counter.row1Val4)
  const valuta = useSelector((state) => state.counter.valuta)


  return (
    <div>
        <NavBar />

        <div className={kidStyles.main}>
      <div className={kidStyles.emptyDiv}></div>
       
       <marquee className={kidStyles.slideTextDiv} direction="right">
               {slideText}
       </marquee>


       
      <div className={kidStyles.secondDiv} id="jackets">

         <div className={kidStyles.secondDivHeadline}>{row2Item4}, {row2Item3}</div> 


         <div className={kidStyles.secondDivImage}> 

       

 
         <div className={kidStyles.imageText}>
         <Link to={'/kid/jacket'}>   <img src={womenJacket} alt=""  className={kidStyles.img} /></Link>
              <div>{ik1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp1+((kp1/100)*20) ))}.00  {valuta}  </span>   <span >{kp1}.00 {valuta}</span>  </div> 

         </div>

       
         <div className={kidStyles.imageText}>
         <Link to={'/kid/jacket2'}>      <img src={womenCoat} className={kidStyles.img} alt="" /></Link>
                 <div>{ik2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp2+((kp2/100)*20) ))}.00  {valuta}  </span>   <span >{kp2}.00 {valuta}</span>  </div> 
 
         </div>



         <div className={kidStyles.imageText}>
         <Link to={'/kid/jeans'}>    <img src={womenJacket2} className={kidStyles.img} alt="" /></Link>
            <div>{ik3}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp3+((kp3/100)*20) ))}.00  {valuta}  </span>   <span >{kp3}.00 {valuta}</span>  </div>

         </div>


         <div className={kidStyles.imageText}>
         <Link to={'/kid/jeans2'}>     <img src={womenJacket3} className={kidStyles.img} alt="" /></Link>
            <div>{ik4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp4+((kp4/100)*20) ))}.00  {valuta}  </span>   <span >{kp4}.00 {valuta}</span>  </div>

         </div>




        </div>

      


    </div>




      {/* Second Row */}



      <div className={kidStyles.secondDiv} id="jeans">

<div className={kidStyles.secondDivHeadline}>{row1Item5}, {row4Item2} </div> 


<div className={kidStyles.secondDivImage}> 




<div className={kidStyles.imageText}>
<Link to={'/kid/hoodie'}> <img src={hodieGirl} className={kidStyles.img} alt="" /></Link>
   <div>{ik5}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp5+((kp5/100)*20) ))}.00  {valuta}  </span>   <span >{kp5}.00 {valuta}</span>  </div>

</div>


<div className={kidStyles.imageText}>
<Link to={'/kid/hoodie2'}><img src={tshirt} className={kidStyles.img} alt="" /></Link>
   <div>{ik6}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp6+((kp6/100)*20) ))}.00  {valuta}  </span>   <span >{kp6}.00 {valuta}</span>  </div>

</div>



<div className={kidStyles.imageText}>
<Link to={'/kid/tshirt'}><img src={jeans} className={kidStyles.img} alt="" /></Link>
   <div>{ik7}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp7+((kp7/100)*20) ))}.00  {valuta}  </span>   <span >{kp7}.00 {valuta}</span>  </div>

</div>


<div className={kidStyles.imageText}>
<Link to={'/kid/tshirt2'}><img src={tshirt2} className={kidStyles.img} alt="" /></Link>
   <div>{ik8}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp8+((kp8/100)*20) ))}.00  {valuta}  </span>   <span >{kp8}.00 {valuta}</span>  </div>

</div>




</div>




</div>







              
                {/* Threed Row */}



      <div className={kidStyles.secondDiv} id="shoes">

<div className={kidStyles.secondDivHeadline}>{row1Item4}</div> 


<div className={kidStyles.secondDivImage}> 




<div className={kidStyles.imageText}>
<Link to={'/kid/shoe1'}><img src={shoe1} className={kidStyles.img} alt="" /></Link>
   <div>{ik9}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp9+((kp9/100)*20) ))}.00  {valuta}  </span>   <span >{kp9}.00 {valuta}</span>  </div>

</div>


<div className={kidStyles.imageText}>
<Link to={'/kid/shoe2'}><img src={shoe2} className={kidStyles.img} alt="" /></Link>
   <div>{ik10}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp10+((kp10/100)*20) ))}.00  {valuta}  </span>   <span >{kp10}.00 {valuta}</span>  </div>

</div>



<div className={kidStyles.imageText}>
<Link to={'/kid/shoe3'}><img src={shoe3} className={kidStyles.img} alt="" /></Link>
   <div>{ik11}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp11+((kp11/100)*20) ))}.00  {valuta}  </span>   <span >{kp11}.00 {valuta}</span>  </div>

</div>


<div className={kidStyles.imageText}>
<Link to={'/kid/shoe4'}><img src={skirt} className={kidStyles.img} alt="" /></Link>
   <div>{ik12}</div>
   <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp12+((kp12/100)*20) ))}.00  {valuta}  </span>   <span >{kp12}.00 {valuta}</span>  </div>

</div>




</div>




</div>








        

        </div>


  
        <Footer />

    </div>
  )
}

export default Kid;