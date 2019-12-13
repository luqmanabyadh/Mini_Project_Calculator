// id untuk square button
let usernamedisplay2 = document.getElementById("usernamedisplay2");
let halamansatusquare = document.getElementById("halamansatusquare");
let halamanduasquare = document.getElementById("halamanduasquare");
let squareresult = document.getElementById("squareresult");
let sisisquare = document.getElementById("sisisquare");



usernamedisplay2.innerHTML = localStorage.getItem('username');

localStorage.setItem("open" , "1")

function endsessionbutton() {
    localStorage.removeItem("open")
    window.location.href = "home.html"
}

// formula square


function squarecount() {
    let angka = sisisquare.value
    let angkaint = parseInt(angka)
    let hasil = angkaint * angkaint
    squareresult.innerHTML = hasil
}

