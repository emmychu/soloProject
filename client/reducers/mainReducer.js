import * as types from '../constants/actiontypes';

const initialState = {
  totalPlants: 0,
  plantList: [],
  lastPlantId: 100,
};

const mainReducer = (state = initialState, action) => {
  let plantList = [];

  switch (action.type) {
    case types.LOAD: {
      plantList = action.payload;
      return { ...state, plantList };
    }
    case types.ADD_PLANT: {
      plantList = state.plantList.slice();
      plantList.push(action.payload);
      return { ...state, plantList };
    }
    case types.UPDATE_PLANT: {
      plantList = state.plantList.slice();
      let search;
      let current;
      if (action.payload.oldName) {
        search = action.payload.oldName;
        delete action.payload.oldName;
      } else {
        search = action.payload.name;
      }
      for (let i = 0; i < plantList.length; i++) {
        if (plantList[i].name === search) {
          current = i;
        }
      }
      const updated = Object.assign({}, plantList[current], action.payload);
      plantList[current] = updated;
      return { ...state, plantList };
    }
    case types.DELETE_PLANT: {
      plantList = state.plantList.slice();
      let current;
      for (let i = 0; i < plantList.length; i++) {
        if (plantList[i].name === action.payload) {
          current = i;
        }
      }
      plantList = plantList
        .slice(0, current)
        .concat(plantList.slice(current + 1));
      return { ...state, plantList };
    }
    default: {
      return { ...state };
    }
  }
};

export default mainReducer;
