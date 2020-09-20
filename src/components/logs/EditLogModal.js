/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
// import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const modalStyle = {
    width: '75%',
    height: '75%',
  };

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };

      updateLog(updLog);
      M.toast({ html: `Log updated by ${tech}` });

      // Clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <input className='input-field' />
          <select
            name='tech'
            value={tech}
            className='browser-default'
            onChange={(e) => setTech(e.target.value)}
          >
            <option value='' disabled>
              Select Technician
            </option>
            <option value='John Doe'>John Doe</option>
            <option value='Sam Smith'>Sam Smith</option>
            <option value='Sarah Wilson'>Sarah Wilson</option>
          </select>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect blue waves-light btn'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
