import { connect } from 'react-redux';
import SiteCard from '../components/SiteCard';

const mapStateToProps = (state, ownProps) => {
  return {
    displayName: state.sites.entities[ownProps.siteID].displayName,
    siteID: ownProps.siteID,
    categoryNames: state.sites.entities[ownProps.siteID].siteCategoryIDs.map(
      categoryId => state.categories.entities[categoryId].displayName,
    ),
  };
};

export default connect(mapStateToProps)(SiteCard);
