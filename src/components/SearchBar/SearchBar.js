import React, { Component } from 'react';

class SearchBar extends Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSearch(this.state.val);
    }

    render() {
        return (
            <div className="search-bar px-2">
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group my-2">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search..."
                            value={this.state.val}
                            onChange={this.onInputChange}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;