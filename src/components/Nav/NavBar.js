import React, { useState ,useEffect} from 'react'

import navStyles from '../../Styles/Nav/Nav.module.css'

import {GiMonclerJacket} from 'react-icons/gi'
import {FaCcVisa, FaBars,FaCcMastercard,FaAppleAlt} from 'react-icons/fa'
import { SiNetflix } from 'react-icons/si'
import {AiOutlineShoppingCart,AiOutlineSearch,AiOutlineArrowRight,AiOutlineGooglePlus,AiOutlineTwitter} from  'react-icons/ai'
import ReactCountryFlag from "react-country-flag"
import {Dropdown,DropdownButton} from 'react-bootstrap'
import {ImCross} from 'react-icons/im'


import {langEng , langGer ,langSerb} from '../../Store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

import {  Link } from "react-router-dom";





const users= [
  {id:1, name:"Women",link:"/women"},
  {id:2,name:"Women Jacket",link:"/women/womenjacket"},
  {id:3,name:"Women Jenas",link:"/women/jeans"},
  {id:4,name:"Women Heels",link:"/women/heels"},
  {id:5,name:"Women Tshirt",link:"/women/tshirt"},

  {id:6,name:"Men",link:"/men"},
  {id:7,name:"Man Jacket",link:"/man/manjacket"},
  {id:8,name:"Man Tshirt",link:"/man/tshirt"},
  {id:9,name:"Man Shoes",link:"/man/shoes1"},

  {id:10,name:"Kid",link:"/kid"},
  {id:11,name:"Kid Jacket",link:"/kid/jacket"},
  {id:12,name:"Kid Shoes",link:"/kid/shoe4"},
]


function NavBar() {
  const [input,setInput]=useState('')


     const [laz,setLaz]=useState(false)
     const [laz2,setLaz2]=useState(false)
     const [laz3,setLaz3]=useState(false)
     const [laz4,setLaz4]=useState(false)

     const[laz768main,setLaz768main]=useState(false)
     const [laz5,setLaz5]=useState(false)
     const [laz6,setLaz6]=useState(false)
     const [laz7,setLaz7]=useState(false)
     const [laz8,setLaz8]=useState(false)



     //Gender Var
     const women = useSelector((state) => state.counter.women)
     const kid = useSelector((state) => state.counter.kid)
     const man = useSelector((state) => state.counter.man)
     const home = useSelector((state) => state.counter.home)


    
    //Flag change
    const flag = useSelector((state) => state.counter.flag)

    //Nav items Row 1
    const row1Item1 = useSelector((state) => state.counter.row1Val1)
    const row1Item2 = useSelector((state) => state.counter.row1Val2)
    const row1Item3 = useSelector((state) => state.counter.row1Val3)
    const row1Item4 = useSelector((state) => state.counter.row1Val4)
    const row1Item5 = useSelector((state) => state.counter.row1Val5)
    const row1Item6 = useSelector((state) => state.counter.row1Val6)


    //Nav items Row 2
    const row2Item1 = useSelector((state) => state.counter.row2Val1)
    const row2Item2 = useSelector((state) => state.counter.row2Val2)
    const row2Item3 = useSelector((state) => state.counter.row2Val3)
    const row2Item4 = useSelector((state) => state.counter.row2Val4)
    const row2Item5 = useSelector((state) => state.counter.row2Val5)
    const row2Item6 = useSelector((state) => state.counter.row2Val6)
    const row2Item7 = useSelector((state) => state.counter.row2Val7)
    const row2Item8 = useSelector((state) => state.counter.row2Val8)
    const row2Item9 = useSelector((state) => state.counter.row2Val9)


      //Nav items Row 3
      const row3Item1 = useSelector((state) => state.counter.row3Val1)
      const row3Item2 = useSelector((state) => state.counter.row3Val2)
      const row3Item3 = useSelector((state) => state.counter.row3Val3)
      const row3Item4 = useSelector((state) => state.counter.row3Val4)
      const row3Item5 = useSelector((state) => state.counter.row3Val5)



         //Nav items Row 4
      const row4Item1 = useSelector((state) => state.counter.row4Val1)
      const row4Item2 = useSelector((state) => state.counter.row4Val2)
      const row4Item3 = useSelector((state) => state.counter.row4Val3)
      const row4Item4 = useSelector((state) => state.counter.row4Val4)
      const row4Item5 = useSelector((state) => state.counter.row4Val5)
      const row4Item6 = useSelector((state) => state.counter.row4Val6)
      const row4Item7 = useSelector((state) => state.counter.row4Val7)


     //Store value
      const value = useSelector((state) => state.counter.value)

      //Footer items

      const footerRow3val1 =useSelector((state)=>state.counter.footerRow3val1)
      const footerRow3val2 =useSelector((state)=>state.counter.footerRow3val2)
      const footerRow3val5 =useSelector((state)=>state.counter.footerRow3val5)
      const footerRow4val1 =useSelector((state)=>state.counter.footerRow4val1)
      const footerRow4val2 =useSelector((state)=>state.counter.footerRow4val2)
      const footerRow4val3 =useSelector((state)=>state.counter.footerRow4val3)


    const dispatch = useDispatch()

  return (

   <div>
    

    <div className={navStyles.main}>

        <div className={navStyles.logo}>
          <div><GiMonclerJacket style={{color: "red"}}/> <Link to={'/'}>  Fashion</Link> </div>
           
        </div>


        <div className={navStyles.navItems}>

        <li onMouseOver={()=>{
          setLaz(true)
          setLaz2(false)
          setLaz3(false)

         } }> < Link to={"/women"}>{women}</Link></li>

       <li  onMouseOver={()=>{
       setLaz(false)
       setLaz2(true)
       setLaz3(false)
       setLaz4(false)
      
       }}> <Link to={"/kid"}> {kid}</Link></li>

            <li 
            onMouseOver={()=>{
              setLaz(false)
              setLaz2(false)
              setLaz3(true)
              setLaz4(false)
             
              }}
            ><Link to={"/man"}>{man}</Link></li>

            <li
             onMouseOver={()=>{
              setLaz(false)
              setLaz2(false)
              setLaz3(false)
              setLaz4(false)
             
              }}
            ><Link to={"/"}>{home}</Link></li>

           <AiOutlineSearch 
            onMouseOver={()=>{
              setLaz(false)
              setLaz2(false)
              setLaz3(false)
              setLaz4(true)
             
              }}

         />


           <DropdownButton size='sm' title={<ReactCountryFlag countryCode={flag} svg />}>
            <Dropdown.Item onClick={()=>{dispatch(langEng())}}>EN <ReactCountryFlag countryCode="US" svg  /></Dropdown.Item>
             <Dropdown.Item onClick={()=>{dispatch(langGer())}}>DE <ReactCountryFlag countryCode="DE" svg /></Dropdown.Item>
             <Dropdown.Item onClick={()=>{dispatch(langSerb())}}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>
         </DropdownButton>   
 
        <li><Link to={"/shop"}> <AiOutlineShoppingCart /><span>{value}</span></Link> </li>  


        </div>



        </div>


      { laz  ?

        <div className={navStyles.divOnMouseOverMain} onMouseLeave={()=>{
          setLaz(false)
         setLaz2(false)
         setLaz3(false)
         }}>

            <div className={navStyles.divOnMouseOverFirst}>




                <div>
                    <li><Link to={'/women'}>{row1Item1}</Link> </li>
                    <li><Link to={'/women/shoe1'}>{row1Item2}</Link> </li>
                    <li><Link to={'/women/skirt'}>{row1Item3}</Link> </li>
                    <li><Link to={'/women/heels'}>{row1Item4}</Link> </li>
                    <li><Link to={'/women/tshirt'}>{row1Item5}</Link> </li>
                    <li><Link to={'/shop'}>{row1Item6}</Link> </li>
                </div>





                <div>
                    <li><Link to={'/women'}>{row2Item1}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item2}</Link> </li>
                    <li><Link to={'/women/womenjacket2'}>{row2Item3}</Link> </li>
                    <li><Link to={'/women/womenjacket'}>{row2Item4}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item5}</Link> </li>
                    <li><Link to={'/women/womenjacket2'}>{row2Item6}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item7}</Link> </li>
                    <li><Link to={'/women/womencoat'}>{row2Item8}</Link> </li>
                    <li><Link to={'/shop'}>{row2Item9}</Link> </li>

                </div>



                <div>
                    <li><Link to={'/women'}>{row3Item1}</Link> </li>
                    <li><Link to={'/women/tshirt2'}>{row3Item2}</Link> </li>
                    <li><Link to={'/women/hoodie'}>{row3Item3}</Link> </li>
                    <li><Link to={'/women/tshirt'}>{row3Item4}</Link> </li>
                    <li><Link to={'/shop'}>{row3Item5}</Link> </li>
                             
 

                </div>



                <div>
                    <li><Link to={'/women'}>{row4Item1}</Link> </li>
                    <li><Link to={'/women/skirt'}>{row4Item2}</Link> </li>
                    <li><Link to={'/women/jeans'}>{row4Item3}</Link> </li>
                    <li><Link to={'/women/heels2'}>{row4Item4}</Link> </li>
                    <li><Link to={'/women/shoe1'}>{row4Item5}</Link> </li>
                    <li><Link to={'/women/heels'}>{row4Item6}</Link> </li>
                    <li><Link to={'/shop'}>{row4Item7}</Link> </li>

                </div>
               



                </div>

              

             

               
              
              

            


        </div>


          : ''}










          {/* Kid Nav */}
      { laz2  ?

<div className={navStyles.divOnMouseOverMain} onMouseLeave={()=>{
  setLaz(false)
  setLaz2(false)
  setLaz3(false)

  }}>

    <div className={navStyles.divOnMouseOverFirst}>

        <div>
            <li><Link to={'/kid'}>{row1Item1}</Link> </li>
            <li><Link to={'/kid/shoe3'}>{row1Item2}</Link> </li>
            <li><Link to={'/kid/shoe1'}>{row1Item3}</Link> </li>
            {/* <li><a href="">{row1Item4}</a> </li> */}
            <li><Link to={'/kid/shoe2'}>{row1Item5}</Link> </li>
            <li><Link to={'/shop'}>{row1Item6}</Link> </li>
        </div>





        <div>
            <li><Link to={'/kid'}>{row2Item1}</Link> </li>
            <li><Link to={'/kid/jacket'}>{row2Item2}</Link> </li>
            <li><Link to={'/kid/jacket2'}>{row2Item3}</Link> </li>
            <li><Link to={'/kid/jacket'}>{row2Item4}</Link> </li>
            <li><Link to={'/kid/jacket2'}>{row2Item5}</Link> </li>
           {/* {/* <li><a href="">{row2Item6}</a> </li> */}
             <li><Link to={'/kid/jacket'}>{row2Item7}</Link> </li>
            {/* <li><a href="">{row2Item8}</a> </li>  */}
            <li><Link to={'/shop'}>{row2Item9}</Link> </li>

        </div>



        <div>
            <li><Link to={'/kid'}>{row3Item1}</Link> </li>
            <li><Link to={'/kid/hoodie'}>{row3Item2}</Link> </li>
            <li><Link to={'/kid/hoodie2'}>{row3Item3}</Link> </li>
            <li><Link to={'/kid/tshirt'}>{row3Item4}</Link> </li>
            <li><Link to={'/shop'}>{row3Item5}</Link> </li>
                     


        </div>



        <div>
            <li><Link to={'/kid'}>{row4Item1}</Link> </li>
            <li><Link to={'/kid/jeans'}>{row4Item2}</Link> </li>
            <li><Link to={'/kid/jeans2'}>{row4Item3}</Link> </li>
            {/* <li><a href="">{row4Item4}</a> </li> */}
            <li><Link to={'/kid/shoe4'}> {row4Item5}</Link> </li>
            {/* <li><a href="">{row4Item6}</a> </li> */}
            <li><Link to={'/shop'}>{row4Item7}</Link> </li>

        </div>
       



        </div>

      

     

       
      
      

    


</div>


  : ''}







           {/* Man Nav */}
           { laz3  ?

<div className={navStyles.divOnMouseOverMain} onMouseLeave={()=>{
  setLaz(false)
  setLaz2(false)
  setLaz3(false)

  }}>

    <div className={navStyles.divOnMouseOverFirst}>

        <div>
            <li><Link to={'/man'}>{row1Item1}</Link> </li>
            <li><Link to={'/man/shoe1'}>{row1Item2}</Link> </li>
            <li><Link to={'/man/shoe2'}>{row1Item3}</Link> </li>
            <li><Link to={'/man/shoe3'}>{row1Item4}</Link> </li>
            {/* <li><a href="">{row1Item5}</a> </li> */}
            <li><Link to={'/shop'}>{row1Item6}</Link> </li>
        </div>





        <div>
            <li><Link to={'/man'}>{row2Item1}</Link> </li>
            <li><Link to={'/man/manjacket2'}>{row2Item2}</Link> </li>
            <li><Link to={'/man/manjacket'}>{row2Item3}</Link> </li>
            <li><Link to={'/man/manjacket2'}>{row2Item4}</Link> </li>
            {/* <li><a href="">{row2Item5}</a> </li> */}
             <li><Link to={'/man/manjacket'}>{row2Item6}</Link> </li> 
            <li><Link to={'/man/manjacket2'}>{row2Item7}</Link> </li>
             {/* <li><a href="">{row2Item8}</a> </li>   */}
            <li><Link to={'/shop'}>{row2Item9}</Link> </li>

        </div>



        <div>
            <li><Link to={'/man'}>{row3Item1}</Link> </li>
            <li><Link to={'/man/hoodie'}>{row3Item2}</Link> </li>
            <li><Link to={'/man/hoodie2'}>{row3Item3}</Link> </li>
            <li><Link to={'/man/tshirt'}>{row3Item4}</Link> </li>
            <li><Link to={'/shop'}>{row3Item5}</Link> </li>
                     


        </div>



        <div>
            <li><Link to={'/man'}>{row4Item1}</Link> </li>
            {/* <li><Link to={'/man/hoodie'}>{row4Item2}</Link> </li> */}
            <li><Link to={'/man/hoodie2'}>{row4Item3}</Link> </li>
            {/* <li><a href="">{row4Item4}</a> </li> */}
            <li><Link to={'/man/shoe4'}>{row4Item5}</Link> </li>
            {/* <li><a href="">{row4Item6}</a> </li> */}
            <li><Link to={'/shop'}>{row4Item7}</Link> </li>

        </div>
       



        </div>

      

     

       
      
      

    


</div>


  : ''}





                 {/* 
                                  Search bar */}






{ laz4  ?

<div className={navStyles.divOnMouseOverMain} onMouseLeave={()=>{
  setLaz(false)
  setLaz2(false)
  setLaz3(false)
  setLaz4(false)

  }}>

             <div className={navStyles.divOnMouseOverFirstInput}>

              
              
                <div>
                <input type="text" placeholder='Search' onChange={(a)=>{setInput(a.target.value)}} /> 


                {users.filter((val)=>{
                  if (input=='') {
                  return  ''
                    
                  }else if(val.name.toLowerCase().includes(input.toLowerCase())){
                    return val;

                  }
                }).map((el)=>
               <Link to={el.link} key={el.id} style={{color:"black",textDecoration:"none"}}> <li>{el.name}</li></Link>
                )
                 }

                </div>

            

          

                 



   


            </div>

            </div>



      

      :""}


      {/* Menu 768PX */}


<div className={navStyles.main768}>



  <div className={navStyles.logo768}>

          <div><GiMonclerJacket style={{color: "red"}}/> <Link to={'/'}>  Fashion</Link> </div>
           
        </div>

        <div className={navStyles.navItems768}>

          
        <DropdownButton size='sm' title={<ReactCountryFlag countryCode={flag} svg />}>
            <Dropdown.Item onClick={()=>{dispatch(langEng())}}>EN <ReactCountryFlag countryCode="US" svg  /></Dropdown.Item>
             <Dropdown.Item onClick={()=>{dispatch(langGer())}}>DE <ReactCountryFlag countryCode="DE" svg /></Dropdown.Item>
             <Dropdown.Item onClick={()=>{dispatch(langSerb())}}>RS <ReactCountryFlag countryCode="RS" svg /></Dropdown.Item>
         </DropdownButton>   



        <AiOutlineSearch onClick={()=>{
  setLaz5(false )
  setLaz6(false)
  setLaz7(false)
  setLaz8(!laz8)
  setLaz768main(true)

}}/>

       { !laz768main ? <FaBars onClick={()=>{ 
        setLaz768main(!laz768main)
        setLaz8(false) 
      }}/>

        : <ImCross style={{fontSize:"1rem"}}
        onClick={()=>{ 
          setLaz768main(!laz768main)
          setLaz8(false) 
        }}
         />}


        <span><Link to="/shop" style={{textDecoration:"none",color:"black"}}> <AiOutlineShoppingCart /> {value}</Link></span>
   

          </div>

  </div>

 



{ laz768main ? 


  <div id='menu768'   className={navStyles.divOnMouseOverMain768}>

<div className={navStyles.divOnMouseOverFirst768}>

  {laz8 ?

  <div style={{marginBottom:"20px"}} className={navStyles.serchBar768}>
    <input type="text"   placeholder='Search' onChange={(a)=>{setInput(a.target.value)}}/>

              {users.filter((val)=>{
                  if (input=='') {
                  return  ''
                    
                  }else if(val.name.toLowerCase().includes(input.toLowerCase())){
                    return val;

                  }
                }).map((el)=>
               <Link to={el.link} key={el.id} style={{color:"black",textDecoration:"none"}}> <li>{el.name}</li></Link>
                )
                 }
    </div>

:""}

  <li> {row1Item1} </li>
 <li onClick={()=>{
  setLaz5(!laz5 )
  setLaz6(false)
  setLaz7(false)
  setLaz8(false)

}} style={{borderBottom:"2px solid black"}}> {women} <AiOutlineArrowRight /> </li>


   {laz5 ?

   <div style={{ textDecoration:"none"}}>


                    <li><Link to={'/women'}>{row1Item1}</Link> </li>
                    <li><Link to={'/women/shoe1'}>{row1Item2}</Link> </li>
                    <li><Link to={'/women/skirt'}>{row1Item3}</Link> </li>
                    <li><Link to={'/women/heels'}>{row1Item4}</Link> </li>
                    <li><Link to={'/women/tshirt'}>{row1Item5}</Link> </li>
                    <li  style={{marginBottom:"30px"}}><Link to={'/shop'}>{row1Item6}</Link> </li>
               





            
                    <li><Link to={'/women'}>{row2Item1}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item2}</Link> </li>
                    <li><Link to={'/women/womenjacket2'}>{row2Item3}</Link> </li>
                    <li><Link to={'/women/womenjacket'}>{row2Item4}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item5}</Link> </li>
                    <li><Link to={'/women/womenjacket2'}>{row2Item6}</Link> </li>
                    <li><Link to={'/women/womenjacket3'}>{row2Item7}</Link> </li>
                    <li><Link to={'/women/womencoat'}>{row2Item8}</Link> </li>
                    <li  style={{marginBottom:"30px"}}><Link to={'/shop'}>{row2Item9}</Link> </li>

             



              
                    <li><Link to={'/women'}>{row3Item1}</Link> </li>
                    <li><Link to={'/women/tshirt2'}>{row3Item2}</Link> </li>
                    <li><Link to={'/women/hoodie'}>{row3Item3}</Link> </li>
                    <li><Link to={'/women/tshirt'}>{row3Item4}</Link> </li>
                    <li  style={{marginBottom:"30px"}}><Link to={'/shop'}>{row3Item5}</Link> </li>
                             
 



              
                    <li><Link to={'/women'}>{row4Item1}</Link> </li>
                    <li><Link to={'/women/skirt'}>{row4Item2}</Link> </li>
                    <li><Link to={'/women/jeans'}>{row4Item3}</Link> </li>
                    <li><Link to={'/women/heels2'}>{row4Item4}</Link> </li>
                    <li><Link to={'/women/shoe1'}>{row4Item5}</Link> </li>
                    <li><Link to={'/women/heels'}>{row4Item6}</Link> </li>
                    <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row4Item7}</Link> </li>

               
               


   </div>
   
  :""}





<li onClick={()=>{
  setLaz5(false )
  setLaz6(!laz6)
  setLaz7(false)
  setLaz8(false)

}} style={{borderBottom:"2px solid black"}}>{kid} <AiOutlineArrowRight /> </li>

{laz6 ?

<div>



            <li><Link to={'/kid'}>{row1Item1}</Link> </li>
            <li><Link to={'/kid/shoe3'}>{row1Item2}</Link> </li>
            <li><Link to={'/kid/shoe1'}>{row1Item3}</Link> </li>
            {/* <li><a href="">{row1Item4}</a> </li> */}
            <li><Link to={'/kid/shoe2'}>{row1Item5}</Link> </li>
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row1Item6}</Link> </li>

 
            <li><Link to={'/kid'}>{row2Item1}</Link> </li>
            <li><Link to={'/kid/jacket'}>{row2Item2}</Link> </li>
            <li><Link to={'/kid/jacket2'}>{row2Item3}</Link> </li>
            <li><Link to={'/kid/jacket'}>{row2Item4}</Link> </li>
            <li><Link to={'/kid/jacket2'}>{row2Item5}</Link> </li>
           {/* {/* <li><a href="">{row2Item6}</a> </li> */}
             <li><Link to={'/kid/jacket'}>{row2Item7}</Link> </li>
            {/* <li><a href="">{row2Item8}</a> </li>  */}
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row2Item9}</Link> </li>

   
            <li><Link to={'/kid'}>{row3Item1}</Link> </li>
            <li><Link to={'/kid/hoodie'}>{row3Item2}</Link> </li>
            <li><Link to={'/kid/hoodie2'}>{row3Item3}</Link> </li>
            <li><Link to={'/kid/tshirt'}>{row3Item4}</Link> </li>
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row3Item5}</Link> </li>
                     



            <li><Link to={'/kid'}>{row4Item1}</Link> </li>
            <li><Link to={'/kid/jeans'}>{row4Item2}</Link> </li>
            <li><Link to={'/kid/jeans2'}>{row4Item3}</Link> </li>
            {/* <li><a href="">{row4Item4}</a> </li> */}
            <li><Link to={'/kid/shoe4'}> {row4Item5}</Link> </li>
            {/* <li><a href="">{row4Item6}</a> </li> */}
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row4Item7}</Link> </li>

       




  </div>



:"" }





 <li 
 onClick={()=>{
  setLaz5(false )
  setLaz6(false)
  setLaz7(!laz7)
  setLaz8(false)

 }}

  style={{borderBottom:"2px solid black"}}> {man} <AiOutlineArrowRight /> </li>

  {laz7 ?

  <div>

            <li><Link to={'/man'}>{row1Item1}</Link> </li>
            <li><Link to={'/man/shoe1'}>{row1Item2}</Link> </li>
            <li><Link to={'/man/shoe2'}>{row1Item3}</Link> </li>
            <li><Link to={'/man/shoe3'}>{row1Item4}</Link> </li>
            {/* <li><a href="">{row1Item5}</a> </li> */}
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row1Item6}</Link> </li>


            <li><Link to={'/man'}>{row2Item1}</Link> </li>
            <li><Link to={'/man/manjacket2'}>{row2Item2}</Link> </li>
            <li><Link to={'/man/manjacket'}>{row2Item3}</Link> </li>
            <li><Link to={'/man/manjacket2'}>{row2Item4}</Link> </li>
            {/* <li><a href="">{row2Item5}</a> </li> */}
             <li><Link to={'/man/manjacket'}>{row2Item6}</Link> </li> 
            <li><Link to={'/man/manjacket2'}>{row2Item7}</Link> </li>
             {/* <li><a href="">{row2Item8}</a> </li>   */}
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row2Item9}</Link> </li>


 
            <li><Link to={'/man'}>{row3Item1}</Link> </li>
            <li><Link to={'/man/hoodie'}>{row3Item2}</Link> </li>
            <li><Link to={'/man/hoodie2'}>{row3Item3}</Link> </li>
            <li><Link to={'/man/tshirt'}>{row3Item4}</Link> </li>
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row3Item5}</Link> </li>
                     

            <li><Link to={'/man'}>{row4Item1}</Link> </li>
            {/* <li><Link to={'/man/hoodie'}>{row4Item2}</Link> </li> */}
            <li><Link to={'/man/hoodie2'}>{row4Item3}</Link> </li>
            {/* <li><a href="">{row4Item4}</a> </li> */}
            <li><Link to={'/man/shoe4'}>{row4Item5}</Link> </li>
            {/* <li><a href="">{row4Item6}</a> </li> */}
            <li style={{marginBottom:"30px"}}><Link to={'/shop'}>{row4Item7}</Link> </li>


  </div>

  :""

  }


 <li style={{marginBottom:"50px"}}>{row4Item1} </li>

  <li > {footerRow3val1} </li>

  <li> {footerRow3val2} </li>

  <li style={{marginBottom:"50px"}}> {footerRow3val5} </li>


  <li > {footerRow4val1} </li>
  <li > {footerRow4val2} </li>
  <li> {footerRow4val3} </li>
  <hr></hr>

  <li>
    <FaCcVisa className={navStyles.cards} /> <FaCcMastercard className={navStyles.cards}/> 
  <FaAppleAlt  className={navStyles.cards}/> <AiOutlineGooglePlus className={navStyles.cards}/>
  <AiOutlineTwitter className={navStyles.cards}/> <SiNetflix className={navStyles.cards}/>
  </li>



  




  <div>

  </div>




    

  </div>
  </div>

  :""}









                      


    </div>
  )
}

export default NavBar