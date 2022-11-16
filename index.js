var http=require('http');
var fs=require('fs');

var server = http.createServer(function(req,res){

    if(req.url=="/"){
        let data= fs.readFileSync('home.html','utf8');
        res.end(data);
     }

     else if(req.url=="/contact.html"){
         let data= fs.readFileSync('contact.html','utf8');
         res.end(data);
   
     }
     
     else if(req.url=="/about.html"){
         let data= fs.readFileSync('about.html','utf8');
         res.end(data);
     }
   
     else if(req.url=="/terms.html"){
         let data= fs.readFileSync('terms.html','utf8');
         res.end(data);
     }
});
server.listen(4000);
console.log("Congratulations!! Server Runned");
