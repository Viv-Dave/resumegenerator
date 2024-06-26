export function GeneralForm({setPersonalInfo, setItems, items, personalInfo}) {
    const handleChange = (e) => {
        const { name, value} = e.target;
        setPersonalInfo ( {
            ...personalInfo,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
     e.preventDefault();
     setItems([...items, personalInfo])
     setPersonalInfo({FullName: '', Email:''});
     console.log(personalInfo)
 }
 return (
     <div>
         <h3>Enter Personal Information</h3>
         <form action="#" method="get" onSubmit={handleSubmit}>
             <label htmlFor="FullName">
                 <input type="text" placeholder="Enter Full Name" name="FullName" onChange={handleChange}  value={personalInfo.FullName}/>
             </label>
             <label htmlFor="Email">
                 <input type="text" placeholder="Enter Email" name="Email" onChange={handleChange} value={personalInfo.Email}/>
             </label>
             <label htmlFor="PhoneNumber">
                 <input type="number" placeholder="Enter Phone Number" name="PhoneNumber" />
             </label>
             <label htmlFor="linkedin">
                 <input type="text" placeholder="Enter linkedin ID" name="linkedin"/>
                 {/* Dont forget to make it a url type */}
             </label>
             <button>Submit</button>
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
export function SkillForm({setSkillInfo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const skillInfo = {
            domain: data.get('Domain'),
            skills : data.get('Skills')
        };
        console.log(skillInfo)
        setSkillInfo(skillInfo)
    };

    return (
        <div>
            <h3>
                Enter Skill
            </h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
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