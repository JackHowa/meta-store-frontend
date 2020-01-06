import { connect } from 'react-redux';
import SiteInput from '../components/SiteInput';

import { createSite } from '../actions/siteActions';

const mapStateToProps = state => {
  return {
    categoryIDs: state.categories.ids,
    categoryEntities: state.categories.entities,
  };
};

export default connect(mapStateToProps, { createSite })(SiteInput);
