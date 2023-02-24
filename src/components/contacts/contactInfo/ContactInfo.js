import React from 'react';

function ContactInfo({ info }) {

   const { label, type, link } = info

   switch (type) {
      case 'telephon':
         const telephon = `tel:${link}`
         return (
            <a href={telephon} target='_blank' rel='noopener noreferrer'> {label}</a>
         );
      case 'mail':
         const mail = `mailto:${link}`
         return (
            <a href={mail}>{label}</a>
         );
      case 'link':
         return (
            <a href={link} target='_blank' rel='noopener noreferrer'> {label}</a>
         );
      default: return <div> {label} </div>
   }
}


export default ContactInfo