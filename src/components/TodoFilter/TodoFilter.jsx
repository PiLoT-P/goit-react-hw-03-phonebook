import { Component } from "react";
import PropTypes from "prop-types";

class TodoFilter extends Component{
    static propTypes = {
        filter: PropTypes.string.isRequired,
        getFilter: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <p>Filter</p>
                <input
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    value={this.props.filter}
                    onChange={this.props.getFilter}
                />
            </div>
        );
    }
}

export default TodoFilter;