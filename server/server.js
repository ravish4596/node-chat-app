const path = require('path');
const express = require('express');

const pubclicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(pubclicPath));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
