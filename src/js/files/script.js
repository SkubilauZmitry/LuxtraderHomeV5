// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const headerChoiceImage = document.querySelector(".menu-user__img");
const menuUser = document.querySelector(".menu-user");
const menuUserList = document.querySelector(".menu-user__block-list");
headerChoiceImage.addEventListener("click", function (event) {
    menuUserList.classList.toggle("active");
});
document.addEventListener("click", function (event) {
    if (!event.target.closest('.menu-user')) {
        menuUserList.classList.remove("active");
    }
});
document.addEventListener("keyup", function (event) {
    if (event.code === "Escape") {
        menuUserList.classList.remove("active");
    };
});

const lotsAll = document.querySelector(".lots__all");
const lotsAllButton = document.querySelector(".lots__all-button-img");
const lotsBoxButton = document.querySelector(".swiper-image-img");
lotsAllButton.addEventListener("click", function (event) {
    lotsAll.classList.toggle("active-all");
    console.log('dima');
});
lotsBoxButton.addEventListener("click", function (event) {
    lotsAll.classList.toggle("active-all");
    console.log('dima');
});
// document.addEventListener("click", function (event) {
//     if (!event.target.closest('.menu-user')) {
//         menuUserList.classList.remove("active");
//     }
// });
// document.addEventListener("keyup", function (event) {
//     if (event.code === "Escape") {
//         menuUserList.classList.remove("active");
//     };
// });


