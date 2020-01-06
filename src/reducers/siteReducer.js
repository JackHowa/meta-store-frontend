import { CREATE_SITE } from '../actions/siteActions';

const defaultSiteData = {
  entities: {},
  ids: [],
};
const sitesReducer = (sites = defaultSiteData, action) => {
  if (action.type === CREATE_SITE) {
    const { site, siteID } = action.payload;
    return {
      entities: { ...sites.entities, [siteID]: site },
      ids: [...sites.ids, siteID],
    };
  }

  return sites;
};

export default sitesReducer;
