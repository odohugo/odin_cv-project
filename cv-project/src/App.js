import './styles/App.css';
import PersonalInfoForm from './modules/PersonalInfoForm';
import { useState } from 'react';
import FullCv from './modules/FullCv';
import EducationForm from './modules/EducationForm';
import WorkForm from './modules/WorkForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([]);
  const [jobInfo, setJobInfo] = useState([]);

  const sendPersonalInfo = (info) => {
    setPersonalInfo(info);
  }
  const sendEducationInfo = (info) => {
    setEducationInfo(info);
  }
  const sendJobInfo = (info) => {
    setJobInfo(info);
  }
  return (
    <div className='container'>
      <div className='personal-info-form'><PersonalInfoForm sendChildData={sendPersonalInfo} /></div>
      <div className='study-info-form'><EducationForm sendChildData={sendEducationInfo} eduInfo={educationInfo}/></div>
      <div className='job-info-form'><WorkForm sendChildData={sendJobInfo} jobInfo={jobInfo}/></div>
      <div className='full-cv'><FullCv userInfo={personalInfo} educationInfo={educationInfo} jobInfo={jobInfo}/></div>
    </div>
  );
}

export default App;