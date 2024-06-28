import './getInfo.css';
import deletebtn from '../images/deletebtn.svg';
import addbtn from '../images/addbtn.svg';
import { useState } from "react";
import { GeneralForm, ProjectForm } from "./renderForm";
import { EducationForm } from "./renderForm";
import { ExperienceForm } from "./renderForm";
import { SkillForm } from "./renderForm";
import { AchievementForm } from './renderForm';
import { CertificateForm } from './renderForm';
import DisplayInfo from './displayInfo';
import { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
    const [AchievementsInfo, setAchievementInfo] = useState({Name: '', Description: ''})
    const [CertificateInfo, setCertificateInfo] = useState({CertificateName:'', Grantedby:'', CertID:'', Date:''})

    const [EduItems, setEduItems] = useState([]);
    const [ExpItems, setExpItems] = useState([]);
    const [SkillItems, setSkillItems] = useState([]);
    const [ProjectItems, setProjectItems] = useState([]);
    const [CertificateItems, setCertificateItems] = useState([]);
    const [AchievementsItems, setAchievementItems] = useState([]);

    const storedPersonalInfo = JSON.parse(localStorage.getItem('personalInfo'));
    const storedEduItems = JSON.parse(localStorage.getItem('eduItems'));
    const storedExpItems = JSON.parse(localStorage.getItem('expItems'));
    const storedSkillItems = JSON.parse(localStorage.getItem('skilledItems'));
    const storedAchievementsItems = JSON.parse(localStorage.getItem('achieveItems'));
    const storedProjectItems = JSON.parse(localStorage.getItem('projectItems'));
    const storedCertificateItems = JSON.parse(localStorage.getItem('certiItems'))

    const handleDelete = () => {
        localStorage.removeItem('personalInfo');
        setPersonalInfo(null);
      };
      const handleSelectiveDelete = (key, index) => {
        const items = JSON.parse(localStorage.getItem(key)) || [];
        items.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(items));
        updateState(key, items);
      };
      
      const updateState = (key, items) => {
        switch (key) {
          case 'eduItems':
            setEduItems(items);
            break;
          case 'expItems':
            setExpItems(items);
            break;
          case 'skilledItems':
            setSkillItems(items);
            break;
          case 'projectItems':
            setProjectItems(items);
            break;
          case 'certiItems':
            setCertificateItems(items);
            break;
          case 'achieveItems':
            setAchievementItems(items);
            break;
          default:
            break;
        }
      };
      const resumeRef = useRef(null); // Reference to the resume container

      const handleExportImage = async () => {
        // Capture the content of the resume container
        const resumeElement = resumeRef.current;
        const canvas = await html2canvas(resumeElement);
    
        // Convert canvas to image data URL (optional)
        const imageDataURL = canvas.toDataURL('image/png');
    
        // Create a PDF document
        const pdf = new jsPDF();
    
        // Add the image (or content directly) to the PDF
        pdf.addImage(imageDataURL || canvas, 'PNG', 0, 0); // Adjust X, Y coordinates for placement
        pdf.save('MyResume.pdf'); // Save the PDF with a filename
      };
    return (
        <div className="container">
            <div className='button-container'>
                <h3>General Information</h3>
                <div>
                        {storedPersonalInfo ? (
                            (
                            <>
                            <div className='personal-card'>
                            <p>{storedPersonalInfo.FullName}</p>
                            <button className='delete-button' onClick={handleDelete}><img src={deletebtn} alt="" /></button>
                            </div>
                            </>
                            )
                        ): null}
                <button onClick={openForm}>Add General Information</button>
                <button onClick={()=>setIsOpen(false)} className='button-secondary'>Close</button>
                </div>

                <div className="renderHere" id="Form1">
                    {open1 && <GeneralForm setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} setIsOpen={setIsOpen}/>}
                </div>
                <h3>Education</h3>
                <div>
                <div className="experience-section">
                {storedEduItems ? (
                    (
                        <>
                        {storedEduItems.map((item, index) => (
                        <div key={index} className="expItem">
                        <div className='personal-card'>
                        <p>{item.School}</p>
                        <button onClick={() => handleSelectiveDelete('eduItems', index)} className='delete-button'><img src={deletebtn} alt="" /></button>
                        </div>
                        </div>
                    ))}
                        </>
                    )
                )
                :null}
                    </div>
                <button onClick={openForm2}>Add Education</button>
                <button onClick={()=>setIsOpen2(false)} className='button-secondary'>Close</button>
                </div>
                <div className="renderHere" id="Form2">
                    {open2 && <EducationForm setEducationInfo= {setEducationInfo} setEduItems={setEduItems} EduItems={EduItems} educationInfo={educationInfo}/>}
                </div>
                <h3>Experience</h3>
                <div>
                <div className="experience-section">
                {storedExpItems ? (
                    (
                        <>
                         {storedExpItems.map((item, index) => (
                        <div key={index} className="expItem">
                        <div className='personal-card'>
                        <p>{item.CompanyName}</p>
                        <button onClick={() => handleSelectiveDelete('expItems', index)} className='delete-button'><img src={deletebtn} alt="" /></button>
                        </div>
                        </div>
                    ))}
                        </>
                    )
                )
                :null}
                    </div>
                <button onClick={openForm3}>Add Experience</button>
                <button onClick={()=>setIsOpen3(false)} className='button-secondary'>Close</button>
                </div>
                <div className="renderHere" id="Form3">
                    {open3 && <ExperienceForm setExperienceInfo={setExperienceInfo} setExpItems={setExpItems} experienceInfo={experienceInfo} ExpItems={ExpItems}/>}
                </div>
                <h3>Skills</h3>
                <div>
                <div className="experience-section">
                {storedSkillItems ? (
                    (
                        <>
                         {storedSkillItems.map((item, index) => (
                        <div key={index} className="expItem">
                        <div className='personal-card'>
                        <p>{item.SkillDomain}</p>
                        <button onClick={() => handleSelectiveDelete('skilledItems', index)} className='delete-button'><img src={deletebtn} alt="" /></button>
                        </div>
                        </div>
                    ))}
                        </>
                    )
                ):null}
                    </div>
                <button onClick={openForm4}>Add Skills</button>
                <button onClick={()=>setIsOpen4(false)} className='button-secondary'>Close</button>
                </div>
                <div className="renderHere" id="Form4">
                    {open4  && <SkillForm setSkillInfo={setSkillInfo} skillInfo={skillInfo} SkillItems={SkillItems} setSkillItems={setSkillItems}/>}
                </div>
                <button onClick={handleExportImage} className='export'><img src={addbtn} alt="" className='addimg'/>Export as PDF</button>
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
                CertificateItems={CertificateItems}
                AchievementsItems={AchievementsItems}
                resumeRef={resumeRef}
                />
            </div>
            <div className='Optional'>

            <p><strong>Projects</strong>(Optional)</p>
            <div>
            <div className="experience-section">
            {storedProjectItems ? (
                (
                    <>
                    {storedProjectItems.map((item, index) => (
                        <div key={index} className="personal-card">
                        <p>{item.ProjectName}</p>
                        <button onClick={() => handleSelectiveDelete('projectItems', index)}><img src={deletebtn} alt="" /></button>
                        </div>
                    ))}
                    </>
                )
            ):null}
                    </div>
            <button onClick={openForm5}>Add Projects</button>
            <button onClick={()=>setIsOpen5(false)} className='button-secondary'>Close</button>
            </div>
                <div>
                    {open5 && <ProjectForm setProjectInfo={setProjectInfo} projectInfo={projectInfo} ProjectItems={ProjectItems} setProjectItems={setProjectItems}/>}
                </div>
                <p><strong>Achievements</strong>(Optional)</p>
            <div>
            <div className="experience-section">
            {storedAchievementsItems ? (
                (
                    <>
                        {storedAchievementsItems.map((item, index) => (
                        <div key={index} className="expItem">
                        <div className='personal-card'>
                        <p>{item.Name}</p>
                        <button onClick={() => handleSelectiveDelete('achieveItems', index)}><img src={deletebtn} alt="" /></button>
                        </div>
                        </div>
                    ))}
                    </>
                )
            ):null}
                    </div>
            <button onClick={openForm6}>Add Achievements</button>
            <button onClick={()=>setIsOpen6(false)} className='button-secondary'>Close</button>
            </div>
                <div>
                    {open6 && <AchievementForm setAchievementInfo={setAchievementInfo} AchievementsInfo={AchievementsInfo} AchievementsItems={AchievementsItems} setAchievementItems={setAchievementItems}/>}
                </div>
            <p><strong>Certificates</strong>(Optional)</p>
            <div>
            <div className="experience-section">
            {storedCertificateItems ? (
                (<>
                  {storedCertificateItems.map((item, index) => (
                        <div key={index} className="personal-card">
                        <p>{item.CertificateName}</p>
                        <button onClick={() => handleSelectiveDelete('certiItems', index)}><img src={deletebtn} alt="" /></button>
                        </div>
                    ))}
                </>)
            ):null}
            </div>
            <button onClick={openForm7}>Add Certificates</button>
            <button onClick={()=>setIsOpen7(false)} className='button-secondary'>Close</button>
            </div>
              
                <div>
                    {open7 && <CertificateForm setCertificateInfo={setCertificateInfo} CertificateInfo={CertificateInfo} CertificateItems={CertificateItems} setCertificateItems={setCertificateItems}/>}
                </div>
                <div>
            </div>
            </div>
        </div>
    );
}
