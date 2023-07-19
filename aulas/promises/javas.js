/* Promises simples */

/* let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2){
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is the then ' + message)
}).catch((err) =>{
    console.log('This is the catch ' + err)
}) */

/* Transformando funções já criadas em promises */
 /* Função já criada:
const betterDev = 'carol'

function WhoIsTheBetterCallback(callback, errorCallback){
    if(betterDev != 'carol'){
        errorCallback({
            name: 'This is wrong,',
            message: betterDev + ' is not the better dev'
        })
    } else {
        callback({
            name: betterDev,
            message: "Yes, i'm the best"
        })
    }
}

WhoIsTheBetterCallback((result) => {
    console.log(result.name + '? Yeah! ' + result.message)
}, (error) => {
    console.log(error.name + ' ' + error.message)    
})

*/

/*
const betterDev = 'carol'

function WhoIsTheBetterCallback(callback, errorCallback){

    return new Promise((resolve, reject) => {
        if(betterDev != 'carol'){
            reject({
                name: 'This is wrong,',
                message: betterDev + ' is not the better dev'
            })
        } else {
            resolve({
                name: betterDev,
                message: "Yes, i'm the best"
            })
        }

})
}

WhoIsTheBetterCallback()
    .then((result) => {
    console.log(result.name + '? Yeah! ' + result.message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)    
})
*/

/* Promise Real */

