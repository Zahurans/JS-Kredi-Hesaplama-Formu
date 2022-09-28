function taksitHesap() {

let odenecekTutar,taksitTutar;
let krediTutar = document.querySelector("#krediTutar").value;
console.log(krediTutar)

let liste= document.querySelector("#krediTaksit");
let taksitSayisi=parseInt(liste.options[liste.selectedIndex].text);
let oran= taksitSayisi/12;

odenecekTutar= krediTutar*(1+oran/10);

taksitTutar =odenecekTutar/taksitSayisi;
document.getElementById("sonuc").innerText = 
`
Geri Ödenmesi Gereken Tutar: ${Math.round(odenecekTutar)}
Aylık Taksit Tutarınız: ${Math.round(taksitTutar)}
`
console.log(taksitSayisi);
}