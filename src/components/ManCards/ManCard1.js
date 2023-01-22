import React, { useEffect, useState } from "react";
import Footer from '../Footer/Footer'
import NavBar from '../Nav/NavBar'

import { useSelector, useDispatch } from 'react-redux'

import womenCardStyle from '../../Styles/WomenCards.module.css'

import womenJacket from '../../Img/man/jakna.jpg'
import {TbHanger} from 'react-icons/tb'

import { Link, useNavigate } from "react-router-dom";

import  { nizArray ,incrementByAmount  ,incrementBankAcount} from '../../Store/counterSlice'

function MenCard1() {
  let history = useNavigate();
  
  const [laz,setLaz]=useState(false)
  const [laz2,setLaz2]=useState(false)

  const [btnValue,setBtnValue]=useState('')




  const row2Item3 = useSelector((state) => state.counter.row2Val3)
  const row2Item4 = useSelector((state) => state.counter.row2Val4)



  const im1 = useSelector((state) => state.counter.im1)
  const mp1 = useSelector((state) => state.counter.mp1)
  const valuta = useSelector((state) => state.counter.valuta)

  const value = useSelector((state) => state.counter.value)


  const findSize = useSelector((state)=>state.counter.findSize)
  const fourText1 = useSelector((state) => state.counter.fourText1)
  const fourText6 = useSelector((state) => state.counter.fourText6)
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  }, []);

  
  const slideText = useSelector((state) => state.counter.slideText)

  const niz = useSelector((state) => state.counter.niz)

  const dispatch = useDispatch()

  return (
    <div>
        <NavBar />
        <div className={womenCardStyle.main}>
          <div className={womenCardStyle.emptyDiv}></div>

          <marquee className={womenCardStyle.slideTextDiv} direction="right">
               {slideText}
       </marquee>



       <div className={womenCardStyle.secondDivImage}>

        <img src={womenJacket} alt="" className={womenCardStyle.img} />


        <div className={womenCardStyle.secondDivImageText}>

          <div>{   row2Item3  } ||  {  row2Item4  }<hr></hr> </div>
          <div> {im1} <hr></hr> </div>

         <div>  {mp1} {valuta} <hr></hr></div>  

         <div>

          <button className="spans" disabled={laz} onClick={(a)=>{
            a.target.style.color="black"
            a.target.style.backgroundColor="white"
            setLaz(true)
           
        setBtnValue('S')

            
          }}>S</button>


           <button className="spans" disabled={laz} onClick={(a)=>{
            a.target.style.color="black"
            a.target.style.backgroundColor="white"
           
            
               setLaz(true) 
               setBtnValue('M')
        
          
            }}>M</button>

            <button className="spans" disabled={laz} onClick={(a)=>{
            a.target.style.color="black"
            a.target.style.backgroundColor="white"
            setLaz(true)
            setBtnValue('L')
          
             }}>L</button>

           <button className="spans" disabled={laz} onClick={(a)=>{
            a.target.style.color="black"
            a.target.style.backgroundColor="white"
            setLaz(true)
            setBtnValue('XL')
       
            }}>XL</button>

          
        
         
          <hr></hr> </div>  
         
         <div><hr></hr></div>
         <div>{findSize} <TbHanger className={womenCardStyle.hanger} /> <hr></hr></div>

         <div>id : 01054090f21111ec932b25 <hr></hr></div>

     <Link to="/shop">  <button style={{width:"100%"}}  disabled={!laz} onClick={()=>{ 
          
             setLaz2(true)

             dispatch(incrementByAmount(1))

             dispatch(incrementBankAcount(mp1))

             dispatch(nizArray({id:Date.now().toString(), imgLink:"/man/manjacket",  imgName :"/Img/man/jakna.jpg", name:im1, size:btnValue,price:mp1,}) )
        
   
          }}>  ADD TO CARD  </button></Link>
         <div><hr></hr></div>


        </div>



       </div>

       <div className={womenCardStyle.desciption}>

        <div>{fourText1}</div>

        <div>
       
        {fourText6}

   

       </div>

       </div>

   </div>

        <Footer />

    </div>
  )
}

export default MenCard1;