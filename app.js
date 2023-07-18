var app = require('./src/config/server');

app.listen(3000, _ => {
    console.log('server running');
});