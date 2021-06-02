async function getCovidapi(){
    const jsondata = await fetch('https://api.covid19api.com/summary');
    

    const jsdata = await jsondata.json();
    // console.log(jsdata.Countries[76].Country);
    NewConfirmed_global = jsdata.Global.NewConfirmed;
    console.log(NewConfirmed_global)
}

getCovidapi();
