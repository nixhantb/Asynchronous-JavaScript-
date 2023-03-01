
// calling a one function inside the another function is callbacks
// passing function as a argument inside the argument of first()
function first(second_func){
    console.log("I am the first function");
    second_func();
}

// second function
function second(){
    console.log("I am the second function");
}

first(second);
