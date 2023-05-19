const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("http");
let app = express();
const router = express.Router()
const port = 3030;

// 

//app.use(express.static('views'));

// 

//aplication middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now() + ' Aplicattion middlewar')
    next()
  })


  // Error Handling
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(404).send('Bad Request')
    next()
  })



// Built-in Middleware
app.use(express.static(path.join(__dirname, "views")));
app.use(express.json());
app.use(express.urlencoded());



app.get("/", (req, res) => {
    try {
        res.status(200).sendFile("index.html")
      }
      catch(err) {
        throw new Error(err)
      }
});

// Third Party Middleware
//app.use(bodyParser.urlencoded({ extended: true })); // Untuk parsing data formulir yang dikodekan URL

let data = []

app.post("/", (req, res) => {

console.log(req.body)
//   let Title = req.body.title;
//   let Date = req.body.date;
//   let Time = req.body.time;
//   let Row  = req.body.row;
//   let Seat = req.body.seat
//   let Studio = req.body.studio
//   let Price = req.body.price
//   let Alamats = req.body.alamat;


data.push(req.body) // Mendapatkan data dari req.body
console.log(data)



  return res.status(200)
  .json({  status: "Successfully",
  data })
  
});

// app.get('/home',(req, res, next) =>{
//      res.send({
//         status: "Successfully",
//         data:
//         {
//             data : data
//         }
//     })
//     next()
// })

// app.use('/home',(req, res, next) => {
//     console.log('Time:', Date.now() + ' routing middlewar')
//   next()
// })


// app.get('/admin',(req, res) => {
//     res.send('ini halaman admin')
// })


//mid prorammer zaman now
// const logger = (req, res, next) =>{
//     console.info(`Receive request: ${req.method} ${req.originalUrl}`);
//     next()
// };

// const addPoweredHeader = (req, res, next) => {
//     res.set('X-Powered-By', 'Programmer Zaman Now');
//     next()
// }

// app.use(logger);
// app.use(addPoweredHeader);
// app.get('/', (req,res) => {
//     res.send("Hello response")
// });

// const respone = await request(app).get('/');
// expect(respone.get('X-Powered-By')).toBe('Programmer Zaman Now');
// expect(respone.text).toBe('Hello Response');


// const apiKeyMiddleware = (req, res, next) => {
//     if(req.query.apiKey){
//         next();
//     } else {
//         res.status(401).end()
//     }
// }

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
