let Fizz = '';
let Buzz = '';

const divElement = document.querySelector('div');
// console.log(divElement)

for (let i = 0; i <= 100; i++){
    if( i % 3 === 0){
        // creo un elemento HTML
        const divFizzEl = document.createElement('div');
        const pElement = document.createElement('p');
        divFizzEl.classList.add('fizz');
        divFizzEl.append('Fizz', pElement);
        // agiungo un elemento ad un elemento che esiste nel DOM
        divElement.appendChild(divFizzEl);
        console.log(divFizzEl);
        // stampa Fizz
        }else if(i % 5 === 0){
        // creo un elemento HTML
        const divFizzEl = document.createElement('div');
        const pElement = document.createElement('p');
        divFizzEl.classList.add('buzz');
        divFizzEl.append('Buzz', pElement);
        // agiungo un elemento ad un elemento che esiste nel DOM
        divElement.appendChild(divFizzEl);
        console.log(divFizzEl);
        // stampa Buzz
        }else(i % 3 === 0 && i % 5 === 0);{
        // creo un elemento HTML
        const divFizzEl = document.createElement('div');
        const pElement = document.createElement('p');
        divFizzEl.classList.add('fizzbuzz');
        divFizzEl.append('FizzBuzz', pElement);
        // agiungo un elemento ad un elemento che esiste nel DOM
        divElement.appendChild(divFizzEl);
        console.log(divFizzEl);
        // stampa FizzBuzz
        }
}



// let divElement = document.createElement('div');
// divElement.classList.add('Fizz');
// let contenitore = document.getElementById('container');
// contenitore.append('Fizz');
// divElement.appendChild(div);
// console.log()