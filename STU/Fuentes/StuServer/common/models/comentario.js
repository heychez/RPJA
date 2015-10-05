module.exports = function(sequelize, DataTypes) {
  var Comentario = sequelize.define('Comentario', 
    {
      idComentario : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
      },
      texto : {
        type : DataTypes.STRING , 
        defaultValue : "",
        validate : {
          notEmpty : {
            msg: "El campo texto no puede estar vacio"
          }
        }
      }
    }, 
    {
      createdAt : "fechaCreacion",
      updatedAt : "fechaModificacion",
      deletedAt : "fechaEliminacion",
      paranoid:true,
      tableName : "comentario",
      classMethods: {
      }
    }
  );
  return Comentario;
};