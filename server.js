const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("http");
let app = express();
const port = 3030;

// app.use(express.json());
// app.use(express.urlencoded());

// app.use(express.static(path.join(__dirname, "views")));


// app.get("/", (req, res) => {
//     try {
//         res.status(200).sendFile("index.html")
//       }
//       catch(err) {
//         res.status(400).json({ err:err})
//       }
// });

// app.use(bodyParser.urlencoded({ extended: true }));

// let data = []

// app.post("/", (req, res) => {


//   let Namas = req.body.nama;
//   let Umurs = req.body.umur;
//   let Alamats = req.body.alamat;


//   data.push(req.body)
//   try {
//        return res.status(200).redirect('/home')
    //    .json({
    //         status: "Successfully",
    //         data: {
    //           nama: Namas,
    //           umur: Umurs,
    //           alamat: Alamats,
    //         },
    //       })
//   }
//   catch(err) {
//     res.status(400).json({ err:err})
//   }
// });

// app.get('/home',(req, res, next) =>{
//  res.send({
//         status: "Successfully",
//         data:
//         {
//             data : data
//         }
//     })
//     next()
// })

// app.use('/home', (req,res) => {
//     res.format({
//         text () {
//           res.send('hey')
//         },
// })})

const logger = (req, res, next) =>{
    console.info(`Receive request: ${req.method} ${req.originalUrl}`);
    next()
};

const addPoweredHeader = (req, res, next) => {
    res.set('X-Powered-By', 'Programmer Zaman Now');
    next()
}

app.use(logger);
app.use(addPoweredHeader);
app.get('/', (req,res) => {
    res.send("Hello response")
});

const respone = await request(app).get('/');
expect(respone.get('X-Powered-By')).toBe('Programmer Zaman Now');
expect(respone.text).toBe('Hello Response');


const apiKeyMiddleware = (req, res, next) => {
    if(req.query.apiKey){
        next();
    } else {
        res.status(401).end()
    }
}

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
