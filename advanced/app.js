// Time conversion

const minutesInput = document.getElementById("minutes_input");
const conversionBtn = document.getElementById("conversion_btn");
const conversionResult = document.getElementById("conversion_result");

let minutes = 0;

const handleMinutesInput = (e) => {
  if (e.target.tagName === "INPUT") {
    minutes = e.target.value;
  }

}

minutesInput.addEventListener('input', handleMinutesInput);

conversionBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const hours = Math.floor(minutes / 60);
    const minutes_rest = minutes % 60;

    const result = `${minutes} minutes = ${hours} hour(s) and ${minutes_rest} minutes(s).`;

    conversionResult.innerHTML = result;
})
