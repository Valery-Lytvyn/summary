import React from 'react';
import './title.scss';


function Title({ content, label }) {

   return (
      <div className='title'>
         <div className={label}>
            {content}
         </div>
         <div className='borderLine'></div>
      </div>
   )
}

export default Title