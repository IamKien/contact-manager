import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdo@gmail.com",
        phone: "111-222-333"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ks@gmail.com",
        phone: "222-333-444"
      },
      {
        id: 3,
        name: "Kevin Durant",
        email: "kd@gmail.com",
        phone: "555-666-777"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
