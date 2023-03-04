import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../title/Title';
import ProjectCard from './projectCard/ProjectCard';
import { projectsArr } from '../../../constants/projectsArr';
import './projects.scss';

function Projects() {
   const [isShowButton, setIsShowButton] = useState(false);
   const [buttonIndex, setButtonIndex] = useState(null);
   const [isShowProject, setIsShowProject] = useState(false);
   const [imageIndex, setImageIndex] = useState(null);

   const handleClick = (index) => {
      setIsShowProject(true)
      setImageIndex(index)
   }

   const mouseHandlerEnter = (index) => {
      setButtonIndex(index);
      setIsShowButton(true);
   }

   const mouseHandlerLeave = () => {
      setIsShowProject(false)
      setButtonIndex(null)
      setIsShowButton(false);
   }

   const { t } = useTranslation();

   return (
      <div className='projects'>
         <Title content={t('projects')} label={'lightPartTitle'} />
         {!isShowProject && <div className='row'>
            {projectsArr.map((project, index) => (
               <div className='col-sm-6 p-2' key={index} id={`image${index}`}
                  onMouseEnter={() => mouseHandlerEnter(index)}
                  onMouseLeave={() => mouseHandlerLeave()}
               >
                  <div className='projectImgWrap'>
                     <img src={project.image} alt='project' className='projectImg' />
                     {(isShowButton && buttonIndex === index) && < div className='showMoreButton'>
                        <div className="btn btn-outline-secondary"
                           onClick={() => handleClick(index)}
                        >show more</div>
                     </div>
                     }
                  </div>
               </div>
            ))
            }
         </div>
         }
         {
            isShowProject &&
            <div onMouseLeave={() => mouseHandlerLeave()}>
               <ProjectCard index={imageIndex} />
            </div>
         }
      </div >
   )
}

export default Projects