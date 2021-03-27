var news = document.getElementsByClassName("news")[0];
var title = document.getElementsByClassName("title")[0];

window.addEventListener("load", function(){ 
    var width = window.innerWidth;
    var bars = document.getElementsByClassName("fa-bars")[0];
    var status = false;
    bars.addEventListener("click", ()=>{
        var menu_mobile = document.getElementById("menu-mobile");
        if(status == false) {
            menu_mobile.setAttribute("class", "active");
            window.addEventListener("resize", ()=>resize());
            verificaLargura()
            status = true;
            window.addEventListener("resize", ()=>resize());
        }
        else {
            menu_mobile.removeAttribute("class", "active");
            news.classList.remove("margin");
            title.classList.remove("margin");
            status = false;
        }
    })

    function resize (){
        width = window.innerWidth;
        verificaLargura();
    }

    function verificaLargura (){
        if(width <= 600){
            news.classList.add("margin")
            title.classList.add("margin");
        }
        else{
            news.classList.remove("margin");
            title.classList.remove("margin");
        }
    }
})
