
import React, { useEffect, useState } from "react";
import Footer from '../Footer/Footer'
import NavBar from '../Nav/NavBar'

import { useSelector, useDispatch } from 'react-redux'
import shopStyle from '../../Styles/Shop/Shop.module.css'
import {ImCross} from 'react-icons/im'

import { v4 as uuidv4 } from 'uuid';

import { removeTodo  ,decrementByAmount  ,decremntBankAcount} from '../../Store/counterSlice'
import { Link } from "react-router-dom";

function ShopingCart() {
    useEffect(() => {
 
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

    

    

      
      }, []);

  const bank = useSelector((state) => state.counter.bank)
 
  const valuta = useSelector((state) => state.counter.valuta)

  const niz = useSelector((state) => state.counter.niz)

  const laz = useSelector((state) => state.counter.laz)

  const valueBank = useSelector((state) => state.counter.valueBank)


  const dispatch = useDispatch()

  


  return (
    <div>
        <NavBar />
        <div className={shopStyle.main}>

            <div className={shopStyle.emptyDiv}></div>




      
            
        {  niz.map((el,index)=>  

             <div key={el.id}  className={shopStyle.imageText}>
            

          <Link to={el.imgLink}> <img src={ el.imgName } alt="" className={shopStyle.img} /> </Link>   
 
             <div>{el.name } / {el.size} </div>
 
             <div >{el.price} {valuta} </div>
               
          
              
             <div><ImCross onClick={()=>{

             
             dispatch(decremntBankAcount(el.price))
             dispatch(decrementByAmount(1))
             dispatch(removeTodo(el.id))
              
               
              } }/></div>

             </div>  )}

                     


<div className={shopStyle.ukupno}><div>{valueBank }  : {bank} {valuta}</div>   </div>







        </div>

        <Footer />

    </div>
  )
}

export default ShopingCart