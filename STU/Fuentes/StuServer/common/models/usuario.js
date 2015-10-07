module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define('Usuario', 
    {
      idUsuario:{
        type : DataTypes.STRING,
        primaryKey : true
      },
      nombreCompleto: {
        type: DataTypes.STRING
      },
      email : {
        type: DataTypes.STRING
      },
      imagen:{
        type: DataTypes.STRING
      },
      genero : {
        type: DataTypes.STRING
      }
    }, 
    {
      createdAt : "fechaCreacion",
      updatedAt : false,
      deletedAt : false,
      paranoid:false,
      tableName : "usuario",
      classMethods: {
      }
    }
  );
  return Usuario;
};