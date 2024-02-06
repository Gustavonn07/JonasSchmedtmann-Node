const fs = require('fs');
const axios = require('axios');

const readFilePro = file => {

    return new Promise((resolve, reject) => {

        fs.readFile(file, (err, data) => {
            if(err) reject('I could not find this file!');
            resolve(data);
        })
    });
};

const writeFilePro = (file, data) => {
    
    return new Promise((resolve, reject) => {

        fs.writeFile(file, data, err => {
            if(err) reject('I could not write this file!');
            resolve('success');
        });
    });
};

(async function getDogPic() {
    try {
        const data = await readFilePro(`${__dirname}/dog.txt`);
        const res = await axios(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        await writeFilePro('dog-img.txt', res.data.message);

    } catch(err) {
        console.log(err);
    }
})();