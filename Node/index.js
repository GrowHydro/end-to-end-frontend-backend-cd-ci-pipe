const http = require("http");
const exp = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 8000;

const app = exp();
const server = http.createServer(app);

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("*", (req, res) =>
    res.status(200).send({
        message: "you hit the app"
    })
)

app.set("port", port);

server.listen(port);