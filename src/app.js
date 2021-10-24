console.log('Merhaba Kodlama.io')
//var keyword ünde scope kavramı yok. 
//Yani değişkenlerin tanımlandığı blok önemli değil.
//JS TypeSafe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const ile tanımlanan değişkenlere yeni değer atanamaz.
//const tipi read-only dir. 
const euroDun = 11.2
//euroDun = 11
console.log(euroDun)

let konutKredileri = ['Konut Kredisi','Emlak Konut Kredisi','Kamu Konut Kredisi',"Taşıt Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")

console.log(konutKredileri)
