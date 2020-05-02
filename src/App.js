import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    id: "",
  });
  const [contactsData, setContactsData] = useState([]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => {
      return {
        ...prevData,
        [name]: value,
        id: uuid(),
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setContactsData((prevData) => {
      return [...prevData, inputData];
    });
    setInputData({
      id: "",
      firstName: "",
      lastName: "",
    });
  };

  const deleteItem = (id) => {
    setContactsData(contactsData.filter((contact) => contact.id !== id));
  };

  const contacts = contactsData.map((contact) => {
    return (
      <div key={contact.id}>
        {contact.firstName} {contact.lastName}{" "}
        <button onClick={() => deleteItem(contact.id)}> x </button>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          value={inputData.firstName}
          onChange={handleInput}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          value={inputData.lastName}
          onChange={handleInput}
        />
        <button>Add</button>
      </form>
      <h2>Contacts</h2>
      {contacts}
    </div>
  );
}

export default App;
