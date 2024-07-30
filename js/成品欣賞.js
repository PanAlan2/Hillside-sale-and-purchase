// 成品欣賞
// 照片


let img1 = [
    "./img/房子/木屋1/01.jpg",
    "./img/房子/木屋1/02.jpg",
    "./img/房子/木屋1/03.jpg",
    "./img/房子/木屋1/04.jpg"
];
let img2 = [
    "./img/房子/木屋2/01.jpg",
    "./img/房子/木屋2/02.jpg",
    "./img/房子/木屋2/03.jpg",
    "./img/房子/木屋2/04.jpg"
];
let img3 = [
    "./img/房子/木屋3/01.jpg",
    "./img/房子/木屋3/02.jpg",
    "./img/房子/木屋3/03.jpg",
    "./img/房子/木屋3/04.jpg"
];
let img4 = [
    "./img/房子/木屋4/01.jpeg",
    "./img/房子/木屋4/02.jpeg",
    "./img/房子/木屋4/03.jpeg"
];
let img5 = [
    "./img/房子/移動方舟1/01.jpg",
    "./img/房子/移動方舟1/02.jpg",
    "./img/房子/移動方舟1/03.jpg",
    "./img/房子/移動方舟1/04.jpg",
    "./img/房子/移動方舟1/05.jpg"
];
let img6 = [
    "./img/房子/移動方舟2/01.jpg",
    "./img/房子/移動方舟2/02.jpg",
    "./img/房子/移動方舟2/03.jpg",
    "./img/房子/移動方舟2/04.jpg",
    "./img/房子/移動方舟2/05.jpg",
    "./img/房子/移動方舟2/06.jpg"
];
let img7 = [
    "./img/房子/移動木屋1/01.jpg",
    "./img/房子/移動木屋2/02.jpg",
    "./img/房子/移動木屋1/03.jpg",
    "./img/房子/移動木屋1/04.jpg",
    "./img/房子/移動木屋2/05.jpg"
];
let img8 = [
    "./img/房子/移動木屋2/01.jpg",
    "./img/房子/移動木屋2/02.jpg",
    "./img/房子/移動木屋2/03.jpg",
    "./img/房子/移動木屋2/04.jpg"
];
let img9 = [
    "./img/房子/美式木屋1/01.jpg",
    "./img/房子/美式木屋1/02.jpg",
    "./img/房子/美式木屋1/03.jpg",
    "./img/房子/美式木屋1/04.jpg",
    "./img/房子/美式木屋1/05.jpg"
];
let img10 = [
    "./img/房子/美式木屋2/01.jpg",
    "./img/房子/美式木屋2/02.jpg",
    "./img/房子/美式木屋2/03.jpg",
    "./img/房子/美式木屋2/04.jpg"
];
let img11 = [
    "./img/房子/美式木屋3/01.jpg",
    "./img/房子/美式木屋3/02.jpg",
    "./img/房子/美式木屋3/03.jpg",
    "./img/房子/美式木屋3/04.jpg",
    "./img/房子/美式木屋3/05.jpg"
];
let img12 = [
    "./img/房子/貨櫃屋2/01.jpg",
    "./img/房子/貨櫃屋2/02.jpg",
    "./img/房子/貨櫃屋2/03.jpg",
    "./img/房子/貨櫃屋2/04.jpg",
    "./img/房子/貨櫃屋2/05.jpg"
];
let img13 = [
    "./img/房子/貨櫃屋3/01.jpg",
    "./img/房子/貨櫃屋3/02.jpg",
    "./img/房子/貨櫃屋3/03.jpg"
];
let img14 = [
    "./img/房子/貨櫃屋4/01.jpg",
    "./img/房子/貨櫃屋4/02.jpg",
    "./img/房子/貨櫃屋4/03.jpg",
    "./img/房子/貨櫃屋4/04.jpg"
];



// 開關
function myOpen(mname) {
    document.getElementById(mname).style.display = "block";
}

function myOff(mname) {
    document.getElementById(mname).style.display = "none";
}

// 切換
let index = 0;
let mname = '';
let n = 0;
function change(mname, arr, n) {
    index += n;
    // 判斷是否超過範圍
    if (index >= arr.length) {
        index = 0;
    } else if (index <= -1) {
        index = arr.length - 1;
    }
    console.log(index);
    console.log(arr.length);

    document.getElementById(mname).src = arr[index];

}


// ||||||||||||||||