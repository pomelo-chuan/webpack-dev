const join = require('path').join;
const express = require('express');
const constants = require("./constants");

const app = express();

console.log(app.get('env'));

app.use(express.static(join(__dirname, 'dist')));
app.listen(constants.PORT, function () {
    console.log('Listen on：' + constants.PORT);
});
