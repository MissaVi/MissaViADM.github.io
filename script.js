// JavaScript source code
let textPanel1 = document.getElementById("BD1");
let textPanel2 = document.getElementById("BD2");
let textPanel3 = document.getElementById("BD3");

let textPanel4 = document.getElementById("BD4");
let textPanel5 = document.getElementById("BD5");
let textPanel6 = document.getElementById("BD6");

let textPanel7 = document.getElementById("BD7");
let textPanel8 = document.getElementById("BD8");
let textPanel9 = document.getElementById("BD9");

let clickVKlink1 = document.getElementById("infVK1");
let clickTelephonelink1 = document.getElementById("infTel1");
let clickLinkedInlink1 = document.getElementById("infLinkedIn1");

let clickVKlink2 = document.getElementById("infVK2");
let clickTelephonelink2 = document.getElementById("infTel2");
let clickLinkedInlink2 = document.getElementById("infLinkedIn2");

let clickVKlink3 = document.getElementById("infVK3");
let clickTelephonelink3 = document.getElementById("infTel3");
let clickLinkedInlink3 = document.getElementById("infLinkedIn3");

let visibleBlock1 = document.querySelector(".badge-foot-information1");
let visibleBlock2 = document.querySelector(".badge-foot-information2");
let visibleBlock3 = document.querySelector(".badge-foot-information3");

clickVKlink1.addEventListener("click", function () {
    if (textPanel1.textContent === "") {
        textPanel1.textContent = "VK: Ирина Юрьевна";
    } else {
        textPanel1.textContent = "";
    }
});

clickTelephonelink1.addEventListener("click", function () {
    if (textPanel2.textContent === "") {
        textPanel2.textContent = "Телефон: 8 (800) 555 35-35";
    }
    else {
        textPanel2.textContent = "";
    }
});
clickLinkedInlink1.addEventListener("click", function () {
    if (textPanel3.textContent === "") {
        textPanel3.textContent = "LinkedIn: Лукшина Ирина";
    }
    else {
        textPanel3.textContent = "";
    }
});

clickVKlink2.addEventListener("click", function () {
    if (textPanel4.textContent === "") {
        textPanel4.textContent = "VK: ЛАГЕРЬ ХОПЁР";
    } else {
        textPanel4.textContent = "";
    }
});
clickTelephonelink2.addEventListener("click", function () {
    if (textPanel5.textContent === "") {
        textPanel5.textContent = "Телефон: 8 (800) 555 35-35";
    }
    else {
        textPanel5.textContent = "";
    }
});
clickLinkedInlink2.addEventListener("click", function () {
    if (textPanel6.textContent === "") {
        textPanel6.textContent = "LinkedIn: -";
    }
    else {
        textPanel6.textContent = "";
    }
});
clickVKlink3.addEventListener("click", function () {
    if (textPanel7.textContent === "") {
        textPanel7.textContent = "VK: Молодежный центр Максимум";
    } else {
        textPanel7.textContent = "";
    }
});
clickTelephonelink3.addEventListener("click", function () {
    if (textPanel8.textContent === "") {
        textPanel8.textContent = "Телефон: +7 (844) 424-47-09";
    }
    else {
        textPanel8.textContent = "";
    }
});
clickLinkedInlink3.addEventListener("click", function () {
    if (textPanel9.textContent === "") {
        textPanel9.textContent = "LinkedIn: Центр Максимум Урюпинск";
    }
    else {
        textPanel9.textContent = "";
    }
});
