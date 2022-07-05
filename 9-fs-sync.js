
console.log('Start of the program....')
const {readFileSync , writeFileSync} = require('fs')
const path = require('path')
const pathSecond = path.join(__dirname , 'content', 'second.txt')
const text = readFileSync('./content/text.txt' , 'utf8');

//Retrouver le path de second.txt afin de pouvoir le lire

console.log('Reading of the files !-) ')
const second = readFileSync(pathSecond , 'utf-8')
console.log(text , second)
console.log('Reading with success')
// const newPath = path.join(__dirname , 'content' , 'subfolder', 'newText.txt')
// writeFileSync(newPath ,
//     `Here it's a new File : ${text} | ${second}`      
// );

console.log('New file writing, Filename : filename.txt')
writeFileSync('content/filename.txt', 'Filanme File Filanme FileFilanme File this travis of uber Founder');
// console.log('New Second file : ', second);
console.log('Job is good !!!')
// consoel
