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
      <div className="sectionshow">Date Submitted</div>
       <p><span className="contactTitle"></span>{contact.updated_date}</p>
       <div className="sectionshow">Full Name</div>
      <p><span className="contactTitle"></span>{contact.firstName+ " "}<span>{contact.lastName}</span></p>
      
      <div className="sectionshow">E-mail</div>
        <p><span className="contactTitle"></span> {contact.email}</p>
        <div className="sectionshow">Message</div>
        <p className="message"><span className="contactTitle"></span> {contact.message}</p>
      </div>
      <button className="contact-button" onClick={handleContactDelete.bind(this, contact._id)}>Delete</button>
    </div>
  );
}

export default ContactList;