function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
        /*changes topnav to topnav.responsive*/
    } else {
        x.className = "topnav";
    }
}