const http = require('http');
const pid = process.pid;

const server = http
    .createServer((req, res) => {
        for (let i = 0; i < 1e7; i++) {
        }
        res.end('Hello from Node.JS \n');
    })
    .listen(3000, () => {
        console.log(`Worker started. Pid: ${pid}`);
    });

process.on('SIGINT', () => {
    console.log('SIGINT received');
    server.close(()=>{
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    server.close(()=>{
        process.exit(0);
    });
});

process.on('SIGUSR2', () => {
    console.log('SIGUSR2 received');
    server.close(()=>{
        process.exit(1);
    });
});
