const http = require('http');
const url = require('url');
//const mod = require('./osinfo/index');
var systeminfo = require('./osinfo/systeminfo');
var firewall = require('./osinfo/firewall');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');

   var rUrl = url.parse(req.url);
   if(rUrl.pathname === "/"){
       res.write("No Data Found");
   }else if(rUrl.pathname === "/systeminfo"){
       res.write(systeminfo.getSysteminfo());
   }else if(rUrl.pathname === "/userinfo"){
       res.write(systeminfo.getUserinfo())
   }else if(rUrl.pathname === "/firewall"){
       res.write(firewall.getStatuses());
   }
   res.end();
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });