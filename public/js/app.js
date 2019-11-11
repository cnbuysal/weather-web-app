const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const pOne = document.querySelector("#pOne");
const pTwo = document.querySelector("#pTwo");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;

  pOne.textContent = "Loading...";
  pTwo.textContent = "";

  fetch("/weather?adress=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        pOne.textContent = data.error;
      } else {
        pOne.textContent = data.location;
        pTwo.textContent = data.forecast;
      }
    });
  });
});
