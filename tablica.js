const search = document.getElementById("search");
const ispis = document.getElementById("ispis");

function searchChar(query) {
  fetch("https://swapi.dev/api/people/")
    .then(function (response) {
      return response.json();
    })
    .then(function (likovi) {
      const filteredLikovi = likovi.results.filter(function (data) {
        return (
          data.name.toLowerCase().includes(query.toLowerCase()) ||
          data.height.toLowerCase().includes(query.toLowerCase()) ||
          data.mass.toLowerCase().includes(query.toLowerCase()) ||
          data.url.toLowerCase().includes(query.toLowerCase())
        );
      });

      ispis.innerHTML = "";

      filteredLikovi.forEach(function (data) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const tdHeight = document.createElement("td");
        const tdMass = document.createElement("td");
        const a = document.createElement("a");
        a.textContent = data.name;
        a.href = data.url;
        //th.textContent = data.name;
        tdHeight.textContent = "Visina: " + data.height + " cm";
        tdMass.textContent = "Masa: " + data.mass + " kg";
        th.appendChild(a);
        tr.appendChild(th);
        tr.appendChild(tdHeight);
        tr.appendChild(tdMass);
        ispis.appendChild(tr);
        //ispis.appendChild(th);
        //ispis.appendChild(tdHeight);
        //ispis.appendChild(tdMass);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

search.addEventListener("input", function (event) {
  const query = event.target.value;

  searchChar(query);
});
