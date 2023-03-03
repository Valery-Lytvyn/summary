import React, { useEffect, useState } from 'react'
import { messengersIconsArray } from '../../../../constants/messengersIconsArray';
import './contactLogo.scss';

function ContactLogo({ icon }) {
   const [indexIcon, setIndexIcon] = useState(0);

   useEffect(() => {
      let changeIndexContactIcon = setTimeout(() => {
         if (indexIcon === messengersIconsArray.length - 1) {
            setIndexIcon(0)
         }
         else {
            setIndexIcon(indexIcon + 1)
         }
      }, 2000);

      return () => clearTimeout(changeIndexContactIcon);
   }, [indexIcon]);

   return (
      <div className='logo'>
         {Array.isArray(icon) ?
            icon[indexIcon] :
            icon
         }
      </div>
   )
}

export default ContactLogo