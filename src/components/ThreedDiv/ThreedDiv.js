import React from 'react'
import threeStyle from '../../Styles/Three/Three.module.css'

import {Link} from 'react-router-dom'

function ThreedDiv() {
  return (
    <div className={threeStyle.main}>


   <div className={threeStyle.firstDiv}>
     

        <Link to={"/man"} style={{textDecoration:"none"}}><div className={threeStyle.firstDivText}> Man  </div></Link>

 
      </div>



      <div className={threeStyle.secondDiv}>


      <Link to={"/women"} style={{textDecoration:"none"}}> <div className={threeStyle.seconDivText}>Women</div></Link>

      </div>

  


    </div>
  )
}

export default ThreedDiv