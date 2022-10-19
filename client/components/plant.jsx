const React = require('react');
import { render } from 'react-dom';

const Plant = (props) => {
  return (
    <div className='plants-box'>
      <p>
        <img src='' alt={`plant-image-for-${props.plantName}`}></img>
      </p>
      <label htmlFor='plant-name' className={'labels-' + props.plantName}>
        Plant Name:
      </label>
      <span id='plant-name' className={'details-' + props.plantName}>
        {' '}
        {props.plantName}
      </span>
      <p>
        <label htmlFor='location' className={'labels-' + props.plantName}>
          Location:
        </label>
        <span id='location' className={'details-' + props.plantName}>
          {' '}
          {props.location}
        </span>
      </p>
      <label htmlFor='last-repot' className={'labels-' + props.plantName}>
        Repotted:
      </label>
      <span id='last-repot' className={'details-' + props.plantName}>
        {' '}
        {props.repot}
      </span>
      <p>
        <label htmlFor='last-water' className={'labels-' + props.plantName}>
          Last Watered:
        </label>
        <span id='last-water' className={'details-' + props.plantName}>
          {' '}
          {props.water}
        </span>
      </p>
      <label htmlFor='last-fert' className={'labels-' + props.plantName}>
        Fertilized:
      </label>
      <span id='last-fert' className={'details-' + props.plantName}>
        {' '}
        {props.fert}
      </span>
      <p>
        <label htmlFor='notes' className={'labels-' + props.plantName}>
          Notes:
        </label>
        <span id='notes' className={'details-' + props.plantName}>
          {' '}
          {props.notes}
        </span>
      </p>
      <span>
        <button
          id={'update-' + props.plantName}
          onClick={() => {
            let details = document.querySelectorAll(
              '.details-' + props.plantName
            );
            let labels = document.querySelectorAll(
              '.labels-' + props.plantName
            );
            if (details.length > 0) {
              details.forEach((ele) => {
                ele.remove();
              });
              labels.forEach((ele) => {
                ele.insertAdjacentHTML(
                  'afterend',
                  ` <input id=${ele.innerText
                    .slice(0, -1)
                    .replace(/\s/g, '')}></input>`
                );
              });
              let update = document.getElementById('update-' + props.plantName);
              console.log(update);
              update.innerText = 'Submit!';
              update.onclick = () => {
                const info = {};
                console.log('click');
              };
            }
          }}
        >
          Update Me!
        </button>
        <button id='water'>Water Me!</button>
        <button id='fertilize'>Fertilize Me!</button>
        <button id='repot'>Repot Me!</button>
        <button id='delete'>Delete</button>
      </span>
    </div>
  );
};

export default Plant;
