import React from "react";

const ContactsList = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>{item.phone}</li>

          <button onClick={() => props.handleDeleteContact(item.id)}>
            <img
              src="https://cdn-icons.flaticon.com/png/128/1285/premium/1285067.png?token=exp=1641548477~hmac=e4695aa36bc7865d5a38646f30eaf75b"
              alt="DELETE"
            />
          </button>
          <button onClick={() => props.handleEditIndex(index)}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1160/1160758.png"
              alt="EDIT"
            />
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
