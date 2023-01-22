import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  laz:false,

  flag:"US",
  women:"Women",
  kid:"Kid",
  man:"Man",
  home:"Home",


  //Initial state nav row 1
  row1Val1:"New Arrivals",
  row1Val2:"New In",
  row1Val3:"PRE-AW22",
  row1Val4:"Spring-Summer 2022",
  row1Val5:"Ultra Light",
  row1Val6:"Shop all",

  //Initial state nav row 2
  row2Val1:"Jackets",
  row2Val2:"Rain Jackets",
  row2Val3:"Winter Jackets",
  row2Val4:"Light Jackets",
  row2Val5:"Quilted Jackets",
  row2Val6:"Puffer Jackets",
  row2Val7:"Parka Jackets",
  row2Val8:"Coats",
  row2Val9:"Shop all",


    //Initial state nav row 3
    row3Val1:"Tops",
    row3Val2:"Items",
    row3Val3:"Hoodie",
    row3Val4:"Tshirt",
    row3Val5:"Shop all",



       //Initial state nav row 4
       row4Val1:"Bootms",
       row4Val2:"Skirt",
       row4Val3:"Pants",
       row4Val4:"Stilettos",
       row4Val5:"Shoes",
       row4Val6:"Heels",
       row4Val7:"Shop all",
 


       slideText:"Best offers best discounts up to -20%",

       blackText1:"Packed",
       blackText2:"New Travel Bags",
       blackText3:"Explore",
       blackText4:"Shop",

       secondText1:"We recommend",
       secondText2:"Bestseller",


       iw1:"Women Jacket",
       iw2:"Women Coat",
       iw3:"Women Jacket 2",
       iw4:"Women Jacket 3",
      
       iw5:"Women Hoody",
       iw6:"Women Tshirt",
       iw7:"Women Jeans",
       iw8:"Women Tshirt 2",
      
       iw9:"Women Sneakers",
       iw10:"Women Heels",
       iw11:"Women Heels 2",
       iw12:"Women Skirt",
      
      
        wp1:30,
        wp2:39,
        wp3:36,
        wp4:54,
       
        wp5:14,
        wp6:9,
        wp7:16,
        wp8:10,
       
        wp9:37,
        wp10:20,
        wp11:13,
        wp12:17,


        
       im1:"Men Jacket",
       im2:"Men Jacket 2",
       im3:"Men Pullover",
       im4:"Men pullover 2",
      
       im5:"Men Hoody",
       im6:"Men Hoody 2",
       im7:"Men Tshirt",
       im8:"Men Tshirt 2",
      
       im9:"Men Sneakers",
       im10:"Men Sneakers 2",
       im11:"Men Sneakers 3",
       im12:"Men Shoes",
      
      
        mp1:39,
        mp2:48,
        mp3:11,
        mp4:10,
       
        mp5:13,
        mp6:9,
        mp7:19,
        mp8:12,
       
        mp9:36,
        mp10:38,
        mp11:42,
        mp12:18,



       ik1:"Kid Jacket",
       ik2:"Kid Jacket 2",
       ik3:"Kid Jeans",
       ik4:"Kid Jeans 2",
      
       ik5:"Kid Hoody",
       ik6:"Kid Hoody 2",
       ik7:"Kid Tshirt",
       ik8:"Kid Tshirt 2",
      
       ik9:"Kid Sneakers",
       ik10:"Kid Sneakers 2",
       ik11:"Kid Sneakers 3",
       ik12:"Kid Sneakers 4",
      
      
        kp1:42,
        kp2:58,
        kp3:14,
        kp4:13,
       
        kp5:15,
        kp6:19,
        kp7:9,
        kp8:12,
       
        kp9:45,
        kp10:29,
        kp11:49,
        kp12:29,

        fourText1:"Free delivery",
        fourText2:"Refund 60 Days Money",
        fourText3:"New Discounts and Promotions",
        fourText4:"Dispatch within 24 business hours",
        fourText5:"2-year product warranty 30-day returns",
        fourText6:"By signing up to newsletters, you agree to the Privacy Policy. I consent to Rains collecting my contact information and for it to be used to send me product promotions and other services as a part of general marketing. I can revoke my consent at any time by clicking on the unsubscribe link at the bottom of all newsletters.",

        findSize:"Find your Size",



        footerRow1val1:"PRODUCTS",
        footerRow1val2:"youTube Channel",
        footerRow1val3:"fashion  Wicks Podcast",
        footerRow1val4:"my Book",
        footerRow1val5:"30 Day Kick Start Plan",
        footerRow1val6:"Learn in 15 minutes",



        
        footerRow2val1:"COMMUNITY",
        footerRow2val2:"Blog",
        footerRow2val3:"my Book",
        footerRow2val4:"ABOUT US",
        footerRow2val5:"30 Day Kick Start Plan",
        footerRow2val6:"Learn in 15 minutes",


         
        footerRow3val1:"CONTACT US",
        footerRow3val2:"Support Centre",
        footerRow3val3:"Newsletter",
        footerRow3val4:"Learn",
        footerRow3val5:"Careers",
        footerRow3val6:"Learn in 15 minutes",


            
        footerRow4val1:"© FASHION COACH",
        footerRow4val2:"2022TERMS & CONDITION",
        footerRow4val3:"SPRIVACY POLICYCOOKIE POLICY",

      




       
        niz:[],
        valueBank:"Subtotal",
      bank:0,



      
       valuta:"$"








  

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    langEng: (state) => {

      state.flag="US"
      state.women="Women"
      state.kid="Kid"
      state.man="Man"
      state.home="Home"


        //State nav row 1
      state.row1Val1 ="New Arrivals"
      state.row1Val2 ="New In"
      state.row1Val3="PRE-AW22"
      state.row1Val4="Spring-Summer 2022"
      state.row1Val5="Ultra Light"
      state.row1Val6="Shop all"

     //State nav row 2
     state.row2Val1="Jackets"
     state.row2Val2="Rain Jackets"
     state.row2Val3="Winter Jackets"
     state.row2Val4="Light Jackets"
     state.row2Val5="Quilted Jackets"
     state.row2Val6="Puffer Jackets"
     state.row2Val7="Parka Jackets"
     state.row2Val8="Coats"
     state.row2Val9="Shop all"


    //State nav row 3
    state.row3Val1="Tops"
    state.row3Val2="Items"
    state.row3Val3="Hoodie"
    state.row3Val4="Tshirt"
    state.row3Val5="Shop all"


 //State nav row 4
    state.row4Val1="Bootms"
    state.row4Val2="Skirt"
    state.row4Val3="Pants"
    state.row4Val4="Stilettos"
    state.row4Val5="Shoes"
    state.row4Val6="Heels"
    state.row4Val7="Shop all"



    state.slideText="Best offers best discounts up to -20%"

    state.blackText1="Packed"
    state.blackText2="New Travel Bags"
    state.blackText3="Explore"
    state.blackText4="Shop"


    state.secondText1="We recommend"
    state.secondText2="Bestseller"



    state.iw1="Women Jacket"
    state.iw2="Women Coat"
    state.iw3="Women Jacket 2"
    state.iw4="Women Jacket 3"

   
    state.iw5="Women Hoody"
    state.iw6="Women Tshirt"
    state.iw7="Women Jeans"
    state.iw8="Women Tshirt 2"
   
    state.iw9="Women Sneakers"
    state.iw10="Women Heels"
    state.iw11="Women Heels 2"
    state.iw12="Women Skirt"
   
   
     state.wp1=30
     state.wp2=39
     state.wp3=36
     state.wp4=54
    
     state.wp5=14
     state.wp6=9
     state.wp7=16
     state.wp8=10
    
     state.wp9=37
     state.wp10=20
     state.wp11=13
     state.wp12=17


       
     state.im1="Men Jacket"
     state.im2="Men Jacket 2"
     state.im3="Men Pullover"
     state.im4="Men pullover 2"
    
     state.im5="Men Hoody"
     state.im6="Men Hoody 2"
     state.im7="Men Tshirt"
     state.im8="Men Tshirt 2"
    
     state.im9="Men Sneakers"
     state.im10="Men Sneakers 2"
     state.im11="Men Sneakers 3"
     state.im12="Men Shoes"
    
    
     state.mp1=39
     state.mp2=48
     state.mp3=11
     state.mp4=10
     
     state.mp5=13
     state.mp6=9
     state.mp7=19
     state.mp8=12
     
     state.mp9=36
     state.mp10=38
     state.mp11=42
     state.mp12=18



     
     state.ik1="Kid Jacket"
     state.ik2="Kid Jacket 2"
     state.ik3="Kid Jeans"
     state.ik4="Kid Jeans 2"
    
     state.ik5="Kid Hoody"
     state.ik6="Kid Hoody 2"
     state.ik7="Kid Tshirt"
     state.ik8="Kid Tshirt 2"
    
     state.ik9="Kid Sneakers"
     state.ik10="Kid Sneakers 2"
     state.ik11="Kid Sneakers 3"
     state.ik12="Kid Sneakers 4"
    
    
     state.kp1=40
     state.kp2=58
     state.kp3=14
     state.kp4=13
     
     state.kp5=15
     state.kp6=19
     state.kp7=9
     state.kp8=12
     
     state.kp9=45
     state.kp10=29
     state.kp11=40
     state.kp12=29


      state.fourText1="Free delivery"
      state.fourText2="Refund 60 Days Money"
      state.fourText3="New Discounts and Promotions"
      state.fourText4="Dispatch within 24 business hours"
      state.fourText5="2-year product warranty 30-day returns"
      state.fourText6="By signing up to newsletters, you agree to the Privacy Policy. I consent to Rains collecting my contact information and for it to be used to send me product promotions and other services as a part of general marketing. I can revoke my consent at any time by clicking on the unsubscribe link at the bottom of all newsletters."


      state.findSize="Find your Size"



      
      state.footerRow1val1="PRODUCTS"
      state.footerRow1val2="youTube Channel"
      state.footerRow1val3="fashion  Wicks Podcast"
      state.footerRow1val4="my Book"
      state.footerRow1val5="30 Day Kick Start Plan"
      state.footerRow1val6="Learn in 15 minutes"



      
      state.footerRow2val1="COMMUNITY"
      state.footerRow2val2="Blog"
      state.footerRow2val3="my Book"
      state.footerRow2val4="ABOUT US"
      state.footerRow2val5="30 Day Kick Start Plan"
      state.footerRow2val6="Learn in 15 minutes"


       
      state.footerRow3val1="CONTACT US"
      state.footerRow3val2="Support Centre"
      state.footerRow3val3="Newsletter"
      state.footerRow3val4="Learn"
      state.footerRow3val5="Careers"
      state.footerRow3val6="Learn in 15 minutes"


          
      state.footerRow4val1="© FASHION COACH"
      state.footerRow4val2="2022TERMS & CONDITION"
      state.footerRow4val3="SPRIVACY POLICYCOOKIE POLICY"





      state.valueBank="Subtotal"
      state.niz=[]
      state.bank=0
      state.value=0


   

    state.valuta="$"

    





    },
    langGer: (state) => {

         state.flag="DE"

         state.women="Frauen"
         state.kid="Kid"
         state.man="Mann"
         state.home="Heim"
   


          //State nav row 1
          state.row1Val1 ="Neue Ankünfte"
          state.row1Val2 ="Neu In"
          state.row1Val3="VOR-AW22"
          state.row1Val4="Frühling-Sommer 2022"
          state.row1Val5="Ultraleicht"
          state.row1Val6="Alle einkaufen"
    
         //State nav row 2
         state.row2Val1="Jacken"
         state.row2Val2="Regenjacken"
         state.row2Val3="Winterjacken"
         state.row2Val4="Leichte Jacken"
         state.row2Val5="Gesteppte Jacken"
         state.row2Val6="Pufferjacken"
         state.row2Val7="Parka-Jacken"
         state.row2Val8="Mäntel"
         state.row2Val9="Alle einkaufen"
    
    
        //State nav row 3
        state.row3Val1="Oberteile"
        state.row3Val2="Westen"
        state.row3Val3="Jacken & Hemden"
        state.row3Val4="Vlies"
        state.row3Val5="Alle einkaufen"
    
    
     //State nav row 4
        state.row4Val1="Bootms"
        state.row4Val2="Regenhose"
        state.row4Val3="Hose"
        state.row4Val4="Kurze Hose"
        state.row4Val5="Schuhe"
        state.row4Val6="Fersen"
        state.row4Val7="Alle einkaufen"
    


        state.slideText="Beste Angebote beste Rabatte bis zu -20%"

        state.blackText1="Verpackt"
        state.blackText2="Neue Reisetaschen"
        state.blackText3="Entdecken"
        state.blackText4="Geschäft"


       
    state.secondText1="Wir empfehlen"
    state.secondText2="Verkaufsschlager"

    
    state.iw1="Frauen Jacke"
    state.iw2="Frauen Mantel"
    state.iw3="Frauen Jacke 2"
    state.iw4="Frauen Jacke 3"

    
    state.iw5="Damen Pullover"
    state.iw6="Frauen-T-Shirt"
    state.iw7="Frauen-Jeans"
    state.iw8="Frauen-T-Shirt 2"


    
    state.iw9="Frauen Turnschuhe"
    state.iw10="Frauen Heels"
    state.iw11="Frauen Heels 2"
    state.iw12="Frauen Rock"

    state.wp1=Math.round(Math.floor(30/1.1))
    state.wp2=Math.round(Math.floor(39/1.1))
    state.wp3=Math.round(Math.floor(36/1.1))
    state.wp4=Math.round(Math.floor(54/1.1))

    state.wp5=Math.round(Math.floor(14/1.1))
    state.wp6=Math.round(Math.floor(9/1.1))
    state.wp7=Math.round(Math.floor(16/1.1))
    state.wp8=Math.round(Math.floor(10/1.1))

    
    state.wp9=Math.round(Math.floor(37/1.1))
    state.wp10=Math.round(Math.floor(20/1.1))
    state.wp11=Math.round(Math.floor(13/1.1))
    state.wp12=Math.round(Math.floor(17/1.1))


     
    state.im1="Männer Jacke"
    state.im2="Männer Jacke 2"
    state.im3="Männer Pullover"
    state.im4="Männer Pullover 2"

    state.im5="Herren Hoody"
    state.im6="Herren Hoody 2"
    state.im7="Männer-T-Shirt"
    state.im8="Männer-T-Shirt 2"


    state.im9="Männer Turnschuhe"
    state.im10="Männer Turnschuhe 2"
    state.im11="Männer Turnschuhe 3"
    state.im12="Männerschuhe"

        
    state.mp1=Math.round(Math.floor(39/1.1))
    state.mp2=Math.round(Math.floor(48/1.1))
    state.mp3=Math.round(Math.floor(11/1.1))
    state.mp4=Math.round(Math.floor(10/1.1))

    state.mp5=Math.round(Math.floor(13/1.1))
    state.mp6=Math.round(Math.floor(9/1.1))
    state.mp7=Math.round(Math.floor(19/1.1))
    state.mp8=Math.round(Math.floor(12/1.1))

    state.mp9=Math.round(Math.floor(36/1.1))
    state.mp10=Math.round(Math.floor(38/1.1))
    state.mp11=Math.round(Math.floor(42/1.1))
    state.mp12=Math.round(Math.floor(18/1.1))


    state.ik1="Kinderjacke"
    state.ik2="Kinderjacke 2"
    state.ik3="Kid-Jeans"
    state.ik4="Kid-Jeans 2"

    state.ik5="Kinder Hoodie"
    state.ik6="Kinder Hoodie 2"
    state.ik7="Kinder T-Shirt"
    state.ik8="Kinder T-Shirt 2"

    state.ik9="Kinder Turnschuhe"
    state.ik10="Kinder Turnschuhe 2"
    state.ik11="Kinder Turnschuhe 3"
    state.ik12="Kinder Turnschuhe 4"


     
    state.kp1=Math.round(Math.floor(40/1.1))
    state.kp2=Math.round(Math.floor(58/1.1))
    state.kp3=Math.round(Math.floor(14/1.1))
    state.kp4=Math.round(Math.floor(13/1.1))

    state.kp5=Math.round(Math.floor(15/1.1))
     state.kp6=Math.round(Math.floor(19/1.1))
     state.kp7=Math.round(Math.floor(9/1.1))
     state.kp8=Math.round(Math.floor(12/1.1))

     state.kp9=Math.round(Math.floor(45/1.1))
     state.kp10=Math.round(Math.floor(29/1.1))
     state.kp11=Math.round(Math.floor(40/1.1))
     state.kp12=Math.round(Math.floor(29/1.1))


     
     state.fourText1="Kostenlose Lieferung"
     state.fourText2="60 Tage Geld zurückerstatten"
     state.fourText3="Neue Rabatte und Aktionen"
     state.fourText4="Versand innerhalb von 24 Geschäft"
     state.fourText5="2 Jahre Produktgarantie 30 Tage"
     state.fourText6="Wenn Sie Newsletter abonnieren, stimmen Sie der Datenschutzerklärung zu. Ich stimme zu, dass Rains meine Kontaktinformationen sammelt und verwendet, um mir Produktangebote und andere Dienstleistungen im Rahmen des allgemeinen Marketings zuzusenden..."

     state.findSize="Finden Sie Ihre Größe"


      
     state.footerRow1val1="PRODUKTE"
     state.footerRow1val2="youtube Kanal"
     state.footerRow1val3="fashion  Wicks Podcast"
     state.footerRow1val4="mein Buch"
     state.footerRow1val5="30-Tage-Kick-Start-Plan"
     state.footerRow1val6="Lernen  in 15 Minuten"


     state.footerRow2val1="GEMEINSCHAFT"
     state.footerRow2val2="Bloggen"
     state.footerRow2val3="mein Buch"
     state.footerRow2val4="ÜBER UNS"
     state.footerRow2val5="30-Tage-Kick-Start-Plan"
     state.footerRow2val6="Lernen  in 15 Minuten"
   
   
     state.footerRow3val1="KONTAKTIERE UNS"
     state.footerRow3val2="Support-Center"
     state.footerRow3val3="Newsletter"
     state.footerRow3val4="Lernen"
     state.footerRow3val5="Karriere"
     state.footerRow3val6="Lernen  in 15 Minuten"


     state.footerRow4val1="© MODECOACH"
     state.footerRow4val2="2022TERMS & BEDINGUNG"
     state.footerRow4val3="DATENSCHUTZ-RICHTLINIE"



     state.valueBank="Zwischensumme"
     state.niz=[]
     state.bank=0
     state.value=0



   
    
    

    state.valuta= "€"

      
    },
    langSerb: (state) =>{

    

     

        state.flag="RS"
        state.women="Zena"
        state.kid="Dete"
        state.man="Muskarac"
        state.home="Kuca"

      

         //State nav row 1
         state.row1Val1 ="Novopridosli"
         state.row1Val2 ="Novo"
         state.row1Val3="PRЕ-АВ22"
         state.row1Val4="Prolece-Lete 2022"
         state.row1Val5="Ultra Lagane"
         state.row1Val6="Kupiti sve"
   
        //State nav row 2
        state.row2Val1="Јакне"
        state.row2Val2="Kisne Јаkne"
        state.row2Val3="Zimske Јаkne"
        state.row2Val4="Lagane Jakne"
        state.row2Val5="Prosivene Jakne"
        state.row2Val6="Pufer Jakne"
        state.row2Val7="Parka JaKNE"
        state.row2Val8="Mantili"
        state.row2Val9="Kupiti sve"
   
   
       //State nav row 3
       state.row3Val1="Gornji delovi"
       state.row3Val2="Stavke"
       state.row3Val3="Duksevi"
       state.row3Val4="Majice"
       state.row3Val5="Kupiti sve"
   
   
    //State nav row 4
       state.row4Val1="Donji delovi"
       state.row4Val2="Suknja"
       state.row4Val3="Pantalone"
       state.row4Val4="Stikle 2"
       state.row4Val5="Patike"
       state.row4Val6="Stikle"
       state.row4Val7="Kupiti sve"
   


       state.slideText="Najbolje ponude najbolji popusti i do -20%"

       state.blackText1="Spakovano"
       state.blackText2="Nove torbe"
       state.blackText3="Istrazite"
       state.blackText4="Sop"


       state.secondText1="Mi preporucjemo"
       state.secondText2="Najprodavaniji"

       
    state.iw1="Zenska Jakna"
    state.iw2="Zenski  Kaput"
    state.iw3="Zenska Jakna 2"
    state.iw4="Zenska Jakna 3"
   
    state.iw5="Zenski Duks"
    state.iw6="Zenska Majica"
    state.iw7="Zenski Jeans"
    state.iw8="Zenska Majica 2"
   
    state.iw9="Zenske Patike"
    state.iw10="Zenske Stikle"
    state.iw11="Zenske Stikle 2"
    state.iw12="Suknja"
   
   
     state.wp1=Math.round(Math.floor(30 * 110))
     state.wp2=Math.round(Math.floor(39 * 110))
     state.wp3=Math.round(Math.floor(36 * 110))
     state.wp4=Math.round(Math.floor(54 * 110))
    
     state.wp5=Math.round(Math.floor(14 * 110))
     state.wp6=Math.round(Math.floor(9* 110))
     state.wp7=Math.round(Math.floor(16 * 110))
     state.wp8=Math.round(Math.floor(10 * 110))
    
     state.wp9=Math.round(Math.floor(37 * 110))
     state.wp10=Math.round(Math.floor(20 * 110))
     state.wp11=Math.round(Math.floor(13 * 110))
     state.wp12=Math.round(Math.floor(17 * 110))


      
     state.im1="Muska Jakna"
     state.im2="Muska Jakna 2"
     state.im3="Dzemper"
     state.im4="Dzemper 2"
    
     state.im5="Muski Duks"
     state.im6="Muski Duks 2"
     state.im7="Muska Majica"
     state.im8="Muska Majica 2"
    
     state.im9="Muske Patike"
     state.im10="Muske Patike 2"
     state.im11="Muske Patike 3"
     state.im12="Muske Cipele"
    
    
     state.mp1=Math.round(Math.floor(39 * 110))
     state.mp2=Math.round(Math.floor(48 * 110))
     state.mp3=Math.round(Math.floor(11 * 110))
     state.mp4=Math.round(Math.floor(10 * 110))
     
     state.mp5=Math.round(Math.floor(13 * 110))
     state.mp6=Math.round(Math.floor(9 * 110))
     state.mp7=Math.round(Math.floor(19 * 110))
     state.mp8=Math.round(Math.floor(12 * 110))
     
     state.mp9=Math.round(Math.floor(36 * 110))
     state.mp10=Math.round(Math.floor(38 * 110))
     state.mp11=Math.round(Math.floor(42 * 110))
     state.mp12=Math.round(Math.floor(18 * 110))



     
     state.ik1="Decija Jakna"
     state.ik2="Decija Jakna 2"
     state.ik3="Deciji Jeans"
     state.ik4="Deciji Jeans 2"
    
     state.ik5="Deciji Duks"
     state.ik6="Deciji Duks 2"
     state.ik7="Decija Majica"
     state.ik8="Decija Majica 2"
    
     state.ik9="Decije Patike"
     state.ik10="Decije Patike 2"
     state.ik11="Decije Patikes 3"
     state.ik12="Decije Patike 4"
    
    
     state.kp1=Math.round(Math.floor(40 * 110))
     state.kp2=Math.round(Math.floor(58 * 110))
     state.kp3=Math.round(Math.floor(14 * 110))
     state.kp4=Math.round(Math.floor(13 * 110))
     
     state.kp5=Math.round(Math.floor(15 * 110))
     state.kp6=Math.round(Math.floor(19 * 110))
     state.kp7=Math.round(Math.floor(9 * 110))
     state.kp8=Math.round(Math.floor(12 * 110))
     
     state.kp9=Math.round(Math.floor(45 * 110))
     state.kp10=Math.round(Math.floor(29 * 110))
     state.kp11=Math.round(Math.floor(40 * 110))
     state.kp12=Math.round(Math.floor(29 * 110))


    

     



     
     state.fourText1="Besplatna Dostava"
     state.fourText2="Povracaj Novca od 60 Dana"
     state.fourText3="Novi Popusti i Akcije"
     state.fourText4="Otpremanje u roku od 24 radna sata"
     state.fourText5="2-Godisnja garancija na proizvod 30-dnevni povracaj"
     state.fourText6="Prijavljivanjem na biltene prihvatate Politiku privatnosti. Saglasan sam da Rains prikuplja moje kontakt informacije i da ih koristi za slanje promocija proizvoda i drugih usluga kao deo opšteg marketinga. Mogu da opozovem svoju saglasnost u bilo kom trenutku klikom na vezu za odjavu na dnu svih biltena."



     
      
     state.footerRow1val1="PRODUKTI"
     state.footerRow1val2="youTube Kanal"
     state.footerRow1val3="Modni Vicks Podcast"
     state.footerRow1val4="Moja Knjiga"
     state.footerRow1val5="Plan za pocetak za 30 dana"
     state.footerRow1val6="Nauci za 15 minuta"

    
      
     state.footerRow2val1="Zajednica"
     state.footerRow2val2="Blog"
     state.footerRow2val3="Moja Knjiga"
     state.footerRow2val4="O nama"
     state.footerRow2val5="Plan za pocetak za 30 dana"
     state.footerRow2val6="Nauci za 15 minuta"


      
     state.footerRow3val1="Kontakt"
     state.footerRow3val2="Centar za podrsku"
     state.footerRow3val3="Bilten"
     state.footerRow3val4="Nauci"
     state.footerRow3val5="Karijera"
     state.footerRow3val6="Nauci za 15 minuta"


         
     state.footerRow4val1="© FASHION TRENER"
     state.footerRow4val2="2022 ODREDBE & USLOVI"
     state.footerRow4val3="PRIVATNOST KOLACIC POLITIKA"



   
     state.valueBank="Ukupno"
     state.niz=[]
     state.bank=0
     state.value=0

       

     state.findSize="Pronadjite svoju velicinu"


       state.valuta= "din"
   

    },
   
    
    nizArray: (state, action) => {

    
 
      state.niz.push(action.payload)
      state.laz=true

    
    },
    removeTodo(state, action) {

      const x=  state.niz.filter(todo => todo.id !== action.payload)

      return void (state.niz=x)
    
     
     },


   


    incrementByAmount: (state, action) => {
    
         state.value += action.payload

    },


    decrementByAmount: (state, action) => {
      if (state.value <= 1) {

        state.value=0
        
      }else{
        state.value -= action.payload
      }
       

 },

 
 incrementBankAcount: (state, action) => {
    
  state.bank += action.payload

},



decremntBankAcount: (state, action) => {
  if (state.value <= 1) {

    state.bank=0
    
  }else{
    state.bank -= action.payload
  }
   



   


},






  },
})

// Action creators are generated for each case reducer function
export const { langEng , langGer ,langSerb , incrementByAmount,decrementByAmount 
  ,nizArray ,removeTodo ,incrementBankAcount, decremntBankAcount  } = counterSlice.actions

export default counterSlice.reducer;