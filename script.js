async function getCovidapi(){
    const jsondata = await fetch('https://api.covid19api.com/summary');
    const jsdata = await jsondata.json();
    console.log(jsdata)
    // console.log(jsdata.Countries[76].Country);
    TotalConfirmed_global = jsdata.Global.TotalConfirmed;
    TotalRecovered_global = jsdata.Global.TotalRecovered;
    TotalDeaths_global = jsdata.Global.TotalDeaths;
    
    document.getElementById("worldwide-confirmed").innerHTML = TotalConfirmed_global.toLocaleString('hi');
    document.getElementById("worldwide-recovered").innerHTML = TotalRecovered_global.toLocaleString('hi');
    document.getElementById("worldwide-death").innerHTML = TotalDeaths_global.toLocaleString('hi');
    
}
getCovidapi();

function dark_mode(){
    document.body.style.backgroundColor = "#202123";
    document.getElementById("text").style.color = "#f9f9f9";
}

var url = "https://api.rootnet.in/covid19-in/stats/history"

// var data = ''

fetch(url)
.then((data) => data.json())
.then((data) => {
    var length = data.data.length;
    var index = length - 1;
    var value = data.data[index];
    
    console.log(status);

    table = document.getElementById("table");
    for(var i = 0; i < value.regional.length; i++){
        //console.log(value.regional[i].loc)
        for(var j = 0; j < table.rows[i].cells.length; j++){
            //console.log(j)
            var states = table.rows[i].cells[1];
            var confirmed = table.rows[i].cells[2]
            var recovered = table.rows[i].cells[3]
            var deaths = table.rows[i].cells[4]
            states.innerHTML = value.regional[i].loc;
            confirmed.innerHTML = value.regional[i].totalConfirmed;
            recovered.innerHTML = value.regional[i].discharged;
            deaths.innerHTML = value.regional[i].deaths;
        }
    }
})