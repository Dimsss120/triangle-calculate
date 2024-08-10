const sisi1 = document.getElementById('s1')
const sisi2 = document.getElementById('s2')
const sisi3 = document.getElementById('s3')
const count = document.getElementById('count')
const hasil = document.getElementById('hasil')


count.addEventListener('click', function() {
let sisiPertama = +s1.value ; // <-
let sisiKedua = +s2.value ;  // <-
let sisiKetiga = +s3.value ;  // <-
let hitung = sisiPertama + sisiKedua + sisiKetiga
hasil.innerHTML = `${hitung}`
})

//simbol +variabel.value = tandah "+" diigunakan jika ingin menambahkan operator matematika di variabel agar inputnya menjumlahkan