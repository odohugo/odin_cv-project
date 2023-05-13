import React from "react";
import { useState } from "react";

export default function WorkForm (props) {
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [workfromdate, setWorkFromDate] = useState('');
  const [worktodate, setWorkToDate] = useState('');
  const workInfo = props.jobInfo;

  function submitHandler(e){
    e.preventDefault();
    props.sendChildData([
      ...workInfo,
      {company:company, role:role, fromdate:workfromdate, todate:worktodate}
    ]);
  }

  function clearJobSection(){
    props.sendChildData([]);
  }

  return (
    <>
    <div className="title"><p>Work Experience:</p></div>
    <form className="jobForm" onSubmit={submitHandler}>
      <label>
        Company:<br/>
          <input
          name='company-input'
          value={company}
          onChange={e => setCompany(e.target.value)}>
          </input>
      </label>
      <label>
        <br />Role:<br/>
          <input 
          name='role-input'
          value={role}
          onChange={e => setRole(e.target.value)}>
          </input>
      </label>
      <label>
        <br />From:<br/>
          <input 
          type="date"
          name='workfromdate-input'
          value={workfromdate}
          onChange={e => setWorkFromDate(e.target.value)}
          >
          </input>
      </label>
      <label>
        <br />To:<br/>
          <input 
          type="date"
          name='worktodate-input'
          value={worktodate}
          onChange={e => setWorkToDate(e.target.value)}
          >
          </input>
      </label>
      <br/>
      <button type='submit' className="formBtn">
      Add
      </button>
    </form>
      <button onClick={clearJobSection}>Clear Section</button>
    </>
  );
}