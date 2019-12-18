// sq = untuk square
// r = untuk round
// rc = untuk rectangle
// tg = untuk triangle

// id untuk halaman square
let usernamedisplayshape = document.getElementById("usernamedisplay");
let usernamedisplayshape2 = document.getElementById("usernamedisplay2");
let halamansatushape = document.getElementById("halamansatushape");
let halamanduashape = document.getElementById("halamanduashape");
let result = document.getElementById("result");
let sisisquare = document.getElementById("sisisquare");
let jarijari = document.getElementById("jarijari");
let alas = document.getElementById("alas");
let tinggi = document.getElementById("tinggi");
let lebar = document.getElementById("lebar");

localStorage.setItem("open" , "1");
usernamedisplayshape.innerHTML = localStorage.getItem('username');
halamansatushape.style.display = "inline"
halamanduashape.style.display = "none"

// general button function

function endsessionbutton() {
    localStorage.removeItem("open");
    window.location.href = "home.html";
}

function clearbutton() {
    halamansatushape.style.display = "inline";
    halamanduashape.style.display = "none";
    sisisquare.value = "";
}

// formula square

function squarecount() {
    usernamedisplayshape2.innerHTML = localStorage.getItem('username');
    let angkasq = sisisquare.value;
    let angkasqint = parseInt(angkasq);
    let hasil = angkasqint * angkasqint;
    result.innerHTML = hasil + " m2";
    halamansatushape.style.display = "none";
    halamanduashape.style.display = "inline";
}

// formula round
function roundcount() {
    usernamedisplayshape2.innerHTML = localStorage.getItem('username');
    let angkasq = jarijari.value;
    let angkasqint = parseInt(angkasq);
    let hasil = angkasqint * angkasqint * Math.PI;
    result.innerHTML = hasil + " m2";
    halamansatushape.style.display = "none";
    halamanduashape.style.display = "inline";
}

// formula triangle
function tricount() {
    usernamedisplayshape2.innerHTML = localStorage.getItem('username');
    let angkasq = alas.value;
    let angkasq2 = tinggi.value;
    let angkasqint = parseInt(angkasq);
    let angkasqint2 = parseInt(angkasq2);
    let hasil = angkasqint * angkasqint2 / 2;
    result.innerHTML = hasil + " m2";
    halamansatushape.style.display = "none";
    halamanduashape.style.display = "inline";
}

// formula triangle
function reccount() {
    usernamedisplayshape2.innerHTML = localStorage.getItem('username');
    let angkasq = lebar.value;
    let angkasq2 = tinggi.value;
    let angkasqint = parseInt(angkasq);
    let angkasqint2 = parseInt(angkasq2);
    let hasil = angkasqint * angkasqint2;
    result.innerHTML = hasil + " m2";
    halamansatushape.style.display = "none";
    halamanduashape.style.display = "inline";
}