a.readFile('testwrite.txt',function(err,data){
    if(err) throw err;
    console.log(data);
});