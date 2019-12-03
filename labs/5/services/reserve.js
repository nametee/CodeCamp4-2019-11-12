const reserveService = (app,db)=>{ 
    // Promise
    app.get('/reserves',(req,res) => {
        db.reserve.findAll()
           .then((result)=> res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message })
           })
    })

    // async await
    /*app.get('/reserves',async (req,res) => {
        try{
           let result = await db.reserve.findAll()
           res.status(201).json(result) 
        }catch(err){
           console.log(err) 
           res.status(400).json() 
        }
    })*/

    app.post('/reserve',(req,res) =>{ 
       db.reserve.create({day: req.body.day , boatId: req.body.boatId , sailorId : req.body.sailorId})
           .then((result)=>res.status(201).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
       /*db.reserve.create(req.body)
           .then((result)=>res.status(201).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json() 
           })*/
    })
    
    app.put('/reserve/:boatId/:sailorId/:day',(req,res) =>{  
        console.log(req.body)
        console.log(req.params)
       db.reserve.update({
                day: (req.body.day ? req.body.day : null) , 
                boatId: (req.body.boatId ? req.body.boatId : null) ,
                sailorId: (req.body.sailorId ? req.body.sailorId : null)
            },{
                where : {
                    boatId: (req.params.boatId ? req.params.boatId : null) ,
                    sailorId: (req.params.sailorId ? req.params.sailorId : null),
                    day:  (req.params.day ? req.params.day : null)
                }
            })
           .then((result)=>res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           }) 
    })
    
    app.patch('/reserve/:boatId/:sailorId/:day',(req,res) =>{  
       db.reserve.update(req.body
            ,{
                where : {
                    boatId: (req.params.boatId ? req.params.boatId : null) ,
                    sailorId: (req.params.sailorId ? req.params.sailorId : null),
                    day:  (req.params.day ? req.params.day : null)
                }
            })
           .then((result)=>res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
    })

    app.delete('/reserve/:boatId/:sailorId/:day',(req,res) =>{  
       db.reserve.destroy({
                where : {
                    boatId: (req.params.boatId ? req.params.boatId : null) ,
                    sailorId: (req.params.sailorId ? req.params.sailorId : null),
                    day:  (req.params.day ? req.params.day : null)
                }
            })
           .then((result)=>res.status(204).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
    })
}

module.exports = reserveService