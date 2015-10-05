module.exports = function(sequelize, DataTypes) {
  var Denuncia = sequelize.define('Denuncia', 
    {
      idDenuncia : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true

      },
      texto : {
        type : DataTypes.STRING  
      },
      pathFile : {
        type : DataTypes.STRING  
      }
    }, 
    {
      createdAt : "fechaCreacion",
      updatedAt : "fechaModificacion",
      deletedAt : "fechaEliminacion",
      paranoid:true,
      tableName : "denuncia",
      classMethods: {
      }
    }
  );
  return Denuncia;
};