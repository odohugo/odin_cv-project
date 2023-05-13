import React from "react";
import { useState } from "react";
/* import '../styles/EducationForm.css' */

export default function EducationForm (props) {
  const [school, setSchool] = useState('');
  const [course, setCourse] = useState('');
  const [studyfromdate, setStudyFromDate] = useState('');
  const [studytodate, setStudyToDate] = useState('');
  const educationInfo = props.eduInfo;

  function submitHandler(e){
    e.preventDefault();
    props.sendChildData([
      ...educationInfo,
      {school:school, course:course, fromdate:studyfromdate, todate:studytodate}
    ]);
  }

  function clearEduSection(){
    props.sendChildData([]);
  }

  return (
    <>
    <div className="title"><p>Education:</p></div>
    <form className="eduForm" onSubmit={submitHandler}>
      <label>
        School:<br/>
          <input
          name='school-input'
          value={school}
          onChange={e => setSchool(e.target.value)}>
          </input>
      </label>
      <label>
        <br />Course:<br/>
          <input 
          name='course-input'
          value={course}
          onChange={e => setCourse(e.target.value)}>
          </input>
      </label>
      <label>
        <br />From:<br/>
          <input 
          type="date"
          name='studyfromdate-input'
          value={studyfromdate}
          onChange={e => setStudyFromDate(e.target.value)}
          >
          </input>
      </label>
      <label>
        <br />To:<br/>
          <input 
          type="date"
          name='studytodate-input'
          value={studytodate}
          onChange={e => setStudyToDate(e.target.value)}
          >
          </input>
      </label>
      <br/>
      <button type='submit' className="formBtn">
      Add
      </button>
    </form>
      <button onClick={clearEduSection}>Clear Section</button>
    </>
  );
}