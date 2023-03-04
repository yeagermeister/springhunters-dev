// Global vars

// This server var needs switched before deploying to heroku
let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";

// ***************************************
// ********  DOM elements  ***************
// ***************************************
const dropdownEl = document.querySelector("#dropdown");


// ***************************************
// ***********  Functions  ***************
// ***************************************
function getsprings() {
    let conn = `${server}/api/springs/`;
    fetch(conn)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const anchor = document.createElement('a');
                anchor.href = `${server}/springs/${data[i].id}`
                anchor.innerText = `${data[i].name}`;
                anchor.classList = "dropdown-item"
                dropdownEl.appendChild(anchor);
            }
        });
};
  