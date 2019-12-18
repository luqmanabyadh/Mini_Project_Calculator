// id variabel untuk memasukkan username
let username = document.getElementById("username");
// id variable untuk memindahkan halaman pertama ke halaman ke dua
let halamanpertama = document.getElementById("halamanpertama");
let halamandua = document.getElementById("halamandua");
// id untuk memunculkan username nya lagi
let usernamedisplay = document.getElementById("usernamedisplay");
// variabel untuk menyimpan landing page
let open = localStorage.getItem("open");

if (open!=undefined) {
    halamandua.style.display = 'inline';
    //menghilangkan tampilan halaman pertama
    halamanpertama.style.display = 'none';
    //memunculkan display username
    usernamedisplay.innerHTML = localStorage.getItem('username');
    localStorage.removeItem("open")
}


//function untuk save username saat di click tombol go
function saveusername() {
    if (username.value == '') {
        window.alert('Harap Isi Kolom Username')
    } else {
        //menyimpan username ke storage browser
        localStorage.setItem('username', username.value);
        //memunculkan tampilan halaman kedua
        halamandua.style.display = 'inline';
        //menghilangkan tampilan halaman pertama
        halamanpertama.style.display = 'none';
        //memunculkan display username
        usernamedisplay.innerHTML = localStorage.getItem('username');
    }
}

// function untuk tombol shape

function squarebutton() {
    window.location.href = "kotak.html";
}

function roundbutton() {
    window.location.href = "lingkaran.html"
}

function trianglebutton() {
    window.location.href = "segitiga.html"
}

function rectanglebutton() {
    window.location.href = "persegipanjang.html"
}

// function untuk tombol back dan end session
function backbutton() {
    halamanpertama.style.display = 'inline';
    halamandua.style.display = 'none';
}

function newshapebutton() {
    window.location.href = "home.html"; {
        halamanpertama.style.display = 'none';
        halamandua.style.display = 'inline';
    }
}


