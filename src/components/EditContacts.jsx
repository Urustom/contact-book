import React, { useState } from "react";

const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);

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

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);
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
        type="number"
        placeholder="Phone number"
        value={phone}
      />
      <button style={classes.button} onClick={handleSaveClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2654/2654416.png"
          alt="SAVE"
        />
      </button>
    </div>
  );
};

export default EditContacts;
