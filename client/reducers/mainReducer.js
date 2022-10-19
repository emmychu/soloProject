import * as types from '../constants/actiontypes';

// const plants = getData();
// console.log(plants);

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
      plantList = state.plantList;
      plantList.push(action.payload);
      console.log(plantList);
      return { ...state, plantList };
    }
    // case types.DELETE_PLANT: {
    //   return {
    //   };
    // }
    default: {
      return { ...state };
    }
  }
};

export default mainReducer;
