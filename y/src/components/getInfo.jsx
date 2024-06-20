import { useState } from "react";
function RenderForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const personalInfo = {
            fullName: data.get('FullName'),
            email: data.get('Email'),
            phoneNumber: data.get('PhoneNumber'),
            city: data.get('City')
        };
        console.log(personalInfo)
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

function EducationForm() {
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

function ExperienceForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const educationInfo = {
            CompanyName: data.get('CompanyName'),
            Position: data.get('Position'),
            startDate: data.get('StartDate'),
            endDate: data.get('EndDate'),
            location: data.get('Location')
        };
        console.log(educationInfo)
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
            </form>
        </div>
    );
}
export default function GetInfo() {
    const [open1, setIsOpen] = useState(false);
    const [open2, setIsOpen2] = useState(false); 
    const [open3, setIsOpen3] = useState(false);
    const openForm3 = () => setIsOpen3(true);
    const openForm2 = () => setIsOpen2(true);
    const openForm = () => setIsOpen(true);
    return (
        <div>
            <button onClick={openForm}>General Information</button>
            <div className="renderHere" id="Form1">
                {open1 && <RenderForm/>}
            </div>
            <button onClick={openForm2}>Add Education</button>
            <div className="renderHere" id="Form2">
                {open2 && <EducationForm/>}
            </div>
            <button onClick={openForm3}>Add Experience</button>
            <div className="renderHere" id="Form3">
                {open3 && <ExperienceForm/>}
            </div>
            <div className="displayInfo">

            </div>
        </div>
    );
}
