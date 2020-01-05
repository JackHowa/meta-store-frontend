import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryIDs: state.sites.entities[ownProps.siteID].displayName,
  };
};

export default connect(mapStateToProps)(CategoryList);
