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





//Calculator API's with node js
// Import the built-in http package (to create a web server)
const http = require('http')

// Import the built-in fs (file system) package (not used in this code yet, but can be used for reading/writing files)
const fs = require("fs")

// Import url and querystring modules (also not used in this code, but useful for handling URLs and queries)
const url = require('url')
const querystring = require('querystring')

// Create the server
const server = http.createServer((request, response) => {
    console.log("Request received by server", request.url, request.method)

    // Check if the incoming request is POST (because we expect data to come in the body)
    if (request.method === 'POST') {
        let body = ''   // a variable to store incoming request data (chunks)

        // 'data' event → triggered whenever a chunk of data arrives
        request.on('data', (chunk) => {
            body += chunk.toString();  // convert chunk to string and add to body
        })

        // 'end' event → triggered when all data has been received
        request.on('end', () => {
            // Parse the complete body (JSON string → JS object)
            const dataOfBody = JSON.parse(body)

            // Check the "event" field from the request body to decide which operation to do
            switch (dataOfBody.event) {
                case 'add':
                    // If event = add → perform addition
                    response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 + dataOfBody.num2}`)
                    break
                case 'subtract':
                    // If event = subtract → perform subtraction
                    response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 - dataOfBody.num2}`)
                    break
                case 'multiply':
                    // If event = multiply → perform multiplication
                    response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 * dataOfBody.num2}`)
                    break
                case 'divide':
                    // If event = divide → perform division
                    response.end(`Value of Event ${dataOfBody.event} is ${dataOfBody.num1 / dataOfBody.num2}`)
                    break
                default:
                    // If event is not one of the above → return 404 (not found)
                    response.statusCode = 404
                    response.end("Event not found")
                    break
            }
        })
    }
    else {
        // If request is NOT POST → return status 402 and message
        response.statusCode = 402
        response.end("Invalid request")
    }
})

// Make the server listen on port 3000 at "localhost"
server.listen(3000, 'localhost', () => {
    console.log('Listening to port 3000')
})










