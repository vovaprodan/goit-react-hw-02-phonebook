import React, { Component } from "react";
import { nanoid } from 'nanoid'

class App extends Component {

  nameinputid = nanoid();
  numberinputis = nanoid();

  state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
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
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
        />
        <label htmlFor={this.numberinputis}>Number</label>
        <input
  type="tel"
          name="number"
          id={this.numberinputis}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        </div>
    );
  }
}
export default App;