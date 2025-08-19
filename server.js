// // Import the built-in http package.
// const http = require('http')

// //now start creating the server
// const server = http.createServer((request,response)=>{
//     console.log("Request received by server")
//     response.write('Hello Ayush Sahu')
//     response.end()

// })
// server.listen(3000,'localhost',()=>{// here localhost indicates domain name
//     console.log('Listening to port 3000')
// })



// Import the built-in http package.
//const http = require('http')
// const fs = require("fs")

// //now start creating the server
// const server = http.createServer((request,response)=>{
//     console.log("Request received by server")
//     fs.readFile('./index.html',(err , data)=>{
//       if(err){
//         console.log(err);
//         response.write('Error in serving page. Try later.')
//         response.end()
//       }
//       else{
//         response.end(data)
//       }
//     })
  

// })
// server.listen(3000,'localhost',()=>{// here localhost indicates domain name
//     console.log('Listening to port 3000')
// })




// // Import the built-in http package.
// const http = require('http')
// const fs = require("fs")

// //now start creating the server
// const server = http.createServer((request,response)=>{
//     console.log("Request received by server")
//     //initial root path
//     let path = './'
//     let status = '200'
//     switch(request.url)//what url is user currently
//     {
    
//         case '/':
//             path += 'index.html';
//             break;
//         case '/home':
//             path += 'index.html';
//             break;
//         case '/about'://if request.url contains /about then about.html module will be visible
//             path += 'about.html';
//             break;
//         case '/contact':
//             path += 'contact.html';   
//             break;

//         default:
//             path += '404.html'
//             status = '404'
//             break;

//     }     
//     fs.readFile(path,(err , data)=>{
//       if(err){
//         console.log(err);
//         response.statusCode = 500//server side error
//         response.write(`Error in serving page for path ${request.url}. Try later.`)
//         response.end()
//       }
//       else{
//         response.statusCode = status
//         response.end(data)
//       }
//     })
  

// })
// server.listen(3000,'localhost',()=>{// here localhost indicates domain name
//     console.log('Listening to port 3000')
// })




// // Import the built-in http package.
// const http = require('http')
// const fs = require("fs")
// const url = require('url')
// const querystring = require('querystring')



// //now start creating the server
// const server = http.createServer((request,response)=>{
//     console.log("Request received by server",request.url, request.method)

//     if(request.method === 'POST'){
//         let body = ''

//         request.on('data', (chunk)=>{
//              body += chunk.toString();
//         })
//         request.on('end', ()=>{
//             const dataOfBody = JSON.parse(body)
//             console.log(dataOfBody)
//             response.end(JSON.stringify(dataOfBody))
//         })
//     }
//     else{
//         response.statusCode = 402
//         response.end("Invalid request")
//     }
// })
// server.listen(3000,'localhost',()=>{// here localhost indicates domain name
//     console.log('Listening to port 3000')
// })





// // Import the built-in http package.
// const http = require('http')
// const fs = require("fs")
// const url = require('url')
// const querystring = require('querystring')

// //now start creating the server
// const server = http.createServer((request,response)=>{
//     console.log("Request received by server",request.url, request.method)

//     if(request.method === 'POST'){
//         let body = ''

//         request.on('data', (chunk)=>{
//              body += chunk.toString();
//         })
//         request.on('end', ()=>{
//             const dataOfBody = JSON.parse(body)
//             console.log(dataOfBody)
//             response.end(`Hi my name is ${dataOfBody.name} and  my age is ${dataOfBody.age}`)
//         })
//     }
//     else{
//         response.statusCode = 402
//         response.end("Invalid request")
//     }
// })
// server.listen(3000,'localhost',()=>{// here localhost indicates domain name
//     console.log('Listening to port 3000')
// })






// Import the built-in http package.
const http = require('http')
const fs = require("fs")
const url = require('url')
const querystring = require('querystring')

//now start creating the server
const server = http.createServer((request,response)=>{
    console.log("Request received by server",request.url, request.method)

    if(request.method === 'POST'){
        let body = ''

        request.on('data', (chunk)=>{
             body += chunk.toString();
        })
        request.on('end', ()=>{
            const dataOfBody = JSON.parse(body)
           switch(dataOfBody.event){
            case 'add':
                response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 + dataOfBody.num2}`)
                    break
            case 'subtract':
                response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 - dataOfBody.num2}`)
                    break
            case 'multiply':
                response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 * dataOfBody.num2}`)
                    break
            case 'divide':
                response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 / dataOfBody.num2}`)
                    break

            default:
                response.statusCode = 404
                    response.end("Event not found")  
                    break
            
                

           }
        })
    }
    else{
        response.statusCode = 402
        response.end("Invalid request")
    }
})
server.listen(3000,'localhost',()=>{// here localhost indicates domain name
    console.log('Listening to port 3000')
})








