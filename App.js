import React, { useState} from 'react';


function App() {
  const [contact, setContact] = useState({
    fName: " ",
    lName: " ",
    email: " ",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return { 
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if(name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        }
      } else if (name === "email"){
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      };
    })
  }

  return (
    <div className="Container">
      <h1> Hello {contact.fName} {contact.lName}
      </h1>
      <p> {contact.email}</p>
      <form>
        <input onChange={handleChange} name='fName'  value={contact.fName} placeholder='First name' />
        <input onChange={handleChange} name='lName'  value={contact.lName} placeholder='Last Name' />
        <input onChange={handleChange} name='email'  value={contact.email}  placeholder='email Address' />
        <button> Submit </button>
       </form>
    </div>
  );
}

export default App;
