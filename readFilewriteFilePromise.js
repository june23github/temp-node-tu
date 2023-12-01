const {readFile, writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async() =>{
    try {
        const first = await readFile('./docs/file2.txt', 'utf-8');
        await writeFile('./docs/file1.txt', ' this is content 2', {flag: 'a'});
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}
start();
// const getText = (path) => {
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf-8', (err, data) =>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }
// getText('./docs/file.txt')
//     .then((result) =>{
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })