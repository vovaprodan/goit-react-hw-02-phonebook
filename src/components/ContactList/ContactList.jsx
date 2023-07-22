import React from "react";

export const ContactList  = ({ filterContacts}) => {
    return <ul>
          {
            filterContacts.map(contact => {
              console.log(contact)
             return <li key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.password}</p>
              </li>
            })
}
        </ul>
}