import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_CATEGORY } from '../endpoints';
import { toggleElement } from '../../utils/arrayHelpers';

const fetchCategoriesSuccessfully = (categories) => ({
  type: AT.FETCH_CATEGORIES_SUCCESSFULLY,
  payload: categories,
});

export const fetchCategories = (userId) => async (dispatch) => {
  try {
    const result = await purposeApi(userId).get(URL_CATEGORY);
    const { categories, pointsObj } = result.data;
    const data = categories.map((category) => ({
      ...category,
      currentWeekPoints: pointsObj[category._id] || 0,
    }));
    dispatch(fetchCategoriesSuccessfully(data));
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
    const { categoryName: name, ...restCategory } = category;
    const newCategory = { ...restCategory, name };
    const result = await purposeApi(currentUser.id).post(
      URL_CATEGORY,
      newCategory
    );
    dispatch(createCategorySuccessfully(newCategory, result.data.id));
  } catch (err) {
    console.log(err);
  }
};

const updateCategorySuccessfully = (category) => ({
  type: AT.UPDATE_CATEGORY_SUCCESSFULLY,
  payload: category,
});

export const updateCategory = (category) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { categoryName: name, _id, ...restCategory } = category;
    const updatedCategory = { ...restCategory, name };
    await purposeApi(currentUser.id).put(
      `${URL_CATEGORY}/${category._id}`,
      updatedCategory
    );
    dispatch(updateCategorySuccessfully({ ...updatedCategory, _id }));
  } catch (err) {
    console.log(err);
  }
};

export const changeSearchValueForCategory = (searchText) => ({
  type: AT.CHANGE_SEARCH_VALUE_FOR_CATEGORY,
  payload: searchText,
});

export const changeSortingForCategory = (column) => (dispatch, getState) => {
  const { sortingColumn, sortingWay } = getState().categories;
  let [newSortingColumn, newSortingWay] = ['', ''];

  if (sortingColumn === column && sortingWay === 'asc') {
    newSortingWay = '';
    newSortingColumn = '';
  } else if (sortingColumn !== column) {
    newSortingColumn = column;
    newSortingWay = 'desc';
  } else {
    newSortingColumn = column;
    newSortingWay = 'asc';
  }

  dispatch({
    type: AT.CHANGING_SORTING_FOR_CATEGORY,
    payload: { sortingColumn: newSortingColumn, sortingWay: newSortingWay },
  });
};

export const setSelectedCategories = (categoriesIds) => ({
  type: AT.SET_SELECTED_CATEGORIES,
  payload: categoriesIds,
});

export const toggleCategory = (_id) => (dispatch, getState) => {
  const { categories } = getState();
  const { selectedCategories } = categories;
  const newCategoriesIds = toggleElement(selectedCategories, _id);
  dispatch(setSelectedCategories(newCategoriesIds));
};

export const deselectAllCategories = () => (dispatch) => {
  const newCategoriesIds = Object.keys([]);
  dispatch(setSelectedCategories(newCategoriesIds));
};

export const selectAllCategorieries = () => (dispatch, getState) => {
  const { categories } = getState();
  const { allCategories } = categories;
  const newCategoriesIds = Object.keys(allCategories);
  dispatch(setSelectedCategories(newCategoriesIds));
};

export const setSearchCategories = (searchCategory) => ({
  type: AT.SET_SEARCH_CATEGORY,
  payload: searchCategory,
});
