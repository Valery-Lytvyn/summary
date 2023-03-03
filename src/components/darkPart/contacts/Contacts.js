import React from 'react';
import { createContactsDataArr } from '../../../constants/createDataArr';
import ContactInfo from './contactInfo/ContactInfo';
import ContactLogo from './contactLogo/ContactLogo';
import './contacts.scss';




function Contacts() {
   const contacts = createContactsDataArr();

   return (
      <div className='contacts px-0 py-3'>
         {contacts.map((contact, index) => (
            <div className='contactItem' key={index}>
               <ContactLogo icon={contact.icon} />
               <div className='contactInfo'>
                  <ContactInfo info={contact.info} />
               </div>
            </div>
         ))
         }
      </div>
   )
}

export default Contacts