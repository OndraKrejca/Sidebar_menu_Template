const sideBar = document.querySelector(".sidebar__container")
const hamburgerMenu = document.querySelector(".nav__hamburger")
const cancleBtn = document.querySelector(".s-header__cancle")

hamburgerMenu.addEventListener("click", () => {

    let active = sideBar.classList.contains("sidebar__active")

    if ( active == false) {
        sideBar.classList.add("sidebar__active")

    } else {

        sideBar.classList.remove("sidebar__active")
    }
})

cancleBtn.addEventListener("click", () => {
    sideBar.classList.remove("sidebar__active")

})