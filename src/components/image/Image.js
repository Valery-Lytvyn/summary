import React from 'react';
import './image.scss';

function Image({ img, label }) {
   return (
      <div className='image'>
         <img className='w-100' src={img} alt={label} />
      </div>
   )
}

export default Image