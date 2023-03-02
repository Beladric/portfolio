const selectYear = document.getElementById("selectYear");
selectYear.addEventListener("change", (event)=>{
    console.log(event.target.value.toString())
    switch (event.target.value){
        case "firstYear":
            break;
        case "secondYear":
            document.getElementById("downloadDissertationB").href = "https://www.woopets.fr/assets/img/001/244/1200x675/choisir-chien-japonais.jpg";
            break;
        case "lastYear":
            break;
    }
})