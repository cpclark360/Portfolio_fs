import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ContactList = props => {
  const contact = props.contact;

  return (
    <div className="contact-container">
      <div className="desc">
       <p>{contact.updated_date}</p>
      <p>{contact.firstName}</p>
      <p>{contact.lastName}</p>
        <p>{contact.email}</p>
        <p>{contact.message}</p>
      </div>
    </div>
  );
};

export default ContactList;