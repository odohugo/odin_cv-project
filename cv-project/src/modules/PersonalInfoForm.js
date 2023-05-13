import React from "react";
import { useState } from "react";
import '../styles/PersonalInfoForm.css'

export default function PersonalInfoForm (props) {
  const [username, setUsername] = useState('')
  const [useremail, setUseremail] = useState('')
  const [userphone, setUserphone] = useState('')

  function submitHandler(e){
    e.preventDefault();
    props.sendChildData({name:username, email:useremail, phone:userphone})
    
    console.log({name:username, email:useremail, phone:userphone})
  }

  return (
    <>
    <div className="title"><p>Personal Data:</p></div>
    <form className="userForm" onSubmit={submitHandler}>
      <label>
        Name:<br/>
          <input
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}>
          </input>
      </label>
      <label>
        Email:<br/>
          <input 
          name='useremail'
          value={useremail}
          onChange={e => setUseremail(e.target.value)}>
          </input>
      </label>
      <label>
        Phone number:<br/>
          <input 
          name='userphone'
          value={userphone}
          onChange={e => setUserphone(e.target.value)}
          >
          </input>
      </label>
      <button type='submit' className="formBtn">
      Submit
      </button>
    </form>
    </>
  );
}