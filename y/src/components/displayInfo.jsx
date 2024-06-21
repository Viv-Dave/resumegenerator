import './resume.css'
export default function DisplayInfo({personalInfo, educationInfo, experienceInfo, skillInfo}) {
    return (
        <div className="resume">
            {personalInfo ? (
                <>
                <div className='header'>
                    <h5>{personalInfo.fullName}</h5>
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
            {educationInfo ? (
                <>
                    <p>School: {educationInfo.school}</p>
                    <p>Field: {educationInfo.fieldOfStudy}</p>
                    <p>Start Date: {educationInfo.startDate}</p>
                    <p>End Date: {educationInfo.endDate}</p>
                    <p>Location: {educationInfo.location}</p>
                </>
            ) : (
                <p>No School Info submitted yet.</p>
            )
            }
            <h3>Experience</h3>
            {experienceInfo ? (
                <>
                    <p>Full Name: {experienceInfo.CompanyName}</p>
                    <p>Position: {experienceInfo.Position}</p>
                    <p>Start Date: {experienceInfo.startDate}</p>
                    <p>End Date: {experienceInfo.endDate}</p>
                    <p>Location: {experienceInfo.location}</p>
                  
                </>
            ) : (
                <p>No Experience submitted yet.</p>
            )}
            <h3>Skills</h3>
            {skillInfo ? (
                <>
                <p>{skillInfo.domain} : </p>
                <p>{skillInfo.skills}</p>
                </>
            ) : (
                <p> No Skill submitted yet </p>
            )
            }
        </div>
    )
} 
