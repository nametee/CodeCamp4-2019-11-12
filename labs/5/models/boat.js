const boatModel = (sequelize,DataTypes) =>{ 
    const boat = sequelize.define('boat',{
        name:   {
            type : DataTypes.STRING(45),
            validate : {
                notContains: 'boat', 
                len : [3,15],
                
            }
        },
        color:  {
            type: DataTypes.STRING(45),
            validate : {
                checkColor(value){
                    switch(value.toUpperCase()){
                        case "GREEN": break
                        case "BLUE": break
                        case "RED": break
                        case "YELLOW": break
                        case "ORANGE": break
                        default :  throw new Error("Error Color is [Green,Blue,Red,Yellow,Orange] only");
                    } 
                }
            }
        }
    })

    boat.associate = (models) =>{
        boat.belongsToMany(models.sailor,{through:models.reserve})
    }

    return boat
}

module.exports = boatModel