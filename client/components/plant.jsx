import React, { useState } from 'react';
import { render } from 'react-dom';

const updateData = async (info) => {
  try {
    console.log(info);
    const response = await fetch('http://localhost:3000/api/plant', {
      method: 'PUT',
      body: JSON.stringify(info),
      headers: { 'Content-type': 'Application/JSON' },
    });
    const data = await response.json();
  } catch (error) {
    console.log('error - addingtoserver', error);
  }
};

const deleteData = async (info) => {
  try {
    const response = await fetch('http://localhost:3000/api/plant', {
      method: 'DELETE',
      body: JSON.stringify(info),
      headers: { 'Content-type': 'Application/JSON' },
    });
    const data = await response.json();
  } catch (error) {
    console.log('error - addingtoserver', error);
  }
};

const Plant = (props) => {
  //if I change the state to be submit or update:
  const [current, setCurrent] = useState('update');
  if (current === 'update') {
    return (
      <div className='plants-box'>
        <p>
          <img
            className='plant-img'
            src='https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2022/01/Philodendron-Pink-Princess-Care-2.jpg'
            alt={`plant-image-for-${props.plantName}`}
          ></img>
        </p>
        <div className='data-box'>
          <p>
            <label htmlFor='plant-name' className={'labels-' + props.plantName}>
              Plant Name:
            </label>
            <span id='plant-name' className={'details-' + props.plantName}>
              {' ' + props.plantName}
            </span>
          </p>
          <p>
            <label htmlFor='location' className={'labels-' + props.plantName}>
              Location:
            </label>
            <span id='location' className={'details-' + props.plantName}>
              {props.location}
            </span>
          </p>
          <p>
            <label htmlFor='last-repot' className={'labels-' + props.plantName}>
              Repotted:
            </label>
            <span id='last-repot' className={'details-' + props.plantName}>
              {' ' + props.repot}
            </span>
          </p>
          <p>
            <label htmlFor='last-water' className={'labels-' + props.plantName}>
              Last Watered:
            </label>
            <span id='last-water' className={'details-' + props.plantName}>
              {' ' + props.water}
            </span>
          </p>
          <p>
            <label htmlFor='last-fert' className={'labels-' + props.plantName}>
              Fertilized:
            </label>
            <span id='last-fert' className={'details-' + props.plantName}>
              {' ' + props.fert}
            </span>
          </p>
          <p>
            <label htmlFor='notes' className={'labels-' + props.plantName}>
              Notes:
            </label>
            <span id='notes' className={'details-' + props.plantName}>
              {props.notes}
            </span>
          </p>
        </div>
        <div className='buttons'>
          <div className='but-contain'>
            <img
              className='but-img'
              src='https://cdn-icons-png.flaticon.com/512/88/88016.png'
              id={'update-' + props.plantName}
              onClick={() => {
                if (current === 'update') {
                  setCurrent('submit');
                } else if (current === 'submit') {
                  setCurrent('update');
                }
              }}
            />
          </div>
          <div className='but-contain'>
            <img
              id='water-img'
              className='but-img'
              alt='water drop'
              src='https://static.vecteezy.com/system/resources/previews/001/196/097/original/water-drop-png.png'
              onClick={() => {
                const today = new Date();
                let convert = today.toLocaleDateString('en-US', {
                  timeZone: 'UTC',
                });
                const sendData = {
                  name: props.plantName,
                  last_water: convert,
                };
                updateData(sendData);
                props.updatePlant(sendData);
              }}
            />
          </div>
          <div className='but-contain'>
            <img
              id='fert-img'
              className='but-img'
              alt='water drop'
              src='https://cdn-icons-png.flaticon.com/512/862/862877.png'
              onClick={() => {
                const today = new Date();
                let convert = today.toLocaleDateString('en-US', {
                  timeZone: 'UTC',
                });
                const sendData = {
                  name: props.plantName,
                  last_fertilizer: convert,
                };
                updateData(sendData);
                props.updatePlant(sendData);
              }}
            />
          </div>
          <div className='but-contain'>
            <img
              id='repot-img'
              className='but-img'
              alt='water drop'
              src='https://cdn-icons-png.flaticon.com/512/867/867525.png'
              onClick={() => {
                const today = new Date();
                let convert = today.toLocaleDateString('en-US', {
                  timeZone: 'UTC',
                });
                const sendData = {
                  name: props.plantName,
                  last_repot: convert,
                };
                updateData(sendData);
                props.updatePlant(sendData);
              }}
            />
          </div>
          <div className='but-contain'>
            <img
              src='https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png'
              className='but-img'
              id={'delete-' + props.plantName}
              onClick={() => {
                props.deletePlant(props.plantName);
                deleteData({ name: props.plantName });
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='plants-box'>
        <p>
          <img
            className='plant-img'
            src='https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2022/01/Philodendron-Pink-Princess-Care-2.jpg'
            alt={`plant-image-for-${props.plantName}`}
          ></img>
        </p>
        <div className='data-box'>
          <p>
            <label htmlFor='name' className={'labels-' + props.plantName}>
              Plant Name:
            </label>
            <input id='name' className={'input-' + props.plantName}></input>
          </p>
          <p>
            <label htmlFor='location' className={'labels-' + props.plantName}>
              Location:
            </label>
            <input id='location' className={'input-' + props.plantName}></input>
          </p>
          <p>
            <label htmlFor='last_repot' className={'labels-' + props.plantName}>
              Repotted:
            </label>
            <input
              id='last_repot'
              className={'input-' + props.plantName}
            ></input>
          </p>
          <p>
            <label htmlFor='last_water' className={'labels-' + props.plantName}>
              Last Watered:
            </label>
            <input
              id='last_water'
              className={'input-' + props.plantName}
            ></input>
          </p>
          <p>
            <label
              htmlFor='last_fertilizer'
              className={'labels-' + props.plantName}
            >
              Fertilized:
            </label>
            <input
              id='last_fertilizer'
              className={'input-' + props.plantName}
            ></input>
          </p>
          <p>
            <label htmlFor='notes' className={'labels-' + props.plantName}>
              Notes:
            </label>
            <input id='notes' className={'input-' + props.plantName}></input>
          </p>
        </div>
        <div className='buttons'>
          <div className='but-contain'>
            <img
              className='but-img'
              src='https://cdn-icons-png.flaticon.com/512/88/88016.png'
              id={'submit-' + props.plantName}
              onClick={() => {
                const sendData = {};
                const userInfo = Array.from(
                  document.getElementsByClassName('input-' + props.plantName)
                );
                userInfo.forEach((ele) => {
                  if (ele.value) {
                    sendData[ele.id] = ele.value;
                  }
                });
                console.log(sendData['name']);
                if (sendData.name) {
                  sendData['oldName'] = props.plantName;
                } else {
                  sendData.name = props.plantName;
                }
                updateData(sendData);
                props.updatePlant(sendData);
                if (current === 'update') {
                  setCurrent('submit');
                } else if (current === 'submit') {
                  setCurrent('update');
                }
              }}
            />
          </div>
          <div className='but-contain'>
            <img
              id='water-img'
              className='but-img'
              alt='water drop'
              src='https://static.vecteezy.com/system/resources/previews/001/196/097/original/water-drop-png.png'
            />
          </div>
          <div className='but-contain'>
            <img
              id='fert-img'
              className='but-img'
              alt='water drop'
              src='https://cdn-icons-png.flaticon.com/512/862/862877.png'
            />
          </div>
          <div className='but-contain'>
            <img
              id='repot-img'
              className='but-img'
              alt='water drop'
              src='https://cdn-icons-png.flaticon.com/512/867/867525.png'
            />
          </div>
          <div className='but-contain'>
            <img
              src='https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png'
              className='but-img'
              id={'delete-' + props.plantName}
              onClick={() => {
                props.deletePlant(props.plantName);
                deleteData({ name: props.plantName });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Plant;
