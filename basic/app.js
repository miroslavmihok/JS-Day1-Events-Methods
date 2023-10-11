// WEATHER EX

const weatherBtn = document.querySelector(".weather-btn");
const weatherInt = document.getElementById("weatherInt");
const weatherStr = document.getElementById("weatherStr");

weatherBtn.addEventListener("click", function () {
  calculateWeather();
});

function calculateWeather() {
  const randomTemparature = Math.floor(Math.random() * 30 - 5);
  let answer = "cold";
  if (randomTemparature > 10) {
    answer = "moderate";
  } else {
    answer = "cold";
  }
  weatherInt.innerHTML = randomTemparature;
  weatherStr.innerHTML = answer;
}

// RANDOM FOOD

const randomFood = document.getElementById("randomFood");
const foodBtn = document.querySelector(".food-btn");

const foodArr = ["pizza", "hamburger", "ice cream", "chocolate"];

foodBtn.addEventListener("click", function () {
  chooseRandomFood();
});

function chooseRandomFood() {
  const randomFoodNr = Math.floor(Math.random() * foodArr.length);
  randomFood.innerHTML = foodArr[randomFoodNr];
}

// CRYSTAL GAZER

// const partnersName = document.getElementById('partners_name');
// const locationName = document.getElementById('location');
// const jobTitle = document.getElementById('job_title');
// const childrenNumber = document.getElementById('children_number');
const myForm = document.getElementById("myForm");
const formBtn = document.querySelector(".form-btn");

let allInputs = {
  partners_name: "",
  location: "",
  job_title: "",
  children_number: 0,
};

formBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const result = `You will be a ${allInputs.job_title} in ${allInputs.location} and married to ${allInputs.partners_name} with ${allInputs.children_number} children.`;

  alert(result);
});

function handleInputChange(e) {
  if (e.target.tagName === "INPUT") {
    allInputs[e.target.name] = e.target.value;
  }
  console.log(allInputs);
}

myForm.addEventListener("input", handleInputChange);

// AGE CALCULATOR

const myBirthYearForm = document.getElementById("myBirthYearForm");
const myBirthYearFormBtn = document.querySelector(".myBirthYearForm-btn");

let age = 0;

myBirthYearFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const resultYear = `You are either ${age} or ${age + 1}`;

  alert(resultYear);
});

const handleYearInputChange = (e) => {
  if (e.target.tagName === "INPUT") {
    const birthYear = e.target.value;
    const todaysDate = new Date();
    const todaysYear = todaysDate.getFullYear();
    age = todaysYear - birthYear;
    console.log(todaysYear);
  }
};
myBirthYearForm.addEventListener("input", handleYearInputChange);

// Degree-Radian Conversion

const radTextOutput = document.getElementById("radian_output");
const radConv = document.getElementById("radian_conversion");
const radBtn = document.querySelector(".getRadian");

let output = 0;

const handleCelsiusInput = (e) => {
  if (e.target.tagName === "INPUT") {
    const degrees = e.target.value;
    console.log(degrees);

    output = (degrees * (Math.PI / 180)).toFixed(5);
  }
};

radConv.addEventListener("input", handleCelsiusInput);

radBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const result = `Your input in radians is: ${output}`;

  radTextOutput.innerHTML = result;
});

// Area volume

const myVolumeForm = document.getElementById("volume");
const volumeBtn = document.querySelector(".getVolume");

let box = {
  box_height: 0,
  box_width: 0,
  box_depth: 0,
};

volumeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const area = box.box_height * box.box_width;
  const volume = box.box_height * box.box_width * box.box_depth;

  alert(
    `The area for your box input is ${area}\nThe volume for your box input is ${volume}`
  );
});

myVolumeForm.addEventListener("input", function (e) {
  if (e.target.tagName === "INPUT") {
    const id = e.target.id;
    const value = e.target.value;

    box[id] = value;
  }
});
