let card = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarz Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]

//SPA
//Map Function
//card.map(product => console.log(product.productName))
console.log("<ul>")
card.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

//Reduce Function
let total = card.reduce((acc,product)=> acc + product.unitPrice * product.quantity, 0)
console.log("Total : " + total)

//Filter Function
let quantityOver2 = card.filter(product => product.quantity > 2)

console.log(quantityOver2)

function addToCard(sepet) {
    sepet.push({id:7, productName:"Ruhsat Kılıfı", quantity:1, unitPrice:20})
}

addToCard(card)

console.log(card)

let sayi = 10 

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)