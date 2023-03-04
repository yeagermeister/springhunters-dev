// // Elements for the form
const newSpring = document.querySelector("#newSpring");
const springNameM = document.querySelector("#springnamem");
const descriptionM = document.querySelector("#descriptionm");
const campingM = document.getElementById("campingm");
const stateParkM = document.querySelector("#stateparkm");
const petFriendlyM = document.getElementById("petfriendlym");
const zipcodeM = document.querySelector("#zipcodem")

// const springEl = document.querySelector("#spring");
// const descEl = document.querySelector("#desc");
// const campEl = document.querySelector("#camp");
// const petEl = document.querySelector("#pet");
// const addressEl = document.querySelector("#address");
// //dom selectors

// //function that initializes on page startup
// function init() {
//     let newSpringText = JSON.parse(sessionStorage.getItem("newspring"));
//     springEl.textContent = newSpringText[0];
//     descEl.textContent = newSpringText[1];
//     campEl.textContent = newSpringText[2];
//     petEl.textContent = newSpringText[3];
//     addressEl.textContent = newSpringText[4];
// };

// listener for the submit button when addin a spring
newSpring.addEventListener("click", async function(event) {
  event.preventDefault;

  let camp = "";
  let pet = "";
  let sp = "";
  let spring = springNameM.value.trim();
  let desc = descriptionM.value.trim();
  if (campingM.checked) {
    camp = true;
  } else {camp = false};
  if (petFriendlyM.checked) {
    pet = true
  } else {pet = false};
  if (stateParkM.checked) {
    sp = true
  } else {sp = false};
  let zip = zipcodeM.value.trim();

  if (spring && desc && zip) {
    const response = await fetch('/api/newspring/', {
      method: 'POST',
      body: JSON.stringify({spring, desc, zip, pet, sp, camp}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/newspring');
    } else {
      alert(response.statusText);
    }
}
});

init();