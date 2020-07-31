function sum(num1, num2) {
    return num1 + num2;
}

//Recibe numero 1 y numero 2 y aparte recibe un Callback que seria la funcion que va hacer el proceso en este ejm la suma
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
//"test": "echo \"Error: no test specified\" && exit 1" package.json
//Correr el script en el terminal 
//npm run callback     
console.log(calc(8, 3, sum));



function date(callback) {
    console.log('1- ', new Date);
    setTimeout(function() {
        let date = new Date;
        console.log('1.1- ', new Date);
        callback(date);
        console.log('1.2- ', new Date);
    }, 3000)
    let date1 = new Date;
    console.log('0- ', new Date);
    callback(date1);
}

function printDate(dateNow) {
    console.log('2- ', dateNow);
}

date(printDate);