const  setTimeoutAndLog = (input) => new Promise((resolve,reject)=>{
    let answer = true
    if(answer){
        setTimeout(()=> {
            console.log(input)
            resolve(input)
        },1000) 
    } else{
        setTimeout(()=> reject(new Error('Error 123! ')),1000) 
    } 
}) 

const runAll = async ()=>{ 
    await setTimeoutAndLog('a')
    await setTimeoutAndLog('b')
    await setTimeoutAndLog('c')
    await setTimeoutAndLog('d')
}

runAll()