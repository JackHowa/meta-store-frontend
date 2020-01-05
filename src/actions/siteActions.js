export const CREATE_SITE = 'CREATE_SITE';
const defaultSiteData = {
  displayName: '',
  siteURL: '',
  siteCategoryUUIDs: [],
};

export const createSite = (newSiteName, selectedCategoryIds) => {
  // todo: use uuid creator or backend
  const siteUUID = Date.now().toString();

  const site = {
    uuid: siteUUID,
    ...defaultSiteData,
    displayName: newSiteName,
    // will need to spread these selected with any default ones if merging
    siteCategoryUUIDs: selectedCategoryIds,
  };

  return {
    type: CREATE_SITE,
    payload: { site, siteUUID },
  };
};

export default {
  createSite,
};
