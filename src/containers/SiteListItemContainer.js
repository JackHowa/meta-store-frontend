import { connect } from 'react-redux';
import SiteCard from '../components/SiteCard';

const mapStateToProps = (state, ownProps) => {
  return {
    site: state.sites.entities[ownProps.siteUUID],
  };
};

export default connect(mapStateToProps)(SiteCard);
