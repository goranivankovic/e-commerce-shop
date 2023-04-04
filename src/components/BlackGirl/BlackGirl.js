import React from 'react'
import blackStyles from '../../Styles/Black/Black.module.css'
import {Link} from 'react-router-dom'


import { useSelector, useDispatch } from 'react-redux'

function BlackGirl() {
    const slideText = useSelector((state) => state.counter.slideText)

    const blackText1 = useSelector((state) => state.counter.blackText1)
    const blackText2 = useSelector((state) => state.counter.blackText2)
    const blackText3 = useSelector((state) => state.counter.blackText3)
    const blackText4 = useSelector((state) => state.counter.blackText4)
  return (
    <div className={blackStyles.main}>

     
       
       <marquee className={blackStyles.slideTextDiv} direction="right">
      {slideText}
</marquee>



        <div className={blackStyles.secondDiv}>

                   <div>{blackText1}</div>
                   <div>{blackText2}</div>
                    
                             <Link to={"/women"}><button>{blackText3}</button></Link>
                             <Link to={"/shop"}><button>{blackText4}</button></Link>   
                 


             </div>



 



  
    </div>
  )
}

export default BlackGirl