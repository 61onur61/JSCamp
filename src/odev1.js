function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 2; j <= numbers[i]; j++) {
         if (numbers[i] % 2 == 0) {
             if (numbers[i] == 2) {
                console.log(numbers[i] + " sayısı asaldır.")
             }else{
                console.log(numbers[i] + " sayısı asal değil.")
             }
         }
         else{
             console.log(numbers[i] + " sayısı asaldır.")
         }
        }
      }
}

//console.log(findPrime(997))

let number1, number2, total1 = 0, total2 = 0

function friendlyNumber(number1, number2) {
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }
    if (number1 == total2 && number2 == total1)
    {
        console.log(number1 + " ve " + number2 + " Sayıları Arkadaş Sayı");
    }
    else
    {
        console.log(number1 + " ve " + number2 + " Sayıları Arkadaş Sayı Değil");
    }
}

//friendlyNumber(220,284)
//friendlyNumber(1184,1210)

function perfectNumber() {
    for (let i = 1; i < 1000; i++) {
        let total = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if (total == i) {
            console.log(i + " " + "Sayısı Mükemmel Sayıdır")
        }
    }
}

//perfectNumber()

function primeNumber() {
    for (let i = 2; i <= 1000; i++) {
        let isPrime = 1
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = 0
            }
        }
        if (isPrime == 1) {
            console.log(i + " sayısı asaldır")
        }
    }
}

//primeNumber()



