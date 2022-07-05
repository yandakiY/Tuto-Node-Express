
const names = require('./3-names');

const sayHi = (name , i) =>{
    for(let x = 0 ; x < i ; x++){
        console.log(`Hello ${name} , ${x+1} Loop`)
    }
}

const sayHiEveryBody = () =>{

    names.forEach((element, index) =>{
        console.log(`Name ${index+1} : ${element}`);
    })
}

module.exports = {sayHi , sayHiEveryBody , names}