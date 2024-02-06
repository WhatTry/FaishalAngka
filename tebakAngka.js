alert("hallo kawan")
alert("pengen main game?")
alert("ada game nih aku \ntebak angka 1 - 10\nkamu punya 1 kesempatan")

const angkaBenar = Math.floor(Math.random() * 10) + 1

for(let nyawa = 3;nyawa >= 1; nyawa--) {
    const tebakanUser = prompt("Masukkan Angka")

    
    if (tebakanUser == angkaBenar) { // validasi input
        alert(`Jago Coy \nAngka yang benar adalah ${angkaBenar}`)
        // alert(f(`tebakan anda adalah {tebakan user}`)) Python
        break
    } else if (tebakanUser > angkaBenar) {  // validasi input lebih besar
        alert(`ketinggian \nAnda masih punya ${nyawa - 1} kesempatan`)
    } else if (tebakanUser < angkaBenar) {// validasi input lebih kecil
        alert(`kerendahan \nAnda masih punya ${nyawa - 1} kesempatan`)
    }
}

if (nyawa = 1) {
    alert(`tebakan benar adalah ${angkaBenar}`)
}