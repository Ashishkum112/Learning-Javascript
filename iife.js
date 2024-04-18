// iife = Immediately Invoked Function Expressions(IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Disconnected`)
})();

((name) => {
    console.log(`DB Disconnected ${name}`)
})('AAsh')