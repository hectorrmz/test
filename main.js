(function () {
	var express = require("express");
	var url = require("url");
	var request = require("request");

	var app = express();

	app.get("/", function(req, res){
		res.sendFile(__dirname + "/wwwroot/index.html");
	});

	app.get("/jsontest", function(req, res){
		
		var options = {
			protocol: "https",
			host: "jsonplaceholder.typicode.com",
			pathname: "/posts"
		};

		var jsonUrl = url.format(options);
		request(jsonUrl).pipe(res);
		
	});

	app.use(express.static(__dirname + "/wwwroot/"));

	var port = Number(process.env.PORT || 5000);

	app.listen(port, function(){
		console.log("Listening on " + port);
		
	});
}());