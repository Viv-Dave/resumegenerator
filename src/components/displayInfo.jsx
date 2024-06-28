import './resume.css'
export default function DisplayInfo({resumeRef}) {
            console.log(localStorage)
            const storedPersonalInfo = JSON.parse(localStorage.getItem('personalInfo'));
            const storedEduItems = JSON.parse(localStorage.getItem('eduItems'));
            const storedExpItems = JSON.parse(localStorage.getItem('expItems'));
            const storedSkillItems = JSON.parse(localStorage.getItem('skilledItems'));
            const storedAchievementsItems = JSON.parse(localStorage.getItem('achieveItems'));
            const storedProjectItems = JSON.parse(localStorage.getItem('projectItems'));
            const storedCertificateItems = JSON.parse(localStorage.getItem('certiItems'))
        
    return (
        <div className="resume" ref={resumeRef}>
            {storedPersonalInfo ? (
                <>
                <div className='header'>
                    <h5>{storedPersonalInfo.FullName}</h5>
                    <div className='below-header'>
                    <p>{storedPersonalInfo.Email}</p>
                    <hr/>
                    <p>{storedPersonalInfo.PhoneNumber}</p>
                    <hr />
                    <p>{storedPersonalInfo.Linkedin}</p>
                    </div>
                </div>
                </>
            ) : (
                <div className='header'>
                     <h5>XYZ ABC</h5>
                    <div className='below-header'>
                    <p>xyz@email.com</p>
                    <hr/>
                     <p>+91 123456789</p>
                     <hr />
                     <p>www.linkedin.com</p>
                    </div>
                </div>
            )}
            <h3>Education</h3>
            <hr></hr>
            {storedEduItems ? (
                <>
                 <div className='education'>
                        <div>
                        {storedEduItems.map((item, index) => (
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
                                <br />
                            </div>
                            ))}
                        </div>
                </div>
                </>
            ) : (
                null
            )
            }
            <h3>Experience</h3>
            <hr></hr>
            {storedExpItems ? (
                <>
                <div className='education'>
                    <div>
                    {storedExpItems.map((item, index) => (
                            <div key={index}>
                                <div className='educationInfo'>
                                <div>
                                    <p><strong>{item.CompanyName}</strong></p>
                                    <p className='below-text'><em>{item.Position}</em></p>
                                    <div>
                                    {item.Point1 ? (
                                        <>
                                        <ul>
                                            <li><i>{item.Point1}</i></li>
                                        </ul>
                                        </>
                                    ) : null}
                                    {item.Point2 ? (
                                        <>
                                        <ul>
                                            <li><i>{item.Point2}</i></li>
                                        </ul>
                                        </>
                                    ) : null}
                                     {item.Point3 ? (
                                        <>
                                        <ul>
                                            <li><i>{item.Point3}</i></li>
                                        </ul>
                                        </>
                                    ) : null}
                                     {item.Point4 ? (
                                        <>
                                        <ul>
                                            <li><i>{item.Point4}</i></li>
                                        </ul>
                                        </>
                                    ) : null}
                                    </div>
                                </div>
                                <div className='location secondary'>
                                    <p><strong>{item.Location}</strong></p>
                                    <p className='below-text'><em>{item.StartDate} - {item.EndDate}</em></p> 
                                </div>    
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
                </>
            ) : (
                null
            )}
            <h3>Skills</h3>
            <hr></hr>
            {storedSkillItems ? (
                <>
                <div className='displaySkills'>
                <div>
                    {storedSkillItems.map((items, index)=> (
                        <div key={index}>
                            <p> <strong> {items.SkillDomain} : </strong> {items.Skills}</p>
                        </div>
                    ))}
                </div>  
                </div>
                </>
            ) : (
                null
            )
            }
              {storedProjectItems && (
                <div className='project-info'>
                   
                    {storedProjectItems.map((project, index) => (
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
             {storedCertificateItems && (
                <div className='project-info'>
                   
                    {storedCertificateItems.map((certificate, index) => (
                        <div key={index} className='project-item'>
                            <h3>Certificates</h3>
                            <hr />
                            <div className='educationInfo'>
                            <div>
                            <p><strong>{certificate.CertificateName}</strong> </p>
                            <p>{certificate.CertID}</p>
                            </div>
                            <div>
                            <p>[{certificate.Grantedby}]</p>
                            <p>{certificate.Date}</p>
                            </div>
                            </div>
                            <br />
                        </div>
                    ))}
                </div>
            )}
             {storedAchievementsItems && (
                <div className='project-info'>
                    {storedAchievementsItems.map((achievement, index) => (
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
