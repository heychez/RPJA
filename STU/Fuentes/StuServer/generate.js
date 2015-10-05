var sequelize = require("./common/models").sequelize;


sequelize.drop().then(function() {
	sequelize.sync().then(function  () {
		console.log("Sync models");
		return;
	})
	.catch(function  (error) {
		throw error;
	})
})
.catch(function  (error) {
	console.log("Error sync models");
	console.log(error.toString());
	return
});