import React from 'react';
import { Card } from 'react-bootstrap';
import { TranslationHook } from '../../../../hooks/TranslationHook';
import { projectsArr } from '../../../../constants/projectsArr';
import './projectCard.scss';

function ProjectCard({ index }) {

   const projectDescription = TranslationHook('projectDescription')[index];
   const { title, motto, description } = projectDescription;
   const { image, link, linkText, githubLink, githubLinkText } = projectsArr[index];


   return (
      <div className='projectCard p-0'>
         <Card >
            <div className="projectImgWrap">
               <Card.Img variant='top' src={image} />
               <div className='projectLinkWrapper'>
                  <div>
                     <a href={link} className='projectLink' target="_blank" rel="noopener noreferrer">{linkText} </a>
                  </div>
                  <div>
                     <a href={githubLink} className='projectGitLink' target="_blank" rel="noopener noreferrer">{githubLinkText} </a>
                  </div>
               </div>
            </div>
            <Card.Body>
               <div className='projectTitle'>{title}</div>
               <div className='projectMotto'> {motto}</div>
               <div className='projectText'> {description}</div>
            </Card.Body>
         </Card >
      </div >
   )
}

export default ProjectCard