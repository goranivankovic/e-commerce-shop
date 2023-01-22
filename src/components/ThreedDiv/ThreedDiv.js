import React from 'react'
import threeStyle from '../../Styles/Three/Three.module.css'

import {Link} from 'react-router-dom'

function ThreedDiv() {
  return (
    <div className={threeStyle.main}>


   <div className={threeStyle.firstDiv}>
        <div className={threeStyle.emptyDiv}></div>

        <Link to={"/man"} style={{textDecoration:"none"}}><div className={threeStyle.firstDivText}> Man  </div></Link>

        <div className={threeStyle.firstDivImg}>

        </div>

      </div>



      <div className={threeStyle.secondDiv}>
      <div className={threeStyle.emptyDiv}></div>

      <Link to={"/women"} style={{textDecoration:"none"}}> <div className={threeStyle.seconDivText}>Women</div></Link>

        <div className={threeStyle.secondDivImg}></div>

       </div>



    </div>
  )
}

export default ThreedDiv