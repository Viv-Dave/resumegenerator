// import { useState } from 'react'
import './resume.css'
export default function DisplayInfo({personalInfo, educationInfo, experienceInfo, skillInfo, items, EduItems, ExpItems}) {
    return (
        <div className="resume">
            {items ? (
                <>
                <div className='header'>
                    <h5>{personalInfo.fullName || 'John Smith'}</h5>
                    <div className='below-header'>
                    <p>Email: {personalInfo.email}</p>
                    <p>Phone Number: {personalInfo.phoneNumber}</p>
                    <p>Enter Linkedin ID: {personalInfo.linkedin}</p>
                    </div>
                </div>
                </>
            ) : (
                <div className='header'>
                     <h5>XYZ ABC</h5>
                    <div className='below-header'>
                    <p>xyz@email.com</p>
                     <p>+91 123456789</p>
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
                <p>{skillInfo.domain} : </p>
                <p>{skillInfo.skills}</p>
                </div>
                </>
            ) : (
                <div className='displaySkills'>
                    <h6> Skill Domain: </h6>
                    <p>Skill-1, Skill-2, Skill-3, etc</p>
                </div>
            )
            }
        </div>
    )
} 
