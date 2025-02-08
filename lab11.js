// Implement a simple division method that returns the result of a / b
function divide(a, b) {
  if (b === 0) {
    
throw new Error("Division by zero is forbidden");

  } else {
    
return a / b ;

  }
}

// This code calls the divide function and logs the result or error
try{
const result = divide(10, 2);
console.log("Result:", result);
}
catch(err){
  console.error("Error:", err.message);
}

