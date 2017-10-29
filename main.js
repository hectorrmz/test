(function () {
	var express = require("express");
	var url = require("url");
	var bodyParser = require('body-parser')
	var request = require("request");

	var app = express();

	app.get("/", function (req, res) {
		res.sendFile(__dirname + "/wwwroot/index.html");
	});

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: false }))

	// parse application/json
	app.use(bodyParser.json())


	app.post("/user", function (req, res) {

		var username = req.body.username;
		var password = req.body.password;

		if (!username || !password) {
			res.status("400").send({ message: "Could not find username or password" });
		}

		var encode = Buffer.from(username + ":" + password).toString("base64");

		var options = {
			protocol: "https",
			host: `${username}:${password}@dev.unosquare.com`,
			pathname: "/redmine/users/current.json"
		};

		var jsonUrl = url.format(options);

		request(jsonUrl).on('response', function (response) {
			if (response.statusCode === 401) {
				res.status("400").send({ message: "Invalid username or password" });
			}
		}).pipe(res);


	});

	app.get("/issues", function (req, res) {

		var username = "";
		var password = "";

		var encode = Buffer.from(username + ":" + password).toString("base64");
		console.log(encode);

		var options = {
			protocol: "https",
			host: `${username}:${password}@dev.unosquare.com`,
			pathname: "/redmine/issues.json"
		};

		var jsonUrl = url.format(options);

		request(jsonUrl).pipe(res);

	});

	app.use(express.static(__dirname + "/wwwroot/"));

	var port = Number(process.env.PORT || 5000);

	app.listen(port, function () {
		console.log("Listening on " + port);

	});
}());