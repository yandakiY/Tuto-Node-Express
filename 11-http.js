
const http = require('http');

const server =  http.createServer((req , res) =>{
    // res.write('THis is my home page. :-)');
    // res.end('res end');

    if(req.url === '/'){
        res.end('This my home page')
    }else if(req.url === '/about'){
        res.end('This is about page, you can view the historic of navigation!!')
    }else{
        res.end(
            `
            <h1>Oops !!!</h1>
            <p>Error 404 : Page not found</p>
            `
        )
    }
    
})

server.listen(5500 , () =>{
    console.log(`Server launched : http://localhost:5500`)
})
