module.exports = function(sequelize, DataTypes) {
  var Vehiculo = sequelize.define('Vehiculo', 
    {
      placa : {
        type : DataTypes.STRING,
        primaryKey : true
      },
      modalidadServicio: {
        type: DataTypes.STRING
      },
      clase : {
        type: DataTypes.STRING
      },
      anioFabricacion: {
        type : DataTypes.INTEGER
      },
      modelo: {
        type : DataTypes.STRING
      },
      marca: {
        type : DataTypes.STRING
      },
      serie: {
        type : DataTypes.STRING
      },
      serieMotor: {
        type : DataTypes.STRING
      },
      tipoCombustible: {
        type : DataTypes.STRING
      },
      pesoSeco: {
        type : DataTypes.DOUBLE
      },
      pesoBruto: {
        type : DataTypes.DOUBLE
      },
      longitud: {
        type : DataTypes.DOUBLE
      },
      altura: {
        type : DataTypes.DOUBLE
      },
      ancho: {
        type : DataTypes.DOUBLE
      },
      cargaUtil: {
        type : DataTypes.DOUBLE
      },
      capacidadPasajero: {
        type : DataTypes.INTEGER
      },
      numeroAsientos: {
        type : DataTypes.INTEGER
      },
      numeroRueda: {
        type : DataTypes.INTEGER
      },
      numeroEje: {
        type : DataTypes.INTEGER
      },
      numeroPuerta: {
        type : DataTypes.INTEGER
      },
      fechaInscripcion: {
        type : DataTypes.DATE
      },
      tipoDocumento: {
        type : DataTypes.STRING
      },
      nroConsultas:{
        type:DataTypes.INTEGER,
        defaultValue:0
      }
    }, 
    {
      createdAt : "fechaCreacion",
      updatedAt : "fechaModificacion",
      deletedAt : "fechaEliminacion",
      paranoid:true,
      tableName : "vehiculo",
      hooks:{
        afterFindOne : function  (vehiculoInstance) {
          if(vehiculoInstance){
            return vehiculoInstance.increment('nroConsultas', {by: 1})
              .then(function  (vehiculowat) {
              })
              .catch(function  (error) {
                error        = new Error("Error en updatear nroConsultas");
                error.status = 500;
                throw error;
              });
          }
        }
      },
      classMethods: {
        associate: function(models) {
          Vehiculo.hasMany(models.Comentario,{foreignKey:"placa"});
          Vehiculo.hasMany(models.Denuncia,{foreignKey:"placa"});
        }
      },
      instanceMethods:{
        obtenerComentariosWithUsuarios : function  () {
          var self = this;
          return sequelize.models.Comentario.findAll({
            where:{placa:self.placa},
            include:[
              {
                model:sequelize.models.Usuario
              }
            ]
          });
        }
      }
    }
  );
  return Vehiculo;
};