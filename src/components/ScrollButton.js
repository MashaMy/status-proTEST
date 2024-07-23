import React, { useState } from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import styled from 'styled-components'; 


export const Button = styled.div`
   position: fixed;  
   width: 100%; 
   left: 50%; 
   bottom: 40px; 
   height: 10px; 
   font-size: 2rem; 
   z-index: 1; 
   cursor: pointer; 
   color: white;
   `

  
const ScrollButton = () =>{ 
  
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 400){ 
      setVisible(true) 
    }  
    else if (scrolled <= 400){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button> 
     <FaArrowCircleUp onClick={scrollToTop}  
     style={{display: visible ? 'inline' : 'none'}} /> 
    </Button> 
  ); 
} 
  
export default ScrollButton; 