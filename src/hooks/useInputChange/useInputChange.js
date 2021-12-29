import { useReducer } from 'react';
import * as yup from 'yup';

import { createEvent } from '../../utils/inputHelpers';
import schema from '../../utils/validationHelpers';

const useInputChange = (initialState, options = { clearErrors: false }) => {
  const actions = {
    CHANGE_INPUT: 'CHANGE_INPUT',
    SET_INPUT_ERROR: 'SET_INPUT_ERROR',
    SET_INIT_STATE: 'SET_INIT_STATE',
    UPDATE_STATE: 'UPDATE_STATE',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actions.CHANGE_INPUT:
        return {
          ...state,
          errors: options.clearErrors ? {} : state.errors,
          [action.payload.name]: action.payload.value,
        };
      case actions.SET_INPUT_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.payload.name]: action.payload.errorValue,
          },
        };
      case actions.SET_INIT_STATE:
        return { ...initialState, errors: {} };
      case actions.UPDATE_STATE:
        return action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const validateInput = async (event) => {
    const { name, value } = event.target;
    const valid = await schema.isValid({ [name]: value });
    if (valid) {
      setError(name, '');
      return '';
    }
    try {
      await yup.reach(schema, name).validate(value);
      setError(name, '');
    } catch (error) {
      const { message: errorValue } = error;
      setError(name, errorValue);
      return errorValue;
    }
  };

  const changeInput = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    dispatch({
      type: actions.CHANGE_INPUT,
      payload: { name, value: newValue },
    });
    validateInput(createEvent(name, value));
  };

  const setInitState = () => {
    dispatch({ type: actions.SET_INIT_STATE });
  };

  const setError = (name, errorValue) => {
    dispatch({ type: actions.SET_INPUT_ERROR, payload: { name, errorValue } });
  };

  const updateState = (newState) => {
    dispatch({ type: actions.UPDATE_STATE, payload: newState });
  };

  return [
    state,
    { validateInput, changeInput, setInitState, setError, updateState },
  ];
};

export default useInputChange;
