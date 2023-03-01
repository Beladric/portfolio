function openTab(tabName){
    let x = document.getElementsByClassName("tab");
    for(let i = 0; i<x.length; i++){
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";
}