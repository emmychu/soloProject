const React = require('react');
import Plant from '../components/plant.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  plantList: state.plants.plantList,
});

const mapDispatchToProps = (dispatch) => ({
  updatePlant: (obj) => dispatch(actions.updatePlant(obj)),
  deletePlant: (name) => dispatch(actions.deletePlant(name)),
});

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function convertDate(str) {
  const cut = str.indexOf('T');
  if (cut !== -1) {
    const newDate = new Date(str.slice(0, cut));
    let convert = newDate.toLocaleDateString('en-US', { timeZone: 'UTC' });
    return convert;
  }
  return str;
}

const MainContainer = (props) => {
  let plantArr = [];
  props.plantList.forEach((plant) => {
    let repot = '';
    let water = '';
    let fert = '';
    if (plant.last_repot) {
      repot = convertDate(plant.last_repot);
    }
    if (plant.last_water) {
      water = convertDate(plant.last_water);
    }
    if (plant.last_fertilizer) {
      fert = convertDate(plant.last_fertilizer);
    }
    plantArr.push(
      <Plant
        key={plant.plantName}
        plantName={plant.name}
        location={plant.location}
        repot={repot}
        water={water}
        fert={fert}
        notes={plant.notes}
        updatePlant={props.updatePlant}
        deletePlant={props.deletePlant}
      />
    );
  });
  return (
    <div id='main-container'>
      <h1 id='plant-friends'>I Wet My Plants</h1>
      <div id='plants-container'>{plantArr}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
