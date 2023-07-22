import React from "react";

export const ContactList  = ({ data }) => {
    return <ul>
          {
            data.map(contact => {
             return <li key={contact.id}>
                <p>{contact.name}</p>
                <p>{contact.password}</p>
              </li>
            })
}
        </ul>
}