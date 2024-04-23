/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            resolve("this is functions is made to sleep all tasks until it is executed");
        },seconds*1000)
    })
}
async function api(){
    await sleep(4);
    console.log("yes it waited");
}
api()
