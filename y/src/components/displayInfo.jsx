// import { useState } from 'react'
import './resume.css'
export default function DisplayInfo({
            personalInfo, 
            educationInfo, 
            experienceInfo, 
            skillInfo, 
            EduItems, 
            ExpItems, 
            SkillItems, 
            projectInfo, 
            ProjectItems, 
            CertificateItems, 
            CertificateInfo, 
            AchievementsItems,
            AchievementsInfo,
        }) {
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
                                    <p><strong>{item.School}</strong></p>
                                    <p><em>{item.FieldofStudy}, Grade: {item.Grade}</em></p>
                                </div>
                                <div className='location'>
                                    <p><strong>{item.Location}</strong></p>
                                    <p><em>{item.StartDate} - {item.EndDate}</em></p> 
                                </div>    
                                </div>
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
                <div className='education'>
                    <div>
                    {ExpItems.map((item, index) => (
                            <div key={index}>
                                <div className='educationInfo'>
                                <div>
                                    <p><strong>{item.CompanyName}</strong></p>
                                    <p><em>{item.Position}</em></p>
                                </div>
                                <div className='location secondary'>
                                    <p><strong>{item.Location}</strong></p>
                                    <p><em>{item.StartDate} - {item.EndDate}</em></p> 
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
                   
                    {ProjectItems.map((project, index) => (
                        <div key={index} className='project-item'>
                            <h3>Projects</h3>
                            <hr />
                            <div className='displaySkills'>
                            <p><strong>{project.ProjectName}</strong> [{project.ProjectLink}]</p>
                            <p>{project.ProjectDes}</p>

                            </div>
                        </div>
                    ))}
                </div>
            )}
             {CertificateInfo && (
                <div className='project-info'>
                   
                    {CertificateItems.map((certificate, index) => (
                        <div key={index} className='project-item'>
                            <h3>Certificates</h3>
                            <hr />
                            <div className='displaySkills'>
                            <p><strong>{certificate.CertificateName}</strong> [{certificate.Grantedby}]</p>
                            <p>{certificate.Date}</p>
                            <p>{certificate.CertID}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
             {AchievementsInfo && (
                <div className='project-info'>
                   
                    {AchievementsItems.map((achievement, index) => (
                        <div key={index} className='project-item'>
                            <h3>Achievements</h3>
                            <hr />
                            <div className='displaySkills'>
                            <p><strong>{achievement.Name}</strong></p>
                            <p>{achievement.Description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    )
} 