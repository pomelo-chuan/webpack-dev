const join = require('path').join;
const express = require('express');

const app = express();

app.use(express.static(join(__dirname, 'dist')));
app.listen(process.env.PORT || 3000, () => {console.log("listen on http://localhost:3000")})