

/*var http = require('http');
var date = require('./date');
var dt = new Date();
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Now is '+dt);
    res.end('Hello World\n');
}).listen(1341,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/

var app = require('express')();
var port = process.env.PORT || 9001;
var user = require('./user');

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/user', function (req,res){
    var id = req.param.id;
    res.json(user.findAll());
});

app.get('/user/:id', function (req,res){
    var id = req.params.id;
    res.json(user.findById(id));
});

app.post('/newuser', function(req,res){
    var newuser = req.body;
    res.send('Add new'+json.name+'Complete');
});


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});

