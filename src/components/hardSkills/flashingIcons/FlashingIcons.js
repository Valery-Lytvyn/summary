import React, { useEffect, useState } from 'react';
import { hardSkillsIconArr } from '../../../constants/hardSkillsIconArr';
import './flashingIcons.scss';

function FlashingIcons() {
   const [coordinates, setСoordinates] = useState({ axisX: 50, axisY: 50 });
   const [indexIcon, setIndexIcon] = useState(0);
   const [visible, setVisible] = useState(true);

   let createRandomNumber = () => {
      return Math.floor(Math.random() * 84);
   }

   const createСoordinates = () => {
      const x = createRandomNumber();
      const y = createRandomNumber();
      setСoordinates(prevState => ({
         ...prevState,
         axisX: x,
         axisY: y,
      }));
   }

   const changeHardSkillsIcon = (index) => {
      if (index === hardSkillsIconArr.length - 1) {
         setIndexIcon(0);
      } else {
         setIndexIcon(prevState => prevState + 1);
      }
   }

   useEffect(() => {
      let timer = setTimeout(() => {
         changeHardSkillsIcon(indexIcon);
         createСoordinates();
         setVisible(false)
      }, 5000)
      return () => {
         clearTimeout(timer);
         setVisible(true)
      }
   }, [indexIcon]);

   return (
      <div className="flashingIcons">
         {visible ?
            <div
               style={{
                  top: `${coordinates.axisY}%`,
                  left: `${coordinates.axisX}%`,
               }}
               className="animationIcon">
               {hardSkillsIconArr[indexIcon]}
            </div>
            : null}
      </div >
   )
}

export default FlashingIcons