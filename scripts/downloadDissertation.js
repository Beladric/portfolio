const selectYear = document.getElementById("selectYear");
selectYear.addEventListener("change", (event)=>{
    console.log(event.target.value.toString())
    switch (event.target.value){
        case "firstYear":
            document.getElementById("downloadDissertationB").href = "https://kilian-goetz.engineer/resources/Rapport%20GO%C3%8BTZ%20Kilian.pdf";
            break;
        case "secondYear":
            document.getElementById("downloadDissertationB").href = "";
            break;
        case "lastYear":
            document.getElementById("downloadDissertationB").href = "";
            break;
    }
})