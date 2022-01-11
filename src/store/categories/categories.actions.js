import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_CATEGORY } from '../endpoints';

const fetchCategoriesSuccessfully = (categories) => ({
  type: AT.FETCH_CATEGORIES_SUCCESSFULLY,
  payload: categories,
});

const fetchCategories = (userId) => async (dispatch) => {
  try {
    const result = await purposeApi(userId).get(URL_CATEGORY);
    dispatch(fetchCategoriesSuccessfully(result.data));
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryRouteData = () => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const promises = [];
    promises.push(dispatch(fetchCategories(currentUser.id)));
    await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
};

const createCategorySuccessfully = (category, id) => ({
  type: AT.CREATE_CATEGORY_SUCCESSFULLY,
  payload: { ...category, id },
});

export const createCategory = (category) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { categoryName: name, newCategory } = category;
    const result = await purposeApi(currentUser.id).post(URL_CATEGORY, {
      ...newCategory,
      name,
    });
    dispatch(createCategorySuccessfully(category, result.data.id));
  } catch (err) {
    console.log(err);
  }
};

export const changeSearchValueForCategory = (searchText) => ({
  type: AT.CHANGE_SEARCH_VALUE_FOR_CATEGORY,
  payload: searchText,
});
