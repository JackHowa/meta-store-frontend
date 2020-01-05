import { connect } from 'react-redux';
import SiteInput from '../components/SiteInput';

import { createSite } from '../actions/siteActions';

export default connect(null, { createSite })(SiteInput);
