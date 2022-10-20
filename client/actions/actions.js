// import actionType constants
import * as types from '../constants/actiontypes';

// export const setNewLocation = (newLocation) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: newLocation,
// });

export const addPlant = (name) => ({
  type: types.ADD_PLANT,
  payload: name,
});

export const updatePlant = (obj) => ({
  type: types.UPDATE_PLANT,
  payload: obj,
});

export const deletePlant = (name) => ({
  type: types.DELETE_PLANT,
  payload: name,
});
