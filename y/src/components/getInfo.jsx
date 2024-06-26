import './getInfo.css';
import { useState } from "react";
import { GeneralForm } from "./renderForm";
import { EducationForm } from "./renderForm";
import { ExperienceForm } from "./renderForm";
import { SkillForm } from "./renderForm";
import DisplayInfo from './displayInfo';
export default function GetInfo() {
    const [open1, setIsOpen] = useState(false);
    const [open2, setIsOpen2] = useState(false); 
    const [open3, setIsOpen3] = useState(false);
    const [open4, setIsOpen4] = useState(false);

    const openForm4 = () => setIsOpen4(true);
    const openForm3 = () => setIsOpen3(true);
    const openForm2 = () => setIsOpen2(true);
    const openForm = () => setIsOpen(true);

    const [personalInfo, setPersonalInfo] = useState({FullName: '', Email:''});
    const [educationInfo, setEducationInfo] = useState({School:'', FieldofStudy:'', StartDate:'', EndDate:'', Location:'', Grade:''});
    const [experienceInfo, setExperienceInfo] = useState({CompanyName: '', Position: '', StartDate:'', EndDate:'', Location:''});
    const [skillInfo, setSkillInfo] = useState(null);

    const [items, setItems] = useState([]);
    const [EduItems, setEduItems] = useState([]);
    const [ExpItems, setExpItems] = useState([]);
    return (
        <div className="container">
            <div>
                <h3>General Information</h3>
                <button onClick={openForm}>General Information</button>
                <button onClick={()=>setIsOpen(false)}>Close</button>
                <div className="renderHere" id="Form1">
                    {open1 && <GeneralForm setPersonalInfo={setPersonalInfo} setItems={setItems} items={items} personalInfo={personalInfo}/>}
                </div>
                <h3>Education</h3>
                <button onClick={openForm2}>Add Education</button>
                <button onClick={()=>setIsOpen2(false)}>Close</button>
                <div className="renderHere" id="Form2">
                    {open2 && <EducationForm setEducationInfo= {setEducationInfo} setEduItems={setEduItems} EduItems={EduItems} educationInfo={educationInfo}/>}
                </div>
                <h3>Experience</h3>
                <button onClick={openForm3}>Add Experience</button>
                <button onClick={()=>setIsOpen3(false)}>Close</button>
                <div className="renderHere" id="Form3">
                    {open3 && <ExperienceForm setExperienceInfo={setExperienceInfo} setExpItems={setExpItems} experienceInfo={experienceInfo} ExpItems={ExpItems}/>}
                </div>
                <h3>Skills</h3>
                <button onClick={openForm4}>Add Skills</button>
                <button onClick={()=>setIsOpen4(false)}>Close</button>
                <div className="renderHere" id="Form4">
                    {open4  && <SkillForm setSkillInfo={setSkillInfo}/>}
                </div>
            </div>
            <div>
                <DisplayInfo 
                personalInfo={personalInfo}
                educationInfo={educationInfo}
                experienceInfo={experienceInfo}
                skillInfo={skillInfo}
                items={items}
                EduItems={EduItems}
                ExpItems={ExpItems}
                />
            </div>
        </div>
    );
}
