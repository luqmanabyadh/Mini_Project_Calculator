//variabel untuk memasukkan username
let username = document.getElementById("username");
//variable untuk memindahkan halaman pertama ke halaman ke dua
let halamanpertama = document.getElementById("halamanpertama");
let halamandua = document.getElementById("halamandua");
//untuk memunculkan username nya lagi
let usernamedisplay = document.getElementById("usernamedisplay");

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

function kembalikehalamansatu() {
    halamanpertama.style.display = 'inline';
    halamandua.style.display = 'none';
}