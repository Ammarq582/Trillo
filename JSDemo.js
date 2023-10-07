const userNav = document.querySelector(".user-nav__user");
const iconBox = document.querySelector(".user-nav__icon-box--messages");
const checkUser = document.querySelector(".user-nav__check--user");
const checkMessages = document.querySelector(".user-nav__check--messages");

userNav.addEventListener("mouseenter", function () {
    console.log("executed");
    checkUser.classList.add("user-nav__check-hover");

    this.addEventListener("mouseleave", function () {
        checkUser.classList.remove("user-nav__check-hover");
    })
});



iconBox.addEventListener("mouseenter", function () {
    console.log("executed");
    checkMessages.classList.add("user-nav__check-hover");

    this.addEventListener("mouseleave", function () {
        checkMessages.classList.remove("user-nav__check-hover");
    })
});


checkUser.addEventListener("mouseenter", checkUserHover);
checkMessages.addEventListener("mouseenter", checkMessageHover);



function checkUserHover() {
    userNav.classList.add("user-nav__user--bgChange");
    
    this.addEventListener("mouseleave", function () {
        userNav.classList.remove("user-nav__user--bgChange");
    })
}

function checkMessageHover() {
    iconBox.classList.add("user-nav__user--bgChange");
    
    this.addEventListener("mouseleave", function () {
        iconBox.classList.remove("user-nav__user--bgChange");
    })
}





