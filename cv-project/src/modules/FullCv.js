import React from "react";
import '../styles/FullCv.css'

export default function FullCv(props) {
  const userInfo = props.userInfo
  const eduInfo = props.educationInfo
  const jobInfo = props.jobInfo

  return (
    <div className="cv-container">
      <div className="cv-header">Curriculum!</div>
      <div className="cv-info">
        <div className="user-info">
          <p>Name: {userInfo.name}</p><br />
          <p>Email: {userInfo.email}</p><br />
          <p>Phone Number: {userInfo.phone}</p>
        </div>
        <div className="edu-info">
          {eduInfo.map((entry) =>
          <div>
            <p className="cv-section">Education:<br /></p>
          <ul>
            <li key={entry.school}>
              School: {entry.school}<br />
              Course: {entry.course}<br />
              Duration: {entry.fromdate} - {entry.todate}
            </li>
          </ul>
          </div>
          )}
        </div>
        <div className="job-info">
          {jobInfo.map((entry) =>
          <div>
            <p className="cv-section">Work Experience:<br /></p>
          <ul>
            <li key={entry.company}>
              Company: {entry.company}<br />
              Role: {entry.role}<br />
              Duration: {entry.fromdate} - {entry.todate}
            </li>
          </ul>
          </div>
          )}
        </div>
      </div>
      <div className="user-photo"><img src={require("../user.png")} alt="The user's face"/></div>
    </div>
  )
}