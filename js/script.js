window.addEventListener("load", function(){
    var bars = document.getElementsByClassName("fa-bars")[0];
    var status = false;
    bars.addEventListener("click", ()=>{
        var menu_mobile = document.getElementById("menu-mobile");

        if(status == false) {
            menu_mobile.setAttribute("class", "active");
            status = true;
        }
        else {
            menu_mobile.removeAttribute("class", "active");
            status = false;
        }
    })
})