let Fizz = '';
let Buzz = '';

for (let i = 0; i <= 100; i++){
    if( i % 3 === 0){
        // stampa Fizz
        console.log('Fizz');
    }else if(i % 5===0){
        // stampa Buzz
        console.log('Buzz');
    }else(i % 3 === 0 && i % 5===0);{
        console.log('FizzBuzz');
    }
    let divElement = document.createElement('div');
    divElement.classList.add('Fizz');
    let contenitore = document.getElementById('container');
    contenitore.append('Fizz');
    divElement.appendChild(div);
    
    
}


