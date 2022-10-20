import * as types from '../client/constants/actiontypes';

// const getData = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/api/', {
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//     });
//     const data = await response.json();
//     plantList = await data.plants;
//   } catch (error) {
//     console.log('getData error', error);
//   }
// };

export async function getPlants(dispatch, getState) {
  try {
    const response = await fetch('http://localhost:3000/api/', {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
    });
    const data = await response.json();
    const plantList = data.plants;
    dispatch({ type: types.LOAD, payload: plantList });
  } catch (error) {
    console.log('getData error', error);
  }
}
