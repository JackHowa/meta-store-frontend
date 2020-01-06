import { schema, normalize } from 'normalizr';
import defaultState from './defaultState.json';

// defining sites that have many categories
// through siteCategories
const category = new schema.Entity('categories');
const site = new schema.Entity('sites', {
  siteCategories: [category],
});

// preexisting data coming in
const normalizedSites = normalize(defaultState.sites, [site]);
const normalizedCategories = normalize(defaultState.categories, [category]);

export const sites = {
  entities: normalizedSites.entities.sites,
  ids: normalizedSites.result,
};

export const categories = {
  entities: normalizedCategories.entities.categories,
  ids: normalizedCategories.result,
};

export default {
  sites,
  categories,
};
