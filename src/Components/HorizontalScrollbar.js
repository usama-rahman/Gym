import React, { useContext } from 'react'
// import Typography from '@mui/material'
import BodyPart from './BodyPart'
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"

import { ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow = {LeftArrow} RightArrow={RightArrow} >
        {data.map((item) => (
            <section
            key = {item.id || item}
            itemId = {item.id || item}
            title = {item.id || item}
            m="0 40px"
            >
             < BodyPart 
             item ={ item }
             bodyPart = { bodyPart}
             setBodyPart = {setBodyPart}/>
            </section>
        )    
    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar