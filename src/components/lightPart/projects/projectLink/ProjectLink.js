import React from 'react';
import { projectsArr } from '../../../../constants/projectsArr';

function ProjectLink({ index }) {
   const { link, linkText, githubLink, githubLinkText } = projectsArr[index];

   return (
      <div className="projectLink">
         <div className='projectLinkWrapper'>
            <a href={link} className='projectLink' target="_blank" rel="noopener noreferrer">{linkText} </a>
         </div>
         <div className='projectLinkWrapper'>
            <a href={githubLink} className='projectGitLink' target="_blank" rel="noopener noreferrer">{githubLinkText} </a>
         </div>
      </div>
   )
}

export default ProjectLink