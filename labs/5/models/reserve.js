const reserveModel = (sequelize,DataTypes) =>{
    const reserve = sequelize.define('reserve',{
        day:   {
            type : DataTypes.DATE,
            validate : {
                isDate : true,
                isAfter : new Date(new Date().getTime() - (24 * 60 * 60 * 1000 )).toISOString().slice(0, 10)
            }
        } 
    })

    return reserve
}

module.exports = reserveModel