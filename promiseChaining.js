let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let shop_=true;

 let order = ( time, work) => {
    // time and work 
    // time is the variable for setTimeout
    // work is the function 

    return new Promise((resolve, reject)=>{
        if(shop_){
            setTimeout(()=>{

                resolve(work());
            }, time);
        }
        else{
            reject("Product is not ready ! sorry")
        }
    })
    
 }

 order(2000, ()=>console.log(`${stocks.Fruits[2]} is selected`))
 // step-1
 .then(()=>{
    return order(0000, ()=>console.log("Production has started"))
 })
 // step-2
 .then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
 })
 // step-3
 .then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`))

 })
 // step-4
 .then(()=>{
    
    return order(0000, ()=>console.log(`Start the machine`))
 })
 // step-5

 .then(()=>{
    
    return order(1000, ()=>console.log(`Ice cream placed at the top`))
 })
 
 // step-6

 .then(()=>{
    return order(3000,()=>console.log(`${stocks.toppings[0]} as a toppings`))
 })

 // step-7

 .then(()=>{
    return order(1000, ()=>console.log("Serve Icecream"))
 })