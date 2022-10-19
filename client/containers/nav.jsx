const React = require('react');

async function addPlantToServer(obj) {
  try {
    const response = await fetch('http://localhost:3000/api/plant', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'Application/JSON' },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('error - addingtoserver', error);
  }
}

const NavBar = (props) => {
  return (
    <span id='nav'>
      <label htmlFor='plant-name'>Plant Name:</label>
      <input id='new-plant-name'></input>
      <a
        onClick={() => {
          let nameVal = document.getElementById('new-plant-name');
          if (nameVal.value.length > 0) {
            props.addPlant({
              name: nameVal.value,
            });
            addPlantToServer({ name: nameVal.value });
          } else {
            nameVal.style.borderColor = 'red';
          }
        }}
      >
        Add Plant
      </a>
    </span>
  );
};

export default NavBar;
