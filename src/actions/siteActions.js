export const CREATE_SITE = 'CREATE_SITE';
const defaultSiteData = {
  displayName: '',
  siteURL: '',
  siteCategoryIDs: [],
};

export const createSite = (newSiteName, selectedCategoryIds) => {
  // todo: use uuid creator or backend
  const siteID = Date.now().toString();

  const site = {
    id: siteID,
    ...defaultSiteData,
    displayName: newSiteName,
    // will need to spread these selected with any default ones if merging
    siteCategoryIDs: selectedCategoryIds,
  };

  return {
    type: CREATE_SITE,
    payload: { site, siteID },
  };
};

export default {
  createSite,
};
