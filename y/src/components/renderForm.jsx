export function GeneralForm({setPersonalInfo}) {
    const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const personalInfo = {
                FullName: data.get('FullName'),
                Email: data.get('Email'),
                PhoneNumber: data.get('PhoneNumber'),
                Linkedin: data.get('Linkedin'),
            };
            console.log(personalInfo);
            setPersonalInfo(personalInfo);
        }
 return (
     <div>
         <h3>Enter Personal Information</h3>
         <form action="#" method="get" onSubmit={handleSubmit}>
             <label htmlFor="FullName">
                 <input type="text" placeholder="Enter Full Name" name="FullName"/>
             </label>
             <label htmlFor="Email">
                 <input type="text" placeholder="Enter Email" name="Email"/>
             </label>
             <label htmlFor="PhoneNumber">
                 <input type="number" placeholder="Enter Phone Number" name="PhoneNumber" />
             </label>
             <label htmlFor="linkedin">
                 <input type="text" placeholder="Enter linkedin ID" name="Linkedin"/>
                 {/* Dont forget to make it a url type */}
             </label>
             <button className="submit-button">Submit</button>
         </form>
     </div>
 );
}
export function EducationForm({setEducationInfo, setEduItems, EduItems, educationInfo}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setEducationInfo ( {
            ...educationInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setEduItems([...EduItems, educationInfo])
        setEducationInfo({School:'', FieldofStudy: '', StartDate:'', EndDate:'', Location:'', Grade:''});
        console.log(educationInfo)
    }
    return (
        <div>
            <h3>Enter Educational Details</h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="School">
                    <input type="text" placeholder="Enter School/College/University" name="School" onChange={handleChange} value={educationInfo.School}/>
                </label>
                <label htmlFor="Grade">
                    <input type="number" placeholder="Enter Grade in University" name="Grade" onChange={handleChange} value={educationInfo.Grade} />
                </label>
                <label htmlFor="FieldOfStudy">
                    <input type="text" placeholder="Field of Study" name="FieldofStudy" onChange={handleChange} value={educationInfo.FieldofStudy}/>
                </label>
                <label htmlFor="StartDate">
                    <input type="date" placeholder="Enter Start Date" name="StartDate" onChange={handleChange} value={educationInfo.StartDate}/>
                </label>
                <label htmlFor="EndDate">
                    <input type="date" placeholder="Enter End Date" name="EndDate" onChange={handleChange} value={educationInfo.EndDate}/>
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the College" name="Location" onChange={handleChange} value={educationInfo.location}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export function ExperienceForm({setExperienceInfo, experienceInfo, ExpItems, setExpItems}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setExperienceInfo ( {
            ...experienceInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setExpItems([...ExpItems, experienceInfo])
        setExperienceInfo({CompanyName: '', Position: '', StartDate:'', EndDate:'', Location:''});
        console.log(experienceInfo)
    }
    return (
        <div>
            <h3>Enter Experience</h3>
            <form action="#" method="get" onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="CompanyName">
                    <input type="text" placeholder="Enter Company Name" name="CompanyName" value={experienceInfo.CompanyName}/>
                </label>
                <label htmlFor="Position">
                    <input type="text" placeholder="Position" name="Position" value={experienceInfo.Position}/>
                </label>
                <label htmlFor="StartDate">
                    <input type="text" placeholder="Enter Start Date" name="StartDate" value={experienceInfo.StartDate}/>
                </label>
                <label htmlFor="EndDate">
                    <input type="text" placeholder="Enter End Date" name="EndDate" value={experienceInfo.EndDate}/>
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the Company" name="Location" value={experienceInfo.Location}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export function SkillForm({setSkillInfo, skillInfo, SkillItems, setSkillItems}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setSkillInfo ( {
            ...skillInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSkillItems([...SkillItems, skillInfo])
        setSkillInfo({SkillDomain:'', Skills:''});
        console.log(skillInfo)
    }
    return (
        <div>
            <h3>
                Enter Skill
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="SkillS Name">
                    <input type="text" placeholder="Enter Domain" name="SkillDomain" value={skillInfo.SkillDomain}/>
                </label>
                <label htmlFor="Skills">
                    <input type="text" placeholder="Enter Skills in that domain..." name="Skills" value={skillInfo.Skills}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export function AchievementForm () {
    return (
        <div>
            <h3>
                Enter Achievement
            </h3>
            <form action="#" method="get">
                <label htmlFor="SkillS Name">
                    <input type="text" placeholder="Enter Domain" name="Domain"/>
                </label>
                <label htmlFor="Skills">
                    <input type="text" placeholder="Enter Skills in that domain..." name="Skills"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )   
}
export function ProjectForm ({setProjectInfo, projectInfo, setProjectItems, ProjectItems}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setProjectInfo ( {
            ...projectInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setProjectItems([...ProjectItems, projectInfo])
        setProjectInfo({ProjectName:'', ProjectDes:'', ProjectLink:''});
        console.log(projectInfo)
    }
    return (
        <div>
            <h3>
                Enter Project
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="Project Title">
                    <input type="text" placeholder="Enter Project Title" name="ProjectName" value={projectInfo.ProjectName} onChange={handleChange}/>
                </label>
                <label htmlFor="Project Description">
                    <input type="text" placeholder="Enter Project Description" name="ProjectDes" value={projectInfo.ProjectDes} onChange={handleChange}/>
                </label>
                <label htmlFor="Project Link">
                    <input type="text" placeholder="" name="ProjectLink" value={projectInfo.ProjectLink} onChange={handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )   
}
export function CertificateForm() {
    return (
        <div>
            <h3>
                Enter Certificate
            </h3>
            <form action="#" method="get">
                <label htmlFor="SkillS Name">
                    <input type="text" placeholder="Enter Domain" name="Domain"/>
                </label>
                <label htmlFor="Skills">
                    <input type="text" placeholder="Enter Skills in that domain..." name="Skills"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}