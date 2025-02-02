function dropdownMenu() {
    var buttons = document.getElementById("dropdownClick");
    if (buttons.className === "topnav" || buttons.className === "right-topnav") {
        buttons.className += " responsive";
        /*changes topnav to topnav.responsive*/
    } else {
        if (buttons.className === "right-topnav responsive") {
            buttons.className = "right-topnav";
        } else {
            buttons.className = "topnav";
        }
    }
}