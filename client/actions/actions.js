// import actionType constants
import * as types from '../constants/actiontypes';

// export const setNewLocation = (newLocation) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: newLocation,
// });

export const addPlant = (obj) => ({
  type: types.ADD_PLANT,
  payload: obj,
});

export const deletePlant = (placeholder) => ({
  type: types.DELETE_PLANT,
  payload: placeholder,
});
