import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  const classes = {
    button: {
      margin: 0,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div style={classes.container}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
        value={surname}
      />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone number"
        value={phone}
      />
      <button style={classes.button} onClick={handleClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/747/747968.png"
          alt="ADD CONTACT"
        />
      </button>
    </div>
  );
};

export default AddContact;
