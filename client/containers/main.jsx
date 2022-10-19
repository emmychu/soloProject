const React = require('react');
import Plant from '../components/plant.jsx';
import { connect } from 'react-redux';
import * as actiuons from '../actions/actions';
import { useState } from 'react';

const mapStateToProps = (state) => ({
  plantList: state.plants.plantList,
});

const mapDispatchToProps = (dispatch) => ({
  addPlant: (id) => dispatch(actions.addPlant(id)),
});

// const test = {
//   plantName: 'Henry',
//   lastRepot: new Date(),
//   lastWater: new Date(),
//   lastFert: new Date(),
//   notes: 'help me',
// };

const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });
    const data = await response.json();
    return data.plants;
  } catch (error) {
    console.log('getData error', error);
  }
};

const MainContainer = (props) => {
  let plantArr = [];
  props.plantList.forEach((plant) => {
    plantArr.push(
      <Plant
        key={plant.plantName}
        plantName={plant.plantName}
        location={plant.location}
        repot={plant.lastRepot}
        water={plant.lastWater}
        fert={plant.lastFert}
        notes={plant.notes}
      />
    );
  });
  return (
    <div id='main-container'>
      <h1 id='hi'>plants</h1>
      {plantArr}
    </div>
  );
};

export default connect(mapStateToProps, null)(MainContainer);
