let express = require('express');

let app = express();

app.use(express.json());

app.get('/test', function(req, res){
    console.log(req.body);
    res.send('test GET success');
});

app.get('/home', (req, res) => {
    //this will send back a file in the current directory(__dirname) followed by the file we want to send
    res.sendFile(__dirname + '/static.html');
    console.log(__dirname);
})

app.post('/test', function(req, res){
    console.log(req.body);
    res.send('test POST success');
});

app.listen(8080, function(){
    console.log('app is listening!!');
    }
);