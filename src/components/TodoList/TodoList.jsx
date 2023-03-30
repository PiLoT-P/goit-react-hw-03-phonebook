import PropTypes from "prop-types";

import css from "./TodoList.module.css";

const TodoList = ({ contacts = [], removeTodo }) => {
    return (
        <ul>
            {contacts.map(({id, name, number }) => (
                <li key={id}>
                    <p className={css.text}>{name}: {number}</p>
                    <button onClick={(e) => removeTodo(id)}>
                        Delete
                    </button>
                </li>
            ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    removeTodo: PropTypes.func.isRequired
}

export default TodoList;