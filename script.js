var btn_map = document.querySelector(".btn_map");
var btn_close_map = document.querySelector(".btn_close_map");
var btn_close = document.querySelector(".btn_close");
var link = document.querySelector(".btn_user");
var modal_map = document.querySelector(".map");
var modal = document.querySelector(".modal");
var inputLogin = modal.querySelector("[name=login]");
var inputPassword = modal.querySelector("[name=password]");
var form = modal.querySelector(".login_form");
var storage = localStorage.getItem("login");
var errorMassege = modal.querySelector(".error_massage")

btn_map.addEventListener("click",function () {
    modal_map.classList.add("modal_show");
});

btn_close_map.addEventListener("click",function () {
    modal_map.classList.remove("modal_show");
});

btn_close.addEventListener("click",function () {
    modal.classList.remove("modal_show");
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal_show");
    inputLogin.focus();
    if (storage) {
        inputLogin.value = storage;
    }
});

form.addEventListener('submit', function (evt) {
    if (!inputLogin.value || !inputPassword.value) {
        evt.preventDefault();
        errorMassege.classList.add("modal_show");
    } else {
        localStorage.setItem("login", inputLogin.value);
    }

    if (!inputLogin.value) {
        inputLogin.classList.add("input_error");
    }

    if (!inputPassword.value) {
        inputPassword.classList.add("input_error");
    }
});

