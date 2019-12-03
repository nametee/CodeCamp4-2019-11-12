 const boatService = (app,db)=>{ 
     // Promise
     app.get('/boats',(req,res) => {
         db.boat.findAll()
            .then((result)=> res.status(200).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json({ ErrorMessage : err.message })
            })
     })

     // async await
     /*app.get('/boats',async (req,res) => {
         try{
            let result = await db.boat.findAll()
            res.status(201).json(result) 
         }catch(err){
            console.log(err) 
            res.status(400).json() 
         }
     })*/

     app.post('/boat',(req,res) =>{ 
        db.boat.create({name: req.body.name , color: req.body.color})
            .then((result)=>res.status(201).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json({ ErrorMessage : err.message }) 
            })
        /*db.boat.create(req.body)
            .then((result)=>res.status(201).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json() 
            })*/
     })
     
     app.put('/boat/:id',(req,res) =>{ 

        db.boat.update({name: (req.body.name ? req.body.name : null) , color: (req.body.color ? req.body.color : null)},{where : {id: req.params.id}})
            .then((result)=>res.status(200).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json({ ErrorMessage : err.message }) 
            }) 
     })
     
     app.patch('/boat/:id',(req,res) =>{  
        db.boat.update(req.body,{where : {id: req.params.id}})
            .then((result)=>res.status(200).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json({ ErrorMessage : err.message }) 
            })
     })

     app.delete('/boat/:id',(req,res) =>{  
        db.boat.destroy({where : {id: req.params.id}})
            .then((result)=>res.status(204).json(result))
            .catch((err)=>{
                console.log(err)
                res.status(400).json({ ErrorMessage : err.message }) 
            })
     })
 }

module.exports = boatService