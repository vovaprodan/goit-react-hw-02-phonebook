import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';

class App extends Component {

  nameinputid = nanoid();
  numberinputis = nanoid();

  state = {
    contacts: [
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameimputid}>Name</label>
       <input
  type="text"
  name="name"
  id={this.nameimputid}
  // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        />
        <label htmlFor={this.numberinputis}>Number</label>
        <input
  type="tel"
  name="number"
  id={this.numberinputis}
  // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList value={filterContacts} />
        </div>
    );
  }
}
export default App;