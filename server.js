// require dependencies
const express = require("express");
const methodOverride = require("method-override");

const airChars = require("./models/air");

// initialize express application
const app = express();

// configure application settings
const port = 3000;

// mount middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// ALL ROUTES
// INDEX
app.get("/airChar", (req, res) => {
	res.render("indexAir.ejs", { airChars: airChars });
});

// NEW
app.get("/airChar/new", (req, res) => {
	res.render("newAir.ejs");
	// res.send("page info coming soon")
});

// // D
// app.delete("/airChar/:indexOfAirCharArray", (req, res) => {
// 	air.splice(req.params.indexOfAirCharArray, 1); //remove the item from the array
// 	res.redirect("/airChar"); //redirect back to index route
// });

// // U
// app.put("/airChar/:indexOfAirCharArray", (req, res) => {
	
// 	if (req.body.mainChar === "on") {
// 		req.body.mainChar = true;
// 	} else {
// 		req.body.mainChar = false;
// 	}
// 	fruits[req.params.indexOfAirCharArray] = req.body;
// 	res.redirect("/airChar");
// });

// CREATE
app.post("/airChar", (req, res) => {
	if (req.body.mainChar === "on") {
		req.body.mainchar = true;
	} else {
		req.body.mainChar = false;
	}
	airChars.push(req.body);
	console.log(airChars);
	res.redirect("/airChar");
});

// // E
// app.get("/airChar/:indexOfAirCharArray/edit", (req, res) => {
// 	res.render(
// 		"editAir.ejs",
// 		{
// 			air: airChars[req.params.indexOfAirCharArray],
// 			index: req.params.indexOfAirCharArray,
// 		}
// 	);
// });

// Show
app.get("/airChar/:indexOfAirCharArray", (req, res) => {

	res.render("showAir.ejs", {
		airChars: airChars[req.params.indexOfAirCharArray],
	});
});

app.listen(port, () => {
	console.log(`Listening on port`, port);
});