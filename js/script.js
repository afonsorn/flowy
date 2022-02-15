function toggleMenu(){
    let menu = document.getElementById("drop-menu")
    if (menu.classList.contains("open")){
        menu.classList.remove("open")
    } else {
        menu.classList.add(("open"))
    }
}

window.addEventListener('resize', function(event){
    console.log(event.target.innerWidth)
    let menu = document.getElementById("drop-menu")
    if (event.target.innerWidth > 800 && menu.classList.contains("open")){
        menu.classList.remove("open")
    }
});