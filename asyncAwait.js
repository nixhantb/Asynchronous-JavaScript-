function topping_choice(){

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve(console.log("which order you want to place"))
        }, 3000)
    })
}

async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");

    await topping_choice();
    
    console.log("D");
    console.log("E");
}
kitchen();
console.log("Produce");
console.log("Clean kitchen");