async function getCovidapi() {
  const jsondata = await fetch("https://api.covid19api.com/summary");
  const jsdata = await jsondata.json();
  console.log(jsdata);
  // console.log(jsdata.Countries[76].Country);
  TotalConfirmed_global = jsdata.Global.TotalConfirmed;
  TotalRecovered_global = jsdata.Global.TotalRecovered;
  TotalDeaths_global = jsdata.Global.TotalDeaths;
  NewConfirmed_global = jsdata.Global.NewConfirmed;

  document.getElementById("worldwide-confirmed").innerHTML =
    TotalConfirmed_global.toLocaleString("hi");
  document.getElementById("worldwide-new_confirmed").innerHTML =
    NewConfirmed_global.toLocaleString("hi");
  document.getElementById("worldwide-recovered").innerHTML =
    TotalRecovered_global.toLocaleString("hi");
  document.getElementById("worldwide-death").innerHTML =
    TotalDeaths_global.toLocaleString("hi");

  TotalConfirmed_india = jsdata.Countries[76].TotalConfirmed;
  NewConfirmed_india = jsdata.Countries[76].NewConfirmed;
  Recovered_india = jsdata.Countries[76].TotalRecovered;
  TotalDeaths_india = jsdata.Countries[76].TotalDeaths;

  document.getElementById("india-confirmed").innerHTML =
    TotalConfirmed_india.toLocaleString("hi");
  document.getElementById("india-new_confirmed").innerHTML = 
    NewConfirmed_india.toLocaleString("hi");
  document.getElementById("india-recovered").innerHTML =
    Recovered_india.toLocaleString("hi");
  document.getElementById("india-death").innerHTML =
    TotalDeaths_india.toLocaleString("hi");
}
getCovidapi();

function dark_mode() {
  document.body.style.backgroundColor = "#202123";
  document.getElementById("text").style.color = "#f9f9f9";
  document.getElementsByClassName("confirmed")[0].style.backgroundColor = "black";
  document.getElementsByClassName("confirmed")[0].style.color = "red";
  document.getElementsByClassName("confirmed")[1].style.backgroundColor = "black";
  document.getElementsByClassName("confirmed")[1].style.color = "red";
  document.getElementsByClassName("new_confirmed")[0].style.backgroundColor = "black";
  document.getElementsByClassName("new_confirmed")[0].style.color = "#1796fd";
  document.getElementsByClassName("new_confirmed")[1].style.backgroundColor = "black";
  document.getElementsByClassName("new_confirmed")[1].style.color = "#1796fd";
  document.getElementsByClassName("recovered")[0].style.backgroundColor = "black";
  document.getElementsByClassName("recovered")[0].style.color = "green";
  document.getElementsByClassName("recovered")[1].style.backgroundColor = "black";
  document.getElementsByClassName("recovered")[1].style.color = "green";
  document.getElementsByClassName("death")[0].style.backgroundColor = "black";
  document.getElementsByClassName("death")[0].style.color = "white";
  document.getElementsByClassName("death")[1].style.backgroundColor = "black";
  document.getElementsByClassName("death")[1].style.color = "white";

}

var url = "https://api.rootnet.in/covid19-in/stats/history";

// var data = ''

fetch(url)
  .then((data) => data.json())
  .then((data) => {
    var length = data.data.length;
    var index = length - 1;
    var value = data.data[index];

    console.log(status);

    table = document.getElementById("table");
    for (var i = 0; i < value.regional.length; i++) {
      //console.log(value.regional[i].loc)
      for (var j = 0; j < table.rows[i].cells.length; j++) {
        //console.log(j)
        var states = table.rows[i].cells[1];
        var confirmed = table.rows[i].cells[2];
        var recovered = table.rows[i].cells[3];
        var deaths = table.rows[i].cells[4];
        states.innerHTML = value.regional[i].loc;
        confirmed.innerHTML =
          value.regional[i].totalConfirmed.toLocaleString("hi");
        recovered.innerHTML = value.regional[i].discharged.toLocaleString("hi");
        deaths.innerHTML = value.regional[i].deaths.toLocaleString("hi");
      }
    }
  });
