const express = require("express");
const app = express();
const podRoutes = require('./src/routes/PodRoute');

podRoutes(app)

app.listen(3010, () => {
 console.log("Server running on port 3010");
});