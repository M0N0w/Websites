var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-Link");

    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-Link");
    document.getElementById(tabname).classList.add("active-tab");
}