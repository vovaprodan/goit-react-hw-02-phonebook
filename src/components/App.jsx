import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import  ContactForm  from './ContactForm/ContactForm'

class App extends Component {

  nameinputid = nanoid();
  numberinputis = nanoid();

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
  }
  changeFilter = e => {
this.setState({filter: e.currentTarget.value})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.name.value;
    const password = form.elements.number.value;
    const contact = { name: login, password: password, id: nanoid() }
    form.reset();
    // this.setState( prevState => {return prevState.contacts.push({ name: login, password: password, id: nanoid() }) })
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }
  render() {
    // const { contacts } = this.state;
    const normalisFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(normalisFilter)
    )

    return (
    
      <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <h1>Phonebook</h1>
      <ContactForm onSubmit= {this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList data={filterContacts} />
        </div>
    );
  }
}
export default App;