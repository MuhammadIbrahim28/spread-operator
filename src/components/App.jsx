import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  function onChangeHandle(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
      // if (name == "fname"){
      //   return { fname: value, lname: prevValue.lname, email: prevValue.email };
      // } else if (name == "lname") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: value,
      //     email: prevValue.email
      //   };
      // } else if (name == "email") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: prevValue.lname,
      //     email: value
      //   };
      // }
    });
  }
  function setback(event) {
    setContact(contact);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>
      <from onSubmit="setback">
        <input
          name="fname"
          value={contact.fname}
          onChange={onChangeHandle}
          type="text"
          placeholder="Fname"
        />
        <input
          name="lname"
          value={contact.lname}
          onChange={onChangeHandle}
          type="text"
          placeholder="Lname"
        />
        <input
          name="email"
          value={contact.email}
          onChange={onChangeHandle}
          type="text"
          placeholder="email"
        />
        <button type="submit" onClick={setback}>
          Submit
        </button>
      </from>
    </div>
  );
}

export default App;
