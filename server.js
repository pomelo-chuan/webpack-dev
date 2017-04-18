const join = require('path').join;
const express = require('express');
const constants = require("./constants");

const app = express();

app.use(express.static(join(__dirname, 'dist')));
app.listen(constants.PORT, () => console.log('Listen on：' + constants.PORT));
