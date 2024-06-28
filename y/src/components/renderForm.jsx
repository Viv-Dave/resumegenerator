import { useEffect } from "react";
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
            localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
            console.log(localStorage)
        }
 return (
     <div>
         <h3>Enter Personal Information</h3>
         <form action="#" method="get" onSubmit={handleSubmit}>
             <label htmlFor="FullName">
                 <input type="text" placeholder="Enter Full Name" name="FullName" required/>
             </label>
             <label htmlFor="Email">
                 <input type="email" placeholder="Enter Email" name="Email" required/>
             </label>
             <label htmlFor="PhoneNumber">
                 <input type="number" placeholder="Enter Phone Number" name="PhoneNumber" required/>
             </label>
             <label htmlFor="linkedin">
                 <input type="url" placeholder="Enter linkedin ID" name="Linkedin" required/>
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
        localStorage.setItem('eduItems', JSON.stringify([...EduItems, educationInfo]));
        console.log(educationInfo)
    }
    useEffect(() => {
        const savedEduItems = JSON.parse(localStorage.getItem('eduItems'));
        if (savedEduItems) {
            setEduItems(savedEduItems);
        }
    }, [setEduItems]);
    return (
        <div>
            <h3>Enter Educational Details</h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="School">
                    <input type="text" placeholder="Enter School/College/University" name="School" onChange={handleChange} value={educationInfo.School} required/>
                </label>
                <label htmlFor="Grade">
                    <input type="number" placeholder="Enter Grade in University" name="Grade" onChange={handleChange} value={educationInfo.Grade} />
                </label>
                <label htmlFor="FieldOfStudy">
                    <input type="text" placeholder="Field of Study" name="FieldofStudy" onChange={handleChange} value={educationInfo.FieldofStudy} required/>
                </label>
                <label htmlFor="StartDate">
                    <input type="date" placeholder="Enter Start Date" name="StartDate" onChange={handleChange} value={educationInfo.StartDate} required/>
                </label>
                <label htmlFor="EndDate">
                    <input type="date" placeholder="Enter End Date" name="EndDate" onChange={handleChange} value={educationInfo.EndDate} required/>
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the College" name="Location" onChange={handleChange} value={educationInfo.location} required/>
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
        setExperienceInfo({CompanyName: '', Position: '', StartDate:'', EndDate:'', Location:'', Point1:'', Point2:'', Point3:'', Point4:''});
        localStorage.setItem('expItems', JSON.stringify([...ExpItems, experienceInfo]));
        console.log(experienceInfo)
    }
    useEffect(() => {
        const savedExpItems = JSON.parse(localStorage.getItem('expItems'));
        if (savedExpItems) {
            setExpItems(savedExpItems);
        }
    }, [setExpItems]);
    return (
        <div>
            <h3>Enter Experience</h3>
            <form action="#" method="get" onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="CompanyName">
                    <input type="text" placeholder="Enter Company Name" name="CompanyName" value={experienceInfo.CompanyName} required/>
                </label>
                <label htmlFor="Position">
                    <input type="text" placeholder="Position" name="Position" value={experienceInfo.Position} required/>
                </label>
                <label htmlFor="StartDate">
                    <input type="text" placeholder="Enter Start Date" name="StartDate" value={experienceInfo.StartDate} required/>
                </label>
                <label htmlFor="EndDate">
                    <input type="text" placeholder="Enter End Date" name="EndDate" value={experienceInfo.EndDate} required/>
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the Company" name="Location" value={experienceInfo.Location} required/>
                </label>
                <label htmlFor="Points">
                    <h6>Enter Description of the type of work you did</h6>
                    <input type="text" placeholder="Enter Description" name="Point1" value={experienceInfo.Point1} required/>
                    <input type="text" placeholder="Enter Description" name="Point2" value={experienceInfo.Point2} required/>
                    <h6>(Optional)</h6>
                    <input type="text" placeholder="Enter Description" name="Point3" value={experienceInfo.Point3}/>
                    <h6>(Optional)</h6>
                    <input type="text" placeholder="Enter Description" name="Point1" value={experienceInfo.Point4}/>
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
        localStorage.setItem('skilledItems', JSON.stringify([...SkillItems, skillInfo]));
    }
    useEffect(() => {
        const savedSkillItems = JSON.parse(localStorage.getItem('skilledItems'));
        if (savedSkillItems) {
            setSkillItems(savedSkillItems);
        }
    }, [setSkillItems]);
    return (
        <div>
            <h3>
                Enter Skill
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit} onChange={handleChange}>
                <label htmlFor="SkillS Name">
                    <input type="text" placeholder="Enter Domain" name="SkillDomain" value={skillInfo.SkillDomain} required/>
                </label>
                <label htmlFor="Skills">
                    <input type="text" placeholder="Enter Skills in that domain..." name="Skills" value={skillInfo.Skills} required/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
export function AchievementForm ({setAchievementInfo, AchievementsInfo, AchievementsItems, setAchievementItems}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setAchievementInfo ( {
            ...AchievementsInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setAchievementItems([...AchievementsItems, AchievementsInfo])
        setAchievementInfo({Name:'', Description:''});
        console.log(AchievementsInfo);
        localStorage.setItem('achieveItems', JSON.stringify([...AchievementsItems, AchievementsInfo]));
    }
    useEffect(() => {
        const savedAchieveItems = JSON.parse(localStorage.getItem('achieveItems'));
        if (savedAchieveItems) {
            setAchievementItems(savedAchieveItems);
        }
    }, [setAchievementItems]);

    return (
        <div>
            <h3>
                Enter Achievement
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="Achievement Name">
                    <input type="text" placeholder="Enter Achievement Name" name="Name" value={AchievementsInfo.Name} onChange={handleChange} required/>
                </label>
                <label htmlFor="Description">
                    <input type="text" placeholder="Enter a short description" name="Description" value={AchievementsInfo.Description} onChange={handleChange} required/>
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
        localStorage.setItem('projectItems', JSON.stringify([...ProjectItems, projectInfo]));
    }
    useEffect(() => {
        const savedProjectItems = JSON.parse(localStorage.getItem('projectItems'));
        if (savedProjectItems) {
            setProjectItems(savedProjectItems);
        }
    }, [setProjectItems]);
    return (
        <div>
            <h3>
                Enter Project
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="Project Title">
                    <input type="text" placeholder="Enter Project Title" name="ProjectName" value={projectInfo.ProjectName} onChange={handleChange} required/>
                </label>
                <label htmlFor="Project Description">
                    <input type="text" placeholder="Enter Project Description" name="ProjectDes" value={projectInfo.ProjectDes} onChange={handleChange} required maxLength={250}/>
                </label>
                <label htmlFor="Project Link">
                    <input type="url" placeholder="" name="ProjectLink" value={projectInfo.ProjectLink} onChange={handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )   
}
export function CertificateForm({setCertificateInfo, CertificateInfo, CertificateItems, setCertificateItems}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setCertificateInfo ( {
            ...CertificateInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCertificateItems([...CertificateItems, CertificateInfo])
        setCertificateInfo({CertificateName:'', Grantedby:'', CertID:'', Date:''});
        console.log(CertificateInfo);
        localStorage.setItem('certiItems', JSON.stringify([...CertificateItems, CertificateInfo]));
    }
    useEffect(() => {
        const savedCertiItems = JSON.parse(localStorage.getItem('certiItems'));
        if (savedCertiItems) {
            setCertificateItems(savedCertiItems);
        }
    }, [setCertificateItems]);
    return (
        <div>
            <h3>
                Enter Certificate
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
               <label htmlFor="CertificateName">
                <input type="text" placeholder="Enter Certificate Name" name="CertificateName" onChange={handleChange} value={CertificateInfo.CertificateName}/>
               </label>
               <label htmlFor="GivenBy">
                <input type="text" placeholder="Enter Issuing Authority" name="Grantedby" onChange={handleChange} value={CertificateInfo.Grantedby}/>
               </label>
               <label htmlFor="date">
                <input type="date" placeholder="Enter Date" name="Date" onChange={handleChange} value={CertificateInfo.Date}/>
               </label>
               <label htmlFor="CertID">
                <input type="text" placeholder="Enter Certificate ID" name="CertID" onChange={handleChange} value={CertificateInfo.CertID}/>
               </label>
                <button>Submit</button>
            </form>
        </div>
    );
}