let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let is_open = false;

let order = ((work, time)=>{
    return new Promise((resolve, reject)=>{
        if(is_open){
            setTimeout(()=>{
                resolve(work())
            }, time)
        }
        else{
            reject("No order placed")
        }
       
    })
})

order(2000, ()=>console.log(`${stocks.Fruits[0]} is selected`))
.catch(()=>{
    console.log("customer left")
})
.finally(()=>{
    console.log("shop closed")
})