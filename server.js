const http = require('http');
const port = 8888;
const fs=require('fs');


const server =http.createServer((req,res)=>{ 
  if(req.method=="GET"&&req.url=="/"){
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
  }else{
	 res.writeHead(200, { 'content-type': 'text/plain' })
	 res.end("Error")
  }
});
server.listen(process.env.PORT || 8888)