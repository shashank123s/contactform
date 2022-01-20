import React from 'react';
import { useState } from 'react';
export const Items = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("yyyy-MM-dd");
  const [gender, setGender] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, age: age, dob: dob, gender: gender };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);

  }

  return (
    <div className="container" onSubmit={submitForm}>
      <form action="">
        <input type="text" value={name} className="feedback-input" placeholder="Name"
          onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} className="feedback-input" placeholder="Age"
          onChange={(e) => setAge(e.target.value)} />

        <div className="birth">
          {/* <input type="date" name="begin" 
        placeholder="yyyy-MM-dd" value="dob"
        onChange={(e) =>setDob(e.target.value)}/> */}
          <label htmlFor="birthday" >Date of Birth</label>
          <input type="date" value={dob} id="birthday" name="Birthday" onChange={(e) => setDob(e.target.value)} />
        </div>

        <div className="birth">
          <label htmlFor="cars" >Your Gender</label>
          <select name="Gender" value={gender} id="gender"
            onChange={(e) => setGender(e.target.value)}>
            <option value="none"> Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <input type="submit" value="SUBMIT" />
      </form>


       <div >
        {
          allEntry.map((curElem) => { 
            return (
              <div className="teds"> 
            <p>{curElem.name}</p>
            <p>{curElem.age}</p>
            <p>{curElem.dob}</p>
            <p>{curElem.gender}</p>
            </div>
            )
           })
   }
   </div>
         
   </div>
  );
};
