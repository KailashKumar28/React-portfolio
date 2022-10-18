import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom';

const nearestIndex = (currentPosition,sectionPositionArray,startIndex,endIndex) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (Math.abs(sectionPositionArray[startIndex].headerRef.current.offsetTop -currentPosition) < Math.abs(sectionPositionArray[endIndex].headerRef.current.offsetTop -currentPosition))
      return startIndex;
  else return endIndex;
  } 
  else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(sectionPositionArray[nextNearest].headerRef.current.offsetTop -currentPosition);
    var b = Math.abs(
    sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -currentPosition);
    if (a < b) {
      return nearestIndex( currentPosition, sectionPositionArray, startIndex, nextNearest);
    } 
    else {
      return nearestIndex( currentPosition, sectionPositionArray, nextNearest, endIndex);
    }
  }
};
const Nav = (props) => {
  const data = props.navHeader;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      var index = nearestIndex(window.scrollY, data, 0, Object.keys(data).length - 1);
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeNav, setactiveNav] = useState('#');
 
  return (
    <nav>
      <a href="#" onClick={()=> setactiveNav('#')} className= {activeNav==='#'? 'active': ''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setactiveNav('#about')} className= {activeNav==='#about'? 'active': ''} ><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setactiveNav('#experience')} className= {activeNav==='#experience'? 'active': ''} ><BiBook/></a>
      <a href="#services" onClick={()=> setactiveNav('#services')} className= {activeNav==='#services'? 'active': ''} ><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setactiveNav('#contact')} className= {activeNav==='#contact'? 'active': ''} ><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav