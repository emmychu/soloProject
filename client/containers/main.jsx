const React = require('react');
import Plant from '../components/plant.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import NavBar from './nav.jsx';

const mapStateToProps = (state) => ({
  plantList: state.plants.plantList,
});

const mapDispatchToProps = (dispatch) => ({
  addPlant: (data) => dispatch(actions.addPlant(data)),
});

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function convertDate(str) {
  const cut = str.indexOf('T');
  const newDate = new Date(str.slice(0, cut));
  let convert = newDate.toLocaleDateString('en-US');
  return convert;
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
      />
    );
  });
  return (
    <div id='main-container'>
      <h1 id='hi'>Plant Friends</h1>
      <NavBar addPlant={props.addPlant} />
      {plantArr}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
