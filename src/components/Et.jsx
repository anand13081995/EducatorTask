import { useState } from "react";

function GeeksterEducationPlanner() {
    const [subjects, setSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState('');
    const [hours, setHours] = useState(0);
  
    const handleSubjectChange = (e) => {
      setNewSubject(e.target.value);
    };
  
    const handleHoursChange = (e) => {
      setHours(parseInt(e.target.value));
    };
  
    const addSubject = () => {
      if (newSubject && hours) {
        setSubjects([...subjects, { subject: newSubject, hours }]);
        setNewSubject('');
        setHours(0);
      }
    };
  
    const increaseHours = (index) => {
      const updatedSubjects = [...subjects];
      updatedSubjects[index].hours += 1;
      setSubjects(updatedSubjects);
    };
  
    const decreaseHours = (index) => {
      if (subjects[index].hours > 0) {
        const updatedSubjects = [...subjects];
        updatedSubjects[index].hours -= 1;
        setSubjects(updatedSubjects);
      }
    };
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Geekster Education Planner</h1>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" value={newSubject} onChange={handleSubjectChange} />
        </div>
        <div>
          <label htmlFor="hours">Hours:</label>
          <button onClick={() => decreaseHours(subjects.length)}>−</button>
          <input type="number" id="hours" value={hours} onChange={handleHoursChange} />
          <button onClick={() => increaseHours(subjects.length)}>+</button>
        </div>
        <button onClick={addSubject}>Add</button>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subject}</td>
                <td>
                  {subject.hours}
                  <button style={{backgroundColor:'red'}} onClick={() => decreaseHours(index)}>−</button>
                  <button style={{backgroundColor:'green'}} onClick={() => increaseHours(index)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default GeeksterEducationPlanner;
