import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func,
    clearUsers: PropTypes.func,
    shogwClear: PropTypes.bool,
    setAlert: PropTypes.func
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search Users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
