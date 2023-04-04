import React from 'react'
import footerStyle from '../../Styles/Footer/Footer.module.css'
import { AiOutlineFacebook,AiOutlineYoutube ,AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitter  } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Footer() {

  const footerRow1val1 =useSelector((state) => state.counter.footerRow1val1)
  const footerRow1val2 =useSelector((state) => state.counter.footerRow1val2)
  const footerRow1val3 =useSelector((state) => state.counter.footerRow1val3)
  const footerRow1val4 =useSelector((state) => state.counter.footerRow1val4)
  const footerRow1val5 =useSelector((state) => state.counter.footerRow1val5)
  const footerRow1val6=useSelector((state) => state.counter.footerRow1val6)


  const footerRow2val1 =useSelector((state) => state.counter.footerRow2val1)
  const footerRow2val2 =useSelector((state) => state.counter.footerRow2val2)
  const footerRow2val3 =useSelector((state) => state.counter.footerRow2val3)
  const footerRow2val4 =useSelector((state) => state.counter.footerRow2val4)
  const footerRow2val5 =useSelector((state) => state.counter.footerRow2val5)
  const footerRow2val6=useSelector((state) => state.counter.footerRow2val6)

  const footerRow3val1 =useSelector((state) => state.counter.footerRow3val1)
  const footerRow3val2 =useSelector((state) => state.counter.footerRow3val2)
  const footerRow3val3 =useSelector((state) => state.counter.footerRow3val3)
  const footerRow3val4 =useSelector((state) => state.counter.footerRow3val4)
  const footerRow3val5 =useSelector((state) => state.counter.footerRow3val5)
  const footerRow3val6=useSelector((state) => state.counter.footerRow3val6)

  
  const footerRow4val1 =useSelector((state) => state.counter.footerRow4val1)
  const footerRow4val2 =useSelector((state) => state.counter.footerRow4val2)
  const footerRow4val3 =useSelector((state) => state.counter.footerRow4val3)




  return (
    <div className={footerStyle.main}>
        <div className={footerStyle.empty}></div>

          <div className={footerStyle.firstDiv}></div>



        <div className={footerStyle.secondDiv}>
            <div>{footerRow4val1}</div>
            <div>{footerRow4val2}</div>
            <div>{footerRow4val3}</div>


        </div>


       <div className={footerStyle.empty}></div>
    </div>
  )
}

export default Footer