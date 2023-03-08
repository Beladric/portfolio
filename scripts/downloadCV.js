const selectCVLanguage = document.getElementById("selectCVLanguage");

selectCVLanguage.addEventListener("change",(event)=>{
    document.getElementById("DownloadButton").href = "https://github.com/Beladric/portfolio/blob/main/resources/CV%20GO%C3%8BTZ%20Kilian%20".concat(event.target.value).concat(".png?raw=true");
    console.log(document.getElementById("DownloadButton").href)
})