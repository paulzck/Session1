const express = require("express"),
    app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.body);
    res.status(404).send("Not found");
});

app.get("/paul", (req, res) => {
    console.log(req.body);
    res.status(200).send("Short intro of myself.");
});

app.get("/:name", (req, res) => {
    console.log(req.params);
    res.status(200).send("Hello " + req.params.name);
});

app.listen(3004, () => 
    console.log("express is listenning on http://localhost:3004")
);