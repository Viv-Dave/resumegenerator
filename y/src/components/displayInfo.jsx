// import { useState } from 'react'
import './resume.css'
export default function DisplayInfo({personalInfo, educationInfo, experienceInfo, skillInfo, EduItems, ExpItems, SkillItems, projectInfo, ProjectItems}) {
    return (
        <div className="resume">
            {personalInfo ? (
                <>
                <div className='header'>
                    <h5>{personalInfo.FullName}</h5>
                    <div className='below-header'>
                    <p>{personalInfo.Email}</p>
                    <hr/>
                    <p>{personalInfo.PhoneNumber}</p>
                    <hr />
                    <p>{personalInfo.Linkedin}</p>
                    </div>
                </div>
                </>
            ) : (
                <div className='header'>
                     <h5>XYZ ABC</h5>
                    <div className='below-header'>
                    <p>xyz@email.com</p>
                    <hr />
                     <p>+91 123456789</p>
                     <hr />
                     <p>www.linkedin.com</p>
                    </div>
                </div>
            )}
            <h3>Educational Info</h3>
            <hr></hr>
            {educationInfo ? (
                <>
                 <div className='education'>
                        <div>
                        {EduItems.map((item, index) => (
                            <div key={index}>
                                <div className='educationInfo'>
                                <div>
                                    <p>{item.School}</p>
                                    <p>{item.FieldofStudy}, Grade: {item.Grade}</p>
                                </div>
                                <div>
                                    <p>{item.Location}</p>
                                    <p>{item.StartDate} - {item.EndDate}</p> 
                                </div>    
                                </div>
                            <br />
                            </div>
                            ))}
                        </div>
                </div>
                </>
            ) : (
                <div className='education'>
    
                </div>
            )
            }
            <h3>Experience</h3>
            <hr></hr>
            {experienceInfo ? (
                <>
                <div className='displayExperience'>
                    <div>
                    {ExpItems.map((item, index) => (
                            <div key={index}>
                                <div className='educationInfo'>
                                <div>
                                    <p>{item.CompanyName}</p>
                                    <p>{item.Position}</p>
                                </div>
                                <div>
                                    <p>{item.Location}</p>
                                    <p>{item.StartDate} - {item.EndDate}</p> 
                                </div>    
                                </div>
                            <br />
                            </div>
                        ))}
                    </div>
                </div>
                </>
            ) : (
                <div className='displayExperience'>
                </div>
            )}
            <h3>Skills</h3>
            <hr></hr>
            {skillInfo ? (
                <>
                <div className='displaySkills'>
                <div>
                    {SkillItems.map((items, index)=> (
                        <div key={index}>
                            <p> <strong> {items.SkillDomain} : </strong> {items.Skills}</p>
                        </div>
                    ))}
                </div>  
                </div>
                </>
            ) : (
                <div className='displaySkills'>
                    <h6> <strong></strong>Skill Domain: </h6>
                    <p>Skill-1, Skill-2, Skill-3, etc</p>
                </div>
            )
            }

              {projectInfo && (
                <div className='project-info'>
                    <h3>Projects</h3>
                    <hr />
                    {ProjectItems.map((project, index) => (
                        <div key={index} className='project-item'>
                        
                            <p><strong>{project.ProjectName}</strong></p>
                            <p>{project.ProjectDes}</p>
                            <p>{project.ProjectLink}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
} 
