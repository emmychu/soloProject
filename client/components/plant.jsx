const React = require('react');
import { render } from 'react-dom';

const Plant = (props) => {
  return (
    <div className='plants-box'>
      <p>
        <img src='' alt={`plant-image-for-${props.plantName}`}></img>
      </p>
      <label htmlFor='plant-name'>Plant Name:</label>
      <span id='plant-name'> {props.plantName}</span>
      <p>
        <label htmlFor='location'>Location:</label>
        <span id='location'> {props.location}</span>
      </p>
      <label htmlFor='last-repot'>Repotted:</label>
      <span id='last-repot'> {props.repot}</span>
      <p>
        <label htmlFor='last-water'>Last Watered:</label>
        <span id='last-water'> {props.water}</span>
      </p>
      <label htmlFor='last-fert'>Fertilized:</label>
      <span id='last-fert'> {props.fert}</span>
      <p>
        <label htmlFor='notes'>Notes:</label>
        <span id='notes'> {props.note}</span>
        <span>
          <button>Update Me!</button>
          <button>Water Me!</button>
          <button>Fertilize Me!</button>
          <button>Repot Me!</button>
          <button>Delete</button>
        </span>
      </p>
    </div>
  );
};

export default Plant;
