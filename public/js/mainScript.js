let server = "http://localhost:3001";
// let server = "https://springhunters1.herokuapp.com";

function getSprings() {
  
  let conn = `${server}/api/springs/`;
  const dropdownEl = document.querySelector("#dropdown");
  fetch(conn)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            console.log(data.length)
              const anchor = document.createElement('a');
              anchor.href = `${server}/springs/${data[i].id}`
              anchor.innerText = `${data[i].name}`;
              anchor.classList = "dropdown-item"
              dropdownEl.appendChild(anchor);
          }
      });
};

getSprings();

