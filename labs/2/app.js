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
 
setTimeoutAndLog('a').then((result)=>{
    setTimeoutAndLog('b').then((result)=>{ 
        setTimeoutAndLog('c').then((result)=>{   
            setTimeoutAndLog('d').then((result)=>{ 
            }).catch((err)=>{ 
                console.log(err);
            })
        }).catch((err)=>{ 
            console.log(err);
        })
    }).catch((err)=>{ 
        console.log(err);
    })
}).catch((err)=>{ 
    console.log(err);
})


// show all at one time
/*
setTimeoutAndLog('a')
    .then(setTimeoutAndLog('b')
        .then(setTimeoutAndLog('c')
            .then(setTimeoutAndLog('d'))))
*/