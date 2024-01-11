const fs = require('fs');

// Forma sincrona:

const textIn = fs.readFileSync('./txt/input.txt','utf-8');

const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);



// Forma assincrona:
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log(err);
    
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        if(err) return console.log(err);

        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
        if(err) return console.log(err);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                if(err) return console.log(err);
                console.log('Your file has been written');
            })
        })
    })
})
console.log('Will read file!');