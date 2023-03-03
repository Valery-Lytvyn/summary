import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../title/Title';
import { projectsArr } from '../../../constants/projectsArr';

import './projects.scss';
import ProjectCard from './projectCard/ProjectCard';

function Projects() {
   const [isShow, setIsShow] = useState(true);
   const [imageIndex, setImageIndex] = useState(null);

   const mouseHandlerEnter = (index) => {
      setIsShow(false)
      setImageIndex(index)
   }

   const mouseHandlerLeave = () => {
      setIsShow(true)
   }

   const { t } = useTranslation();

   const projectImagesArr = projectsArr.map(item => item.image);

   return (
      <div className='projects'>
         <Title content={t('projects')} label={'lightPartTitle'} />
         {isShow && <div className='row'>
            {projectImagesArr.map((project, index) => (
               <div className='col-sm-6 p-2' key={index}>
                  <div>
                     <img src={project} alt='project' className='projectImg'
                        onClick={() => mouseHandlerEnter(index)} />
                  </div>
               </div>
            ))
            }
         </div>
         }
         {!isShow &&
            <div onMouseLeave={() => mouseHandlerLeave()}>
               <ProjectCard index={imageIndex} />
            </div>
         }
      </div >
   )
}

export default Projects