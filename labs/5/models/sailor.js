const sailorModel = (sequelize,DataTypes) =>{ 
    const sailor = sequelize.define('sailor',{
        name:   {
            type: DataTypes.STRING(45),
            validate : {
                checkName(value){
                   if(value.toUpperCase().substring(0,4) !== "MRS." && value.toUpperCase().substring(0,3) !== "MR." ){
                        throw new Error("Error name not has Mr. or Mrs.") 
                   } 
                }  
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            validate : {
                checkRating(value){
                    if(value > 10 || value < 1){
                        throw new Error("Error rating [1-10]")
                    }
                }
            }
        },
        age:    {
            type: DataTypes.DOUBLE,
            validate : {
                checkAge(value){
                    if(value > 90 || (value < 85 && value > 80) || (value < 50 && value > 40) || value < 20 ){
                        throw new Error("Error age between 20-40 , 50-80 , 85-90");
                    } 
                }
            }
        }
    }) 
    
    sailor.associate = (models) =>{
        sailor.belongsToMany(models.boat,{through:models.reserve})
    }

    return sailor
}

module.exports = sailorModel