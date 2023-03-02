
let is_shop_open = true;
function hello(){
    console.log("hi")
}
function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(hello())
            }, ms);
        }
        else{
            reject(console.log("shop is closed"));
        }
    })
}

async function kitchen(){
    try{
        await time(2000);

    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("Day ended, shop closed");
    }
}
kitchen();