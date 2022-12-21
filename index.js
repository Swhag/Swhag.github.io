// import product from './test/testData';

console.log('works');

function fetchData() {
  fetch('https://Swhag.github.io/testData.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

fetchData();
