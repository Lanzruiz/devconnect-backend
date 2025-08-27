const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API RUNNING"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  `Server running in ${PORT}`;
});
