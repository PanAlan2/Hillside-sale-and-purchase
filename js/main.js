// 手機選單
let mySwitch = false;
Mlist.onclick = function () {
    let list1 = document.getElementById('Mlist1').style;
    let list2 = document.getElementById('Mlist2').style;
    let list3 = document.getElementById('Mlist3').style;
    let list = document.getElementById('headerList').style;
    if (mySwitch) {
        list2.left = "14px";
        list2.width = "25px"
        list1.top = "16px";
        list1.left = "14px";
        list1.width = "25px"
        list1.transform = "translateY(0px) rotate(0deg)";
        list3.top = "32px";
        list3.left = "14px";
        list3.width = "25px"
        list3.transform = "translateY(0px) rotate(0deg)";
        list.right = "-100%";
        list.transition = ".3s";
        mySwitch = !mySwitch;
    } else {
        list2.left = "25px";
        list2.width = "0px";
        list1.top = "19px";
        list1.left = "8px";
        list1.width = "30px";
        list1.transition = ".3s";
        list1.transform = "translateY(5px) rotate(45deg)";
        list3.top = "29px";
        list3.left = "8px";
        list3.width = "30px";
        list3.transform = "translateY(-5px) rotate(-45deg)";
        list3.transition = ".3s";
        list.right = "0";
        list.transition = ".3s";
        mySwitch = !mySwitch;
    }

}



// 賞地
// 開關

function opened(num, bg) {
    document.getElementById(num).style.display = "block";
    document.getElementById(bg).style.display = "block";
}

function closed(num, bg) {
    document.getElementById(num).style.display = "none";
    document.getElementById(bg).style.display = "none";
}

// ==================
function change1() {
    document.getElementById("img1_1").style.display = "block";
    document.getElementById("img1_2").style.display = "none";
    document.getElementById("img1_3").style.display = "none";
}
function change2() {
    document.getElementById("img1_1").style.display = "none";
    document.getElementById("img1_2").style.display = "block";
    document.getElementById("img1_3").style.display = "none";
}
function change3() {
    document.getElementById("img1_1").style.display = "none";
    document.getElementById("img1_2").style.display = "none";
    document.getElementById("img1_3").style.display = "block";
}
// ==============================
function change201() {
    document.getElementById("img2_1").style.display = "block";
    document.getElementById("img2_2").style.display = "none";
    document.getElementById("img2_3").style.display = "none";
}
function change202() {
    document.getElementById("img2_1").style.display = "none";
    document.getElementById("img2_2").style.display = "block";
    document.getElementById("img2_3").style.display = "none";
}
function change203() {
    document.getElementById("img2_1").style.display = "none";
    document.getElementById("img2_2").style.display = "none";
    document.getElementById("img2_3").style.display = "block";
}
// ==============================
function change601() {
    document.getElementById("img6_1").style.display = "block";
    document.getElementById("img6_2").style.display = "none";
    document.getElementById("img6_3").style.display = "none";
}
function change602() {
    document.getElementById("img6_1").style.display = "none";
    document.getElementById("img6_2").style.display = "block";
    document.getElementById("img6_3").style.display = "none";
}
function change603() {
    document.getElementById("img6_1").style.display = "none";
    document.getElementById("img6_2").style.display = "none";
    document.getElementById("img6_3").style.display = "block";
}

// ==========b8============
let img40 = [
    "./img/地形照片/地形1/01.webp",
    "./img/地形照片/地形1/02.webp",
    "./img/地形照片/地形1/03.webp",
    "./img/地形照片/地形1/04.webp",
    "./img/地形照片/地形1/05.webp",
    "./img/地形照片/地形1/06.webp",
    "./img/地形照片/地形1/07.webp",
    "./img/地形照片/地形1/08.webp"
];

function myChangeImg(mname, n) {
    document.getElementById(mname).src = n;
}


const list = document.getElementById('list');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const itemsToShow = 3;
const totalItems = 8;
const itemWidth = 200;
let currentIndex = 0;

function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= totalItems - itemsToShow;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    updateButtons();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - itemsToShow) {
        currentIndex++;
        list.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    updateButtons();
});

updateButtons();
// 文字
function myOut(n) {
    document.getElementById(n).style.transform = "translateX(-8px) translateY(-8px)";
}
function myIn(n) {
    document.getElementById(n).style.transform = "translateX(0px) translateY(0px)";
}

// 預約按鈕
// reserveItem1.onclick = () => {
// document.getElementById('reserveItem1').addEventListener('click', function myExpand() {
let mySwitch1 = true;
function myExpand() {
    let b = document.getElementById('reserveItem2').style;
    let c = document.getElementById('reserveItem3').style;
    let d = document.getElementById('reserveItem4').style;
    if (mySwitch1) {
        b.bottom = '260px';
        b.right = '4%';
        b.transition = '.3s';
        c.bottom = '200px';
        c.right = '6.5%';
        c.transition = '.6s';
        d.bottom = '130px';
        d.right = '3.8%';
        d.transition = '.9s';
        mySwitch1 = !mySwitch1;
    } else {
        b.bottom = '200px';
        b.right = '0px';
        b.transition = '.3s';
        c.bottom = '200px';
        c.right = '0px';
        c.transition = '.6s';
        d.bottom = '200px';
        d.right = '0px';
        d.transition = '.9s';
        mySwitch1 = !mySwitch1;
    };


}
// );
function jumpTo() {
    window.location.href = './contactus.html#myForm';
}



// ||||||||||||||||||||||||||

