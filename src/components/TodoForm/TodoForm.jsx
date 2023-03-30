import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

import css from "./TodoForm.module.css";

class TodoForm extends Component{
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
            })
        ),
        addTodo: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        number: ''
    }

    hendleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    hendleSubmit = (event) => {
        event.preventDefault();

        const todo = {id: uuidv4(), ...this.state };
        let k = 0;

        this.props.contacts.map((el) => {
            if (el.name === this.state.name) {
                alert(this.state.name+' is already in contacts');
                k++;
            }
            return k;
        })
        if (k > 0) {
            return;
        } else {
            this.props.addTodo(todo);   
        }
    }

    render() {
        const { name, number } = this.state;

        return (
            <>
                <form className={css.form} onSubmit={this.hendleSubmit}>
                    <label >
                        <p className={css.text}>Name</p>
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.hendleChange}
                        />
                    </label>
                    <label>
                        <p>Number</p>
                        <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.hendleChange}
                        />
                    </label>
                    <button className={css.btn} type="submit">
                        Add contacts
                    </button>
                </form>
            </>
        );
    }
}

export default TodoForm;