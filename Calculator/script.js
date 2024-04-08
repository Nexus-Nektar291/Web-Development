const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");


let operation = null;
let previousOperand = null;

function sum (a, b)
{
    return a + b;
}

function sub (a, b)
{
    return a - b;
}

function mul (a, b)
{
    return a * b;
}

function div (a, b)
{
    return a / b;
}


// buttons.forEach(button =>
//     {
//         button.addEventListener("click", (e)=>
//         {
//             const buttonValue = e.target.textContent;
    
//             if(buttonValue == "AC")
//             {
//                 result.innerText = "";
//                 operation = null;
//                 previousOperand = null;
//             }
//             else if(buttonValue == "C")
//             {
//                 result.innerText = "";
//             }
//             else if(["+", "-", "*", "/"].includes(buttonValue))
//             {
//                 operation = buttonValue;
//                 previousOperand = parseFloat(result.innerText);
//                 result.innerText = "";
//             }
//             else if(buttonValue == "=")
//             {
//                 if(previousOperand !== null && operation !== null)
//                 {
//                     switch(operation)
//                     {
//                         case "+":
//                             result.innerText = sum(previousOperand, parseFloat(result.innerText));
//                             break;
//                         case "-":
//                             result.innerText = sub(previousOperand, parseFloat(result.innerText));
//                             break;
//                         case "*":
//                             result.innerText = mul(previousOperand, parseFloat(result.innerText));
//                             break;
//                         case "/":
//                             result.innerText = div(previousOperand, parseFloat(result.innerText)).toFixed(5);
                    
//                             break;
//                     }
//                 }
//             }
//             else
//             {
//                 result.innerText += buttonValue;
//             }
//         });
//     });






// buttons.forEach(button => {
//     button.addEventListener("click", (e) => {
//         const buttonValue = e.target.textContent;

//         if(buttonValue == "AC") {
//             result.innerText = "";
//         } else if(buttonValue == "C") {
//             result.innerText = result.innerText.slice(0, -1);
//         } else if(buttonValue == "=") {
//             try {
//                 result.innerText = eval(result.innerText).toFixed(5);
//             } catch {
//                 result.innerText = "Error";
//             }
//         } else {
//             result.innerText += buttonValue;
//         }
//     });
// });



let stack = [];

function applyOperation(a, b, op) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return (a / b).toFixed(5);
}
}
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.textContent;

        if(buttonValue == "AC") {
            result.innerText = "";
            stack = [];
        } else if(buttonValue == "X") {
            result.innerText = result.innerText.slice(0, -1);
        } else if(["+", "-", "*", "/"].includes(buttonValue)) {
            stack.push(parseFloat(result.innerText));
            stack.push(buttonValue);
            result.innerText = "";
        } else if(buttonValue == "=") {
            stack.push(parseFloat(result.innerText));

            while(stack.length >= 3) {
                const num2 = stack.pop();
                const op = stack.pop();
                const num1 = stack.pop();
                stack.push(applyOperation(num1, num2, op));
            }

            result.innerText = stack.pop();
        } else {
            result.innerText += buttonValue;
        }
    });
});