import { CREATE_SITE } from '../actions/siteActions';

const defaultSiteData = {
  entities: {},
  uuids: [],
};
const sitesReducer = (sites = defaultSiteData, action) => {
  if (action.type === CREATE_SITE) {
    const { site, siteUUID } = action.payload;
    return {
      entities: { ...sites.entities, [siteUUID]: site },
      uuids: [...sites.uuids, siteUUID],
    };
  }

  return sites;
};

export default sitesReducer;
