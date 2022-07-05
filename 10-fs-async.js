
const {readFile , writeFile} = require('fs')
const path = require('path');

const pathFileSecond = path.join(__dirname , 'content' , 'second.txt');
const pathNewText = path.join(__dirname , 'content' , 'subfolder', 'newText.txt')

// console.log(pathFile)

console.log('Start')
readFile(pathFileSecond , 'utf-8' , (err , resultat) =>{
    if(err){
        console.log(err)
        return;
    }
    const first = resultat;

    readFile(pathNewText , 'utf-8' , (err , resultat) =>{
        if(err){
            console.log(err)
            return;
        }
        const second = resultat;

        console.log('Writing of the file !-)')
        writeFile(path.join(__dirname,'content','subfolder','fileWrited.txt') ,
            ` || -- Add this file with again : ${first} ---- ${second} ` , (err , resultat) =>{
                if(err){
                    console.log(err)
                    return;
                }
                console.log('Task done with success !!')
            }
        )
    })

})

// const fileWrited = path.join(__dirname , 'content' , 'subfolder' , 'fileWrited.txt');

// readFile(fileWrited , 'utf-8' , (err , resultat) =>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(resultat)
// })