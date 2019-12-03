const sailorService = (app,db)=>{ 
    // Promise
    app.get('/sailors',(req,res) => {
        db.sailor.findAll()
           .then((result)=> res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message })
           })
    })

    // async await
    /*app.get('/sailors',async (req,res) => {
        try{
           let result = await db.sailor.findAll()
           res.status(201).json(result) 
        }catch(err){
           console.log(err) 
           res.status(400).json() 
        }
    })*/

    app.post('/sailor',(req,res) =>{ 
       db.sailor.create({name: req.body.name , rating: req.body.rating , age : req.body.age})
           .then((result)=>res.status(201).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
       /*db.sailor.create(req.body)
           .then((result)=>res.status(201).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json() 
           })*/
    })
    
    app.put('/sailor/:id',(req,res) =>{  
       db.sailor.update({
                name: (req.body.name ? req.body.name : null) , 
                rating: (req.body.rating ? req.body.rating : null) ,
                age: (req.body.age ? req.body.age : null)
            },{
                where : {id: req.params.id}
            })
           .then((result)=>res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           }) 
    })
    
    app.patch('/sailor/:id',(req,res) =>{  
       db.sailor.update(req.body,{where : {id: req.params.id}})
           .then((result)=>res.status(200).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
    })

    app.delete('/sailor/:id',(req,res) =>{  
       db.sailor.destroy({where : {id: req.params.id}})
           .then((result)=>res.status(204).json(result))
           .catch((err)=>{
               console.log(err)
               res.status(400).json({ ErrorMessage : err.message }) 
           })
    })
}

module.exports = sailorService