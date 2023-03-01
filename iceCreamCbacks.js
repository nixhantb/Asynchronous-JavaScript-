let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // two seconds to place the order.

 let order = (fruitName, set_prod)=>{
    // runs after 2 sec
    setTimeout(()=>{
        console.log(`The fruit ${stocks.Fruits[fruitName]} is selected`);
        set_prod();
    }, 2000);
    
   
    
 };

 let production = () => {
    setTimeout(()=>{
        // run this
        console.log("Production has started");
        // and this
        setTimeout(()=>{
            console.log("Cut the fruit");
            
            setTimeout(()=>{
                console.log("Add water and ice")

                setTimeout(()=>{
                    console.log("start the machine");

                    setTimeout(()=>{
                        console.log("Select the container");

                        setTimeout(()=>{
                            console.log("Select toppings");

                            setTimeout(()=>{
                                console.log("serve me ice-creame");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            },1000);
        },2000);
    },0000)
 };

 order(0,production);