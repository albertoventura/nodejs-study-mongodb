require('dotenv').config();
var app = require('./src/config/server');

app.listen(process.env.PORT, _ => {
    console.log('server running at', process.env.PORT);
});