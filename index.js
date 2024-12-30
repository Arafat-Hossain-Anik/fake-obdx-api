const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    const data = req.body;
    const headers = req.headers;
    console.log(data, headers);
    const response = {
        "status": "success",
        "message": data
    }
    res.send(response);
});

app.post("/obdx/api", (req, res) => {
    console.log("Request received");
    const data = req.body;
    console.log(data);
    if (data?.responseValue == "Reversed") {
        const response = {
            "status": {
                "result": "SUCCESSFUL",
                "contextID": "1234567899ygffghiojhgvh",
                "message": {
                    "type": "INFO",
                }
            },
            "receivedResponseResult": "0"
        };
        res.send(response);
    }
    else {
        const response = {
            "status": {
                "result": "SUCCESSFUL",
                "contextID": "1234567899ygffghiojhgvh",
                "message": {
                    "type": "INFO",
                }
            },
            "receivedResponseResult": "1"
        };
        res.send(response);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});