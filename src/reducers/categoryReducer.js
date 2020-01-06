import { categories as defaultCategoryData } from '../normalizedState';

// add action for when creating cateogires here
const categoryReducer = (categoryData = defaultCategoryData) => {
  return categoryData;
};

export default categoryReducer;
