//Default Parameter
//Default parametreler sona eklenir. 
// function AddToCard(productName = "Elma") {
//     console.log("Ürün Eklendi ! " + productName)
// }

function AddToCard(productName, quantity) {
    console.log("Ürün Eklendi ! " + productName + " Quantity : " + quantity)
}

//AddToCard()
//AddToCard(15)
AddToCard("Yumurta",34)

let sayHello = () => {
    console.log("Hello World !")
}

sayHello()

let sayHello2 = function sayHello2() {
    console.log("Hello World 2")
}

sayHello2()

function addToCard2(productName, quantity, unitPrice) {
    
}

addToCard2("Elma",10,20)
addToCard2("Armut",5,10)
addToCard2("Limon",20,5)

let product1 = {productName: "Elma" , unitPrice: 10 , quantity: 5}

function addToCard3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Ürün Fiyatı : " + product.unitPrice)
    console.log("Ürün Miktarı : " + product.quantity)
}

addToCard3(product1)

//Referans Tip
let product2 = {productName: "Elma" , unitPrice: 10 , quantity: 5}
let product3 = {productName: "Elma" , unitPrice: 10 , quantity: 5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//Değer Tip 
let sayi1 = 10
let sayi2 = 20 
sayi1 = sayi2
sayi2 = 100 
console.log(sayi1)

function addToCard4(products) {
    console.log(products)
}

let products = [
    {productName: "Elma" , unitPrice: 10 , quantity: 5},
    {productName: "Elma" , unitPrice: 10 , quantity: 5},
    {productName: "Elma" , unitPrice: 10 , quantity: 5}
]

addToCard4(products)

//...numbers rest operatörü
//rest operatör sona yazılır.  
function add(bisey,...numbers) { 
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
        
    }
    console.log(total)
    console.log(bisey)
}

add(10,20)
add(10,20,30)
add(10,20,30,40,50,60)

let numbers = [30,10,500,600,120]
//console.log(numbers)    => array 
//console.log(...numbers) => tek tek değişken 
console.log(Math.max(...numbers))

let [icAnodolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "İç Anadolu",population: "20M"},
    {name: "Marmara",population: "35M"},
    {name: "Karadeniz",population: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Trabzon","Rize"]
    ]
]

console.log(karadenizSehirleri)

let newProductName, newUnitPrice, NewQuantity
({productName:newProductName, unitPrice:newUnitPrice,quantity:NewQuantity}
  = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(NewQuantity)