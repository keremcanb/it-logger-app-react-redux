import React from 'react';
import Moment from 'react-moment';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteLog, setCurrent } from '../../actions/logActions';
// import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#edit' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
