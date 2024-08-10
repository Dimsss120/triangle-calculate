const alas = document.getElementById('alas') ; //VARIABEL ALAS
const tinggi = document.getElementById ('tinggi') ; //VARIABEL TINGGI
const calculate = document.getElementById('count') ; //VARIABEL TOMBOL NGITUNG
const hasil = document.getElementById('hasil') ; //VARIABEL HASIL/OUTPUT SETELAH DI CALCULATE


calculate.addEventListener('click', function(){ //tombol / button hitung
let a = alas.value ; //inputan alas
let t = tinggi.value ; //inputan tinggi
let count = 0.5*a*t; //variabel rumus dari luas segitiga
hasil.innerHTML = `${count}` //nampilin hasil di HTML
}
)

// noted 
// "Value Digunakan apabila jumah yg ingin dimsukkan di dalam input"