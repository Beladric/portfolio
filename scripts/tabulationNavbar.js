function openTab(tabName, buttonName){
    let x = document.getElementsByClassName("tab");
    let y = document.getElementsByClassName("tabButton");
    for(let i = 0; i<x.length; i++){
        x[i].style.display = "none";
        y[i].style.backgroundColor = "transparent";
    }
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(buttonName).style.backgroundColor = "#EEEEEE";
}