module.exports = function(sequelize, DataTypes) {
  var Denuncia = sequelize.define('Denuncia', 
    {
      idDenuncia : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey : true

      },
      titulo : {
        type : DataTypes.STRING  
      },
      descripcion : {
        type : DataTypes.STRING  
      },
      imagen : {
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
        associate : function  (models) {
          Denuncia.belongsTo(models.Usuario,{foreignKey:"idUsuario"});
        }
        
      }
    }
  );
  return Denuncia;
};