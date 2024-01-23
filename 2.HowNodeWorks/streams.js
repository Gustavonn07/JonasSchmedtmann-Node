const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1: readFile

    // fs.readFile('testFile.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2: Streams

    // const readable = fs.createReadStream('testFile.txt');
    // readable.on('data', chunck => {
    //     res.write(chunck);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     res.statusCode(500);
    //     console.log(err);
    // })

    // Solution 3: pipe
    
    const readable = fs.createReadStream('testFile.txt');
    readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening at 127.0.0.1:8000');
});