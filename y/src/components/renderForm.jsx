export function GeneralForm({setPersonalInfo}) {
    const handleSubmit = (e) => {
     e.preventDefault();
     const data = new FormData(e.target);
     const personalInfo = {
         fullName: data.get('FullName'),
         email: data.get('Email'),
         phoneNumber: data.get('PhoneNumber'),
         city: data.get('City')
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
             <label htmlFor="City">
                 <input type="text" placeholder="Enter City" name="City"/>
             </label>
             <button>Submit</button>
         </form>
     </div>
 );
}
export function EducationForm({setEducationInfo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const educationInfo = {
            school: data.get('School'),
            fieldOfStudy: data.get('FieldOfStudy'),
            startDate: data.get('StartDate'),
            endDate: data.get('EndDate'),
            location: data.get('Location')
        };
        console.log(educationInfo)
        setEducationInfo(educationInfo)
    };
    return (
        <div>
            <h3>Enter Educational Details</h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="School">
                    <input type="text" placeholder="Enter School/College/University" name="School" />
                </label>
                <label htmlFor="FieldOfStudy">
                    <input type="text" placeholder="Field of Study" name="FieldofStudy" />
                </label>
                <label htmlFor="StartDate">
                    <input type="text" placeholder="Enter Start Date" name="StartDate"/>
                </label>
                <label htmlFor="EndDate">
                    <input type="text" placeholder="Enter End Date" name="EndDate"/>
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the College" name="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export function ExperienceForm({setExperienceInfo}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const experienceInfo = {
            CompanyName: data.get('CompanyName'),
            Position: data.get('Position'),
            startDate: data.get('StartDate'),
            endDate: data.get('EndDate'),
            location: data.get('Location')
        };
        console.log(experienceInfo)
        setExperienceInfo(experienceInfo)
    };

    return (
        <div>
            <h3>Enter Experience</h3>
            <form action="#" method="get" onSubmit={handleSubmit}>
                <label htmlFor="CompanyName">
                    <input type="text" placeholder="Enter Company Name" name="CompanyName" />
                </label>
                <label htmlFor="Position">
                    <input type="text" placeholder="Position" name="Position"/>
                </label>
                <label htmlFor="StartDate">
                    <input type="text" placeholder="Enter Start Date" name="StartDate" />
                </label>
                <label htmlFor="EndDate">
                    <input type="text" placeholder="Enter End Date" name="EndDate" />
                </label>
                <label htmlFor="Location">
                    <input type="text" placeholder="Enter Location of the Company" name="Location" />
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