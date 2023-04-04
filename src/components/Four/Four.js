import React from 'react'
import fourStyles from '../../Styles/Four/Four.module.css'

import womenJacket from '../../Img/women/womenJacket.jpg'
import duks from '../../Img/kid/duks.jpg'
import manJacket from '../../Img/man/muskaJakna.jpg'
import womenJeans from '../../Img/women/jeans.jpg'
import kidJacket from '../../Img/kid/jakna2.jpg'

import pooly from '../../Img/man/dzemper2.jpg'
import womenCoat from '../../Img/women/womenCoat.jpg'
import manTshirt2 from '../../Img/man/majica2.jpg'
import womenJacket2 from '../../Img/women/womenJacket2.jpg'
import kidJeans2 from '../../Img/kid/jeans2.jpg'


import {Link} from'react-router-dom'












import { useSelector, useDispatch } from 'react-redux'
import Marquee from "react-fast-marquee";


function Four() {



  
  const secondText1 = useSelector((state) => state.counter.secondText1)
  const secondText2 = useSelector((state) => state.counter.secondText2)


  const iw1 = useSelector((state) => state.counter.iw1)
  const ik5 = useSelector((state) => state.counter.ik5)
  const im1 = useSelector((state) => state.counter.im1)
  const iw7 = useSelector((state) => state.counter.iw7)
  const ik2 = useSelector((state) => state.counter.ik2)

  const im4 = useSelector((state) => state.counter.im4)
  const iw2 = useSelector((state) => state.counter.iw2)
  const im8 = useSelector((state) => state.counter.im8)
  const iw3 = useSelector((state) => state.counter.iw3)
  const ik4 = useSelector((state) => state.counter.ik4)






  const wp1 = useSelector((state) => state.counter.wp1)
  const kp5 = useSelector((state) => state.counter.kp5)
  const mp1 = useSelector((state) => state.counter.mp1)
  const wp7 = useSelector((state) => state.counter.wp7)
  const kp2 = useSelector((state) => state.counter.kp2)

  const mp4 = useSelector((state) => state.counter.mp4)
  const wp2 = useSelector((state) => state.counter.wp2)
  const mp8 = useSelector((state) => state.counter.mp8)
  const wp3 = useSelector((state) => state.counter.wp3)
  const kp4 = useSelector((state) => state.counter.wp4)


  const fourText1 = useSelector((state) => state.counter.fourText1)
  const fourText2 = useSelector((state) => state.counter.fourText2)
  const fourText3 = useSelector((state) => state.counter.fourText3)
  const fourText4 = useSelector((state) => state.counter.fourText4)
  const fourText5 = useSelector((state) => state.counter.fourText5)
  const fourText6 = useSelector((state) => state.counter.fourText6)


  const valuta = useSelector((state) => state.counter.valuta)


  

    




    






  return (

    
    <div className={fourStyles.main}>

        <div className={fourStyles.firstDiv}>
            <div> {fourText1}</div>
            <div> {fourText2}</div>
            <div>{fourText3}</div>

        </div>
  

        <Marquee pauseOnHover={true}>


      <div className={fourStyles.firstImageDiv}>




     
          
      <div className={fourStyles.imageText}>
       <Link to={'/women/womenjacket'}> <img src={womenJacket} alt="" className={fourStyles.img} /></Link>
            <div>{iw1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp1+((wp1/100)*20) ))}.00  {valuta}  </span>   <span >{wp1}.00 {valuta}</span>  </div>
        </div>


        <div className={fourStyles.imageText}>
        <Link to={'/kid/hoodie'}> <img  src={duks} alt="" className={fourStyles.img} /></Link>
            <div>{ik5}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp5+(kp5/100)*20 ))}.00  {valuta} </span>   <span >{kp5}.00 {valuta}</span>  </div>
        </div>

        <div className={fourStyles.imageText}>
        <Link to={'/man/manjacket2'}>  <img src={manJacket} alt=""  className={fourStyles.img}/></Link>
            <div>{im1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp1+(mp1/100)*20 ))}.00  {valuta}  </span>   <span >{mp1}.00 {valuta}</span>  </div>
        </div>


        <div className={fourStyles.imageText}>
        <Link to={'/women/jeans'}>   <img  src={womenJeans} alt="" className={fourStyles.img} /></Link>
            <div>{iw7}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp7+(wp7/100)*20 ))}.00  {valuta} </span>   <span >{wp7}.00 {valuta}</span>  </div>
        </div>

        
        <div className={fourStyles.imageText}>
        <Link to={'/kid/jacket2'}>   <img  src={kidJacket} alt=""  className={fourStyles.img}/></Link>
            <div>{ik2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp2+(kp2/100)*20 ))}.00  {valuta} </span>   <span >{kp2}.00 {valuta}</span>  </div>
        </div>




    {/* Drugih 10 */}




        
    <div className={fourStyles.imageText}>
    <Link to={'/man/pullover2'}>    <img src={pooly} alt=""  className={fourStyles.img}/></Link>
            <div>{im4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp4+((mp4/100)*20) ))}.00  {valuta}  </span>   <span >{mp4}.00 {valuta}</span>  </div>
        </div>


        <div className={fourStyles.imageText}>
        <Link to={'/women/womencoat'}>    <img  src={womenCoat} alt=""  className={fourStyles.img}/></Link>
            <div>{iw2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp2+(wp2/100)*20 ))}.00  {valuta} </span>   <span >{wp2}.00 {valuta}</span>  </div>
        </div>

        <div className={fourStyles.imageText}>
        <Link to={'/man/tshirt2'}>   <img src={manTshirt2} alt=""  className={fourStyles.img}/></Link>
            <div>{im8}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp8+(mp8/100)*20 ))}.00  {valuta}  </span>   <span >{mp8}.00 {valuta}</span>  </div>
        </div>


        <div className={fourStyles.imageText}>
        <Link to={'/women/womenjacket2'}>     <img  src={womenJacket2} alt="" className={fourStyles.img} /></Link>
            <div>{iw3}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp3+(wp3/100)*20 ))}.00  {valuta} </span>   <span >{wp3}.00 {valuta}</span>  </div>
        </div>

        
        <div className={fourStyles.imageText}>
        <Link to={'/kid/jeans2'}>  <img  src={kidJeans2} alt=""  className={fourStyles.img}/></Link>
            <div>{ik4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp4+(kp4/100)*20 ))}.00  {valuta} </span>   <span >{kp4}.00 {valuta}</span>  </div>
        </div>



 
     


</div>

</Marquee>

          



    </div>
  )
}

export default Four