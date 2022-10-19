import * as types from '../constants/actiontypes';

// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };

// let today = new Date('2022-10-18');
// let today2 = today.toLocaleDateString('en-US');
// console.log(typeof today2);

// const test = {
//   id: 98,
//   plantName: 'Henry',
//   location: 'Bedroom',
//   lastRepot: today2,
//   lastWater: today2,
//   lastFert: today2,
//   notes: 'help me',
// };

// const test2 = {
//   id: 99,
//   plantName: 'Abby',
//   location: 'Kitchen',
//   lastRepot: today2,
//   lastWater: today2,
//   lastFert: today2,
//   notes: 'help me',
// };

// const plants = getData();
// console.log(plants);

const initialState = {
  totalPlants: 0,
  plantList: [],
  lastPlantId: 100,
};

const mainReducer = (state = initialState, action) => {
  let plantList;

  switch (action.type) {
    //   case types.ADD_Plant: {
    //     // return updated state
    //     return {
    //     };
    //   }
    //   case types.DELETE_PLANT: {
    //     return {
    //     };
    //   }
    default: {
      const getData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
          });
          const data = await response.json();
          plantList = await data.plants;
        } catch (error) {
          console.log('getData error', error);
        }
      };
      console.log(plantList);
      return { ...state, plantList };
    }
  }
};

export default mainReducer;
