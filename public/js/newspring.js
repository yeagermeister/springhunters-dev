// // Elements for the form
const newSpring = document.querySelector("#newSpring");
const springNameM = document.querySelector("#springnamem");
const descriptionM = document.querySelector("#descriptionm");
const campingM = document.getElementById("campingm");
const stateParkM = document.querySelector("#stateparkm");
const petFriendlyM = document.getElementById("petfriendlym");
const zipcodeM = document.querySelector("#zipcodem")

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

  let camping = "";
  let pets = "";
  let statepark = "";
  let name = springNameM.value.trim();
  let description = descriptionM.value.trim();
  let zipcode = zipcodeM.value.trim();
  if (campingM.checked) {
    camping = true;
  } else {camping = false};
  if (petFriendlyM.checked) {
    pets = true
  } else {pets = false};
  if (stateParkM.checked) {
    statepark = true
  } else {statepark = false};


//   temp = JSON.stringify({name, description, zipcode, pets, statepark, camping});
//     console.log(temp);
//     window.localStorage.setItem('temp', temp);


  if (spring && desc && zip) {
    const response = await fetch('/api/newspring/', {
      method: 'POST',
      body: JSON.stringify({name, description, zipcode, pets, statepark, camping}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/newspring');
    } else {
      alert(response.statusText);
    }
}
});

// init();