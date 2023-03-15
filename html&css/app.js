const server = require("express");
const app=server();

app.use(server.static(__dirname));

app.listen(8082,()=>{
	console.log("http://localhost:8082")
})