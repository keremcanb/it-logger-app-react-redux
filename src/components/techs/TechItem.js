import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteTech } from '../../actions/techActions';
// import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
