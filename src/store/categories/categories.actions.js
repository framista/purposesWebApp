import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_CATEGORY } from '../endpoints';

const createCategorySuccessfully = (category, id) => ({
  type: AT.CREATE_CATEGORY_SUCCESSFULLY,
  payload: { ...category, id },
});

export const createCategory = (category) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const result = await purposeApi(currentUser.id).post(
      URL_CATEGORY,
      category
    );
    dispatch(createCategorySuccessfully(category, result.data.id));
  } catch (err) {
    console.log(err);
  }
};
