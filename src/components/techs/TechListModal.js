import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../store/actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, [getTechs]);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
