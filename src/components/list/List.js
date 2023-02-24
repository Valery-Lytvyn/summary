import React from 'react'

function List({ arr }) {
   return (
      <ul className='ps-0 py-3'>
         {arr.map((item, index) => (
            (typeof item === 'object') ?
               <li className='list_item py-2 m-0' key={index}>{item.lang}: {item.level}</li> :
               <li className='list_item py-2 m-0' key={index}>{item}</li>
         ))
         }
      </ul>
   )
}

export default List