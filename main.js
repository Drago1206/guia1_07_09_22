addEventListener("DOMcontentLoaded", ()=>{
    let num1,num2,num3
    num1=Number(prompt("Ingrese un numero"))
    num2=Number(prompt("Ingrese un numero"))
    num3=Number(prompt("Ingrese un numero"))
    
    console.log(`La suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division es ${num1} / ${num2} = ${num1 / num2}`);

})