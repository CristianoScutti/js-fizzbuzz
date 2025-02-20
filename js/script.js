
/* stampa i numeri da 1 a 100,
ma per i multipli di 3 stampa “Fizz” al posto del numero e per i multipli di 5 stampa Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz./*

/* 
Se il numero è divisibile per tre allora usscirà la scrittà "Fizz"
Altrimenti se il numero è divisibile per cinque allora uscirà la scritta "Buzz" 
Altrimenti se il numero è divisibile sia per tre che per cinque uscità la scritta "FizzBuzz"*/

for (let i = 1; i <= 100; i++) {
    let divisibile;
if ( i % 3 === 0 && i % 5 === 0) {
    divisibile = "FizzBuzz";
} else if (i % 3 === 0) {
    divisibile = "fizz";
} else if (i % 5 === 0){ 
    divisibile = "Buzz";
}
console.log(i, divisibile);

}