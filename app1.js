const { homedir } = require('node:os');
const os = require('node:os');

// console.log(os.freemem());

// console.log(os.loadavg());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.version());
// console.log(os.constants.signals);

// console.log(os.platform());
// console.log(os.cpus());
// console.log(homedir());
// console.log(os.uptime());

















const http = require('http');

const { request } = require('node:http');
const { fstat } = require('node:fs');

const server = http.createServer((request, response => {
    // console.log(request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.readfile('index.html',(err, data)=>{
        if(err) throw err;
        response.end(data)
    })
    // response.write('salom node js');
    // response.end();

}));

server.listen(3000, () => {
    console.log('3000 portda server ishladi');

});