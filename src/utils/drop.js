const { databaseConnect, databaseClear, databaseClose } = require("./database");

async function drop() {
	await databaseConnect();
	await databaseClear();
	console.log("Database has been dropped.");
	await databaseClose();
}

drop();
