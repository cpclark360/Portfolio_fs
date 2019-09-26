import React, { Component } from "react";
import "../login.css";
import "normalize.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ContactList from "./ContactList";



class ShowContacts extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:8082/api/contacts")
      .then(res => {
        this.setState({
          contacts: res.data
        });
      })
      .catch(err => {
        console.log("Error from ShowContacts");
      });
  }





  render() {
    const contacts = this.state.contacts;
    console.log("Print contacts " + contacts);
    let contactList;

    if (!contacts) {
      contactList = "there are no contact records!";
    } else {
    contactList = contacts.map((contact, k) =>  <ContactList contact={contact} key={k} />);}
    

    return ( <main id="main">
      <section className="containerShow">
      <div className="list">{contactList}</div>
      </section>
    </main>
    );
  }
}

export default ShowContacts;
