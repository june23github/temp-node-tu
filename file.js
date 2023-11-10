const {readFileSync, writeFileSync} = require('fs');

const first =  readFileSync('./Docs/test.txt', 'utf-8');
console.log(first);

writeFileSync('./docs/file2.txt', 
    `Add now ${first}`, {flag: 'a'});
    