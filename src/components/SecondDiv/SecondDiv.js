import React from 'react'

import secondDivStyles from '../../Styles/Second/Second.module.css'
import { useSelector, useDispatch } from 'react-redux'

import womenCoat from '../../Img/women/womenCoat.jpg'
import muskaJakna from '../../Img/man/muskaJakna.jpg'
import childJacket from '../../Img/kid/jakna.jpg'
import womenJeans from '../../Img/women/jeans.jpg'


import patike from '../../Img/man/patike3.jpg'
import womenJacket3 from '../../Img/women/womenJacket3.jpg'
import skirt from '../../Img/women/skirt.jpg'

import {Link} from 'react-router-dom'




function SecondDiv() {

  const secondText1 = useSelector((state) => state.counter.secondText1)
  const secondText2 = useSelector((state) => state.counter.secondText2)


  const iw2 = useSelector((state) => state.counter.iw2)
  const im2 = useSelector((state) => state.counter.im2)
  const ik1 = useSelector((state) => state.counter.ik1)
  const iw7 = useSelector((state) => state.counter.iw7)

  const iw12 = useSelector((state) => state.counter.iw12)
  const iw4 = useSelector((state) => state.counter.iw4)
  const im11 = useSelector((state) => state.counter.im11)



  const wp2 = useSelector((state) => state.counter.wp2)
  const mp2 = useSelector((state) => state.counter.mp2)
  const kp1 = useSelector((state) => state.counter.kp1)
  const wp7 = useSelector((state) => state.counter.wp7)

  const wp12 = useSelector((state) => state.counter.wp12)
  const wp4 = useSelector((state) => state.counter.wp4)
  const mp11 = useSelector((state) => state.counter.mp11)


  const valuta = useSelector((state) => state.counter.valuta)
  return (
    <div className={secondDivStyles.main}>

    

      <div className={secondDivStyles.firstText}>{secondText1}</div>


      <div className={secondDivStyles.firstImageDiv}>




        <div className={secondDivStyles.imageText}>
         <Link to={"/women/womencoat"}> <img src={womenCoat} alt="" className={secondDivStyles.img} /></Link>  
            <div>{iw2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp2+((wp2/100)*20) ))}.00  {valuta}  </span>   <span >{wp2}.00 {valuta}</span>  </div>
        </div>


        <div className={secondDivStyles.imageText}>
        <Link to={"/man/manjacket2"}>  <img  className={secondDivStyles.img} src={muskaJakna} alt="" /></Link>
            <div>{im2}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp2+(mp2/100)*20 ))}.00  {valuta} </span>   <span >{mp2}.00 {valuta}</span>  </div>
        </div>

        <div className={secondDivStyles.imageText}>
        <Link to={"/kid/jacket"}>     <img src={childJacket} alt="" className={secondDivStyles.img}/></Link>
            <div>{ik1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp1+(kp1/100)*20 ))}.00  {valuta}  </span>   <span >{kp1}.00 {valuta}</span>  </div>
        </div>


        <div className={secondDivStyles.imageText}>
        <Link to={"/women/jeans"}>   <img  src={womenJeans} alt="" className={secondDivStyles.img} /></Link>
            <div>{iw7}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp7+(wp7/100)*20 ))}.00  {valuta} </span>   <span >{wp7}.00 {valuta}</span>  </div>
        </div>



   

      </div>


      <div className={secondDivStyles.firstText}>{secondText2}</div>


      <div className={secondDivStyles.firstImageDiv}>


        
      <div className={secondDivStyles.imageText}>
      <Link to={"/kid/jacket"}>    <img src={childJacket} alt="" className={secondDivStyles.img} /></Link>
            <div>{ik1}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(kp1+((kp1/100)*20) ))}.00  {valuta}  </span>   <span >{kp1}.00 {valuta}</span>  </div>
        </div>


        <div className={secondDivStyles.imageText}>
        <Link to={"/women/skirt"}>    <img  src={skirt} alt="" className={secondDivStyles.img} /></Link>
            <div>{iw12}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp12+(wp12/100)*20 ))}.00  {valuta} </span>   <span >{wp12}.00 {valuta}</span>  </div>
        </div>

        <div className={secondDivStyles.imageText}>
        <Link to={"/women/womenjacket3"}>   <img src={womenJacket3} alt=""  className={secondDivStyles.img}/></Link>
            <div>{iw4}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(wp4+(wp4/100)*20 ))}.00  {valuta}  </span>   <span >{wp4}.00 {valuta}</span>  </div>
        </div>


        <div className={secondDivStyles.imageText}>
        <Link to={"/man/shoe3"}>   <img  src={patike} alt=""  className={secondDivStyles.img}/></Link>
            <div>{im11}</div>
            <div><span style={{textDecorationLine:"line-through",paddingRight:"15px",color:"red"}}>{Math.round(Math.floor(mp11+(mp11/100)*20 ))}.00  {valuta} </span>   <span >{mp11}.00 {valuta}</span>  </div>
        </div>



      </div>



<div className={secondDivStyles.emptyDiv}> </div>

    </div>
  )
}

export default SecondDiv