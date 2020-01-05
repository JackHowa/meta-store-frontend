import { connect } from 'react-redux';
import SiteList from '../components/SiteList';

const mapStateToProps = state => {
  return { siteUUIDs: state.sites.uuids };
};

export default connect(mapStateToProps)(SiteList);
