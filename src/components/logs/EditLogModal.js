import React, { useState, useEffect } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
