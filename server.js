const express = require('express'),
         path = require('path'),
          app = express();
          
app.get('/', function(req, res){ 
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT);
console.log('port: ' + process.env.PORT);