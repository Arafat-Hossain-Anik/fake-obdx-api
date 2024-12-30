const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/obdx/api", (req, res) => {
    console.log("Request received");
    const data = req.body;
    console.log(data);
    const response = {
        "status": {
            "result": "success",
        },
        "receivedResponseResult": "0"
    };
    res.send(response);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});