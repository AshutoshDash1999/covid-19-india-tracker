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
