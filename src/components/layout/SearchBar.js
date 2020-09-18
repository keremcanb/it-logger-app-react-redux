import React from 'react';
// import React, { useRef } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { searchLogs } from '../../actions/logActions';

const SearchBar = () => (
  <nav style={{ marginBottom: '30px' }} className='blue'>
    <div className='nav-wrapper'>
      <form>
        <div className='input-field'>
          <input id='search' type='search' placeholder='Search Logs..' />
          <label className='label-icon' htmlFor='search'>
            <i className='material-icons'>search</i>
          </label>
          <i className='material-icons'>close</i>
        </div>
      </form>
    </div>
  </nav>
);

export default SearchBar;
