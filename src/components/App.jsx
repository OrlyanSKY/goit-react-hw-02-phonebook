import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      contacts: [this.state.name, ...prevState.contacts],
    }));
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
    });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>

          <br />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return <li key={nanoid()}>{contact}</li>;
          })}
        </ul>
      </>
    );
  }
}
