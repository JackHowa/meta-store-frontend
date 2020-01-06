import { connect } from 'react-redux';
import SiteList from '../components/SiteList';

const mapStateToProps = state => {
  return { siteIDs: state.sites.ids };
};

export default connect(mapStateToProps)(SiteList);
