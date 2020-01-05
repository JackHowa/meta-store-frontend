import { schema, normalize } from 'normalizr';

// defining sites that have many categories
// through siteCategories
const category = new schema.Entity('categories');
const site = new schema.Entity('sites', {
  siteCategories: [category],
});

// preexisting data coming in
const normalizedSites = normalize({}, [site]);
const normalizedCategories = normalize({}, [category]);

export const sites = {
  entities: normalizedSites.entities.sites,
  uuids: normalizedSites.result,
};

export const categories = {
  entities: normalizedCategories.entities.categories,
  uuids: normalizedCategories.result,
};

export default {
  sites,
  categories,
};
