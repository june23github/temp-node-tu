const fs = require('fs');

const readStream = fs.createReadStream('./docs/test.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/test2.txt', {encoding: 'utf-8'});

// readStream.on('data', (chuck) =>{
//     console.log('--new chuck--');
//     console.log(chuck);
//     writeStream.write(chuck);
// })

readStream.pipe(writeStream);

