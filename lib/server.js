const ExplorerController = require("./controllers/ExplorerController.js");
const express =require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get("/", (request, response) => {
    // response.json({message: "FizzBuzz Api welcome!"});
    response.send("GET request to the homepage");
});

app.get("/test/:color", (req, res) => {
    res.send("Get request to test");
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
