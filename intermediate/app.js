// CAPITALIZE

const capForm = document.getElementById("capitalize-form");
const capBtn = document.querySelector(".capitalize_btn");
const capSentence = document.getElementById("capitalize_result");

let userSentence = "";

capBtn.addEventListener("click", function (e) {
  e.preventDefault();

  capSentence.innerHTML = userSentence;
});

const handleInputChange = (e) => {
  if (e.target.tagName === "INPUT") {
    const string = e.target.value;
    console.log(string.length);
    userSentence = string.charAt(0).toUpperCase() + string.slice(1);
  }
};

capForm.addEventListener("input", handleInputChange);

// AVERAGE GRADE

const averForm = document.getElementById("average-form");
const averBtn = document.querySelector(".average_btn");
const resultSum = document.getElementById("average_sum");
const resultAverage = document.getElementById("average_average");

let userGradeInput = {
  average_math: 0,
  average_physics: 0,
  average_english: 0,
};

const handleGradeInputs = (e) => {
  if (e.target.tagName === "INPUT") {
    userGradeInput[e.target.id] = e.target.value;
  }
};

averForm.addEventListener("input", handleGradeInputs);

averBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const sum =
    +userGradeInput.average_english +
    +userGradeInput.average_math +
    +userGradeInput.average_physics;

  const averageResult = sum / 3;

  resultSum.innerHTML = +sum;
  resultAverage.innerHTML = +averageResult;
});
