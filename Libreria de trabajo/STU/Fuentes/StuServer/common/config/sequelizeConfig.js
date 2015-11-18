var env          = process.env.NODE_ENV || "development";
var Sequelize    = require("sequelize");
var dbConfigJson = require("./db/dbConfig.json")[env];
var config       = {
	"host":dbConfigJson.host,
	"port":dbConfigJson.port,
	"username":dbConfigJson.username,
	"password":dbConfigJson.password,
	"database":dbConfigJson.database,
	"dialect":dbConfigJson.dialect																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	,
	"timezone":"-05:00",
	"logging": false,
	"pool":{
		"maxConnections":10,
		"minConnections":1,
		"maxIdleTime":10000
	}
}


var sequelize  = new Sequelize(config.database, config.username, config.password, config);


module.exports = sequelize;

