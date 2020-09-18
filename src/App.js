/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
// import AddBtn from './components/layout/AddBtn';
// import AddLogModal from './components/logs/AddLogModal';
// import EditLogModal from './components/logs/EditLogModal';
// import AddTechModal from './components/techs/AddTechModal';
// import TechListModal from './components/techs/TechListModal';
// import { Provider } from 'react-redux';
// import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </>
  );
};

export default App;
