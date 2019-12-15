// sq = untuk square
// r = untuk round
// rc = untuk rectangle
// tg = untuk triangle

// id untuk halaman square
let usernamedisplaysq = document.getElementById("usernamedisplaysq");
let usernamedisplaysq2 = document.getElementById("usernamedisplaysq2");
let halamansatusquare = document.getElementById("halamansatusquare");
let halamanduasquare = document.getElementById("halamanduasquare");
let squareresult = document.getElementById("squareresult");
let sisisquare = document.getElementById("sisisquare");
// id untuk halaman round
let usernamedisplayr = document.getElementById("usernamdisplayr");
let halamansatur = document.getElementById("halamansatur");
let halamanduar = document.getElementById("halamanduar");

localStorage.setItem("open" , "1");

// general button function

function endsessionbutton() {
    localStorage.removeItem("open");
    window.location.href = "home.html";
}

function clearbutton() {
    halamansatusquare.style.display = "inline";
    halamanduasquare.style.display = "none";
    sisisquare.value = "";
}

// square
usernamedisplaysq.innerHTML = localStorage.getItem('username');
halamansatusquare.style.display = "inline"
halamanduasquare.style.display = "none"

// formula square

function squarecount() {
    usernamedisplaysq2.innerHTML = localStorage.getItem('username');
    let angkasq = sisisquare.value;
    let angkasqint = parseInt(angkasq);
    let hasil = angkasqint * angkasqint;
    squareresult.innerHTML = hasil + " m2";
    halamansatusquare.style.display = "none";
    halamanduasquare.style.display = "inline";
}

// round
usernamedisplayr.innerHTML = localStorage.getItem('username');
halamansatur.style.display = "inline";
halamanduar.style.display = "none";


// formula round

