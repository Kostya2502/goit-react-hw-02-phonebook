import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    contactChek = () => {
        const { name, number } = this.state;
        const { contacts } = this.props;
        const namesIsIn = contacts.reduce(
            (acc, contact) => [...acc, contact.name],
            [],
        );
        const numbersIsIn = contacts.reduce(
            (acc, contact) => [...acc, contact.number],
            [],
        );

        if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
            alert(`${name}${number} is already in contacts`);
        }

        if (name === '' || number === '') {
            alert('Enter all data, please');
        }
    };

    handleSubmit = e => {
        const { name, number } = this.state;

        e.preventDefault();
        this.setState({ name: '', number: '' });
        if (this.contactChek()) {
            return;
        }

        this.props.onSubmit(name, number);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label >
                    Name:
          <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="enter name"
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Number:
          <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        placeholder="enter number"
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" >
                    Add contact
        </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
};

export default ContactForm;
