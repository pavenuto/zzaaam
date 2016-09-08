var statik = require('statik');
statik({
    port: process.env.PORT || 5000,
    root: 'public/'
});

console.log('hi')