import React, { Component } from 'react';
import {
  ContForm,
  ContLabel,
  ContInput,
  AddButton,
  Btn,
} from 'components/ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = nanoid();

  handleChange = event => {
    const { name, value, id } = event.currentTarget;
    if (
      (name === 'name' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(value)) ||
      (name === 'number' && /^[0-9-]*$/.test(value))
    ) {
      this.setState({ [name]: value, id });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
    this.nameInputId = nanoid();
  };

  render() {
    return (
      <ContForm onSubmit={this.handleSubmit}>
        <ContLabel htmlFor={this.nameInputId}>
          Name
          <ContInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
          <Btn>Hello</Btn>
        </ContLabel>
        <ContLabel htmlFor={this.nameInputId}>
          Number
          <ContInput
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
        </ContLabel>
        <AddButton type="submit">Add contact</AddButton>
      </ContForm>
    );
  }
}
