import React from "react";
import "../App.css";
import axios from "axios";

const ContactList = props => {
  const contact = props.contact;



const handleContactDelete = (id) => {
  // deletes the selected contact from the database
  axios
      .delete("http://localhost:8082/api/contacts/" + id)
      .then(res => {
        this.props.history.push("/");

      })
      .catch(err => {
        console.log("Error form deleteClick");
      }); 
      // refreshes the page
      window.location.reload(false);

}

  return (
    <div className="showcontact-container">
      <div className="desc">
       <p><span className="contactTitle">Date: </span>{contact.updated_date}</p>
      <p><span className="contactTitle">First Name: </span>{contact.firstName}</p>
      <p><span className="contactTitle">Last Name: </span>{contact.lastName}</p>
        <p><span className="contactTitle">Email: </span> {contact.email}</p>
        <p className="message"><span className="contactTitle">message: </span> {contact.message}</p>
      </div>
      <button className="contact-button" onClick={handleContactDelete.bind(this, contact._id)}>Delete</button>
    </div>
  );
}

export default ContactList;