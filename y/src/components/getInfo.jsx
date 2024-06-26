import './getInfo.css';
import { useState } from "react";
import { GeneralForm, ProjectForm } from "./renderForm";
import { EducationForm } from "./renderForm";
import { ExperienceForm } from "./renderForm";
import { SkillForm } from "./renderForm";
import { AchievementForm } from './renderForm';
import { CertificateForm } from './renderForm';
import DisplayInfo from './displayInfo';
export default function GetInfo() {
    const [open1, setIsOpen] = useState(false);
    const [open2, setIsOpen2] = useState(false); 
    const [open3, setIsOpen3] = useState(false);
    const [open4, setIsOpen4] = useState(false);
    const [open5, setIsOpen5] = useState(false);
    const [open6, setIsOpen6] = useState(false);
    const [open7, setIsOpen7] = useState(false);

    const openForm7 = () => setIsOpen7(true);
    const openForm6 = () => setIsOpen6(true);
    const openForm5 = () => setIsOpen5(true);
    const openForm4 = () => setIsOpen4(true);
    const openForm3 = () => setIsOpen3(true);
    const openForm2 = () => setIsOpen2(true);
    const openForm = () => setIsOpen(true);

    const [personalInfo, setPersonalInfo] = useState(null);
    const [educationInfo, setEducationInfo] = useState({School:'', FieldofStudy:'', StartDate:'', EndDate:'', Location:'', Grade:''});
    const [experienceInfo, setExperienceInfo] = useState({CompanyName: '', Position: '', StartDate:'', EndDate:'', Location:''});
    const [skillInfo, setSkillInfo] = useState({SkillDmain:'', Skills:''});
    const [projectInfo, setProjectInfo] = useState({ProjectName:'', ProjectDes:'', ProjectLink:''})
    const [AchievementsInfo, setAchievementInfo] = useState({AchievementName: '', Description: ''})
    const [CertificateInfo, setCertificateInfo] = useState({CertificateName:'', Grantedby:'', CertID:'', Date:''})


    const [EduItems, setEduItems] = useState([]);
    const [ExpItems, setExpItems] = useState([]);
    const [SkillItems, setSkillItems] = useState([]);
    const [ProjectItems, setProjectItems] = useState([]);
    return (
        <div className="container">
            <div className='button-container'>
                <h3>General Information</h3>
                <button onClick={openForm}>Add General Information</button>
                <button onClick={()=>setIsOpen(false)}>Close</button>
                <div className="renderHere" id="Form1">
                    {open1 && <GeneralForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo}/>}
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
                    {open4  && <SkillForm setSkillInfo={setSkillInfo} skillInfo={skillInfo} SkillItems={SkillItems} setSkillItems={setSkillItems}/>}
                </div>
            </div>
            <div className='cv-container'>
                <DisplayInfo 
                personalInfo={personalInfo}
                educationInfo={educationInfo}
                experienceInfo={experienceInfo}
                skillInfo={skillInfo}
                EduItems={EduItems}
                ExpItems={ExpItems}
                AchievementsInfo={AchievementsInfo}
                projectInfo={projectInfo}
                CertificateInfo={CertificateInfo}
                SkillItems={SkillItems}
                ProjectItems={ProjectItems}
                />
            </div>
            <div className='Optional'>

            <h3>Projects</h3><p>(Optional)</p>
                <button onClick={openForm5}>Add Projects</button>
                <button onClick={()=>setIsOpen5(false)}>Close</button>
                <div>
                    {open5 && <ProjectForm setProjectInfo={setProjectInfo} projectInfo={projectInfo} ProjectItems={ProjectItems} setProjectItems={setProjectItems}/>}
                </div>
                <h3>Achievements</h3><p>(Optional)</p>
                <button onClick={openForm6}>Add Achievements</button>
                <button onClick={()=>setIsOpen6(false)}>Close</button>
                <div>
                    {open6 && <AchievementForm setAchievementInfo={setAchievementInfo}/>}
                </div>
                <h3>Certificates</h3><p>(Optional)</p>
                <button onClick={openForm7}>Add Certificates</button>
                <button onClick={()=>setIsOpen7(false)}>Close</button>
                <div>
                    {open7 && <CertificateForm setCertificateInfo={setCertificateInfo}/>}
                </div>
            </div>

        </div>

    );
}
