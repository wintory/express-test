var a = require('fs');
a.writeFile('testwrite.txt','testwrite',function(err){
    if(err) throw err;
    console.log('save');
});

a.readFile('testwrite.txt',function(err,data){
    if(err) throw err;
    console.log(data);
});