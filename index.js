const express = require("express");
const app = express();
const request = require("request");
const http = require("http");
const port = 3030;

app.use(express.json());
app.use(express.urlencoded());

//get methode
// app.get("/", (req, res) => {
let job = [
  {
    id: 1,
    nama: "John",
    umur: 24,
    pekerjaan: "Programmer",
  },
  {
    id: 2,
    nama: "Alpha",
    umur: 23,
    pekerjaan: "IT Suport",
  },
];

// res.status(200).json({
//   status:"success",
//     respone: {
//       respone: job
//     }
// }

// )



// app.get("/data/api", (req, res) => {
//   res.status(200).send({ header:req.header('host'),headers: req.headers['host'], reqget: req.get('host'),pathname: req.path, job });
// });

// app.post("/data/api", (req, res) => {
//   console.log(req.body);
//   job.push(req.body);
//   res.status(201).send(`Created user`);
// });
let nama = "hanab"
let dbnama = 'hanabi'
app.get("/",(req, res) =>{
  if (nama === dbnama){
    res.status(200).json({ name: nama, success: 'OK Request'})
  } else {
    res.status(500).json({ name: nama, error: 'Bad Request' });
  }
})

//post methode
// app.post("/", (req, res) => {
//   res.send("To Homepage");
// });

// setTimeout(() => {
//     console.log("masak rendang");
//   }, 5000);
//   setTimeout(() => {
//     console.log("masak sup");
//   }, 3000);
//   console.log("masak air panas")
//   setTimeout(() => {
//     console.log("masak mie");
//   }, 1000);

// var myPromise = new Promise (function(resolve, reject){
//   const number1 = 2;
//   const number2 = 1;

//   if(number1 === number2){
//     resolve();
//   }else{
//     reject();
//   }

// });

// myPromise
// .then(function() {
//   console.log('Number Equals, Success');
// }).catch(function() {
//  console.log('Error');
// })

// let user = "hilman";
// let email = "hilmn@gmail.com";

// var myPromise = new Promise(function (resolve, reject) {
//   const emailx = "hilman@gmail.com";

//   if (user === "hilman" && email === emailx) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// myPromise
//   .then(function () {
//     console.log(`Nama ${user} dan email ${email} Terdaftar`);
//   })
//   .catch(function () {
//     console.log(`Nama ${user} dan email ${email} Tidak Terdaftar`);
//   });

// let janji = true;

// const motor = new Promise((resolve, reject) => {
//   if (janji) {
//     setTimeout(() => {
//       resolve([
//         {
//           merk: "Honda",
//           model: "Scoopy",
//           tahun: "2023",
//         },
//       ]);
//     }, 1000);
//   } else {
//     reject("data error");
//   }
// });

// const mobil = new Promise((resolve, reject) => {
//   if (janji) {
//     setTimeout(() => {
//       resolve([
//         {
//           merk: "Daihatsu",
//           model: "Xenia",
//           tahun: "2020",
//         },
//       ]);
//     }, 500);
//   } else {
//     reject("data error");
//   }
// });

// motor
// .then(response => console.log(response))
// .catch(response => console.log(response))
// mobil
// .then(response => console.log(response))
// .catch(response => console.log(response))

// Promise.all([motor, mobil])
// .then((response) => {
//   const [motor, mobil] = response;
//   console.log(motor);
//   console.log(mobil);
// })
// .catch((response) => {
//   const [motor, mobil] = response;
//   console.log(response)
//   console.log(response)
// })

// Asynchrnous function promise

// async function f() {

//   let result = await motor;
//   let result2 = await mobil;

//   console.log(result);
//   console.log(result2);
// }

// f();

// let members = ["John Doe", "Sam Smith", "Allie Cartel"];

// function addNewMember(newUser, callback) {
//   setTimeout(function () {
//     members.push(newUser);
//     console.log("Member Added");
//     callback();
//   }, 200);
// }

// function getAllMember() {
//   setTimeout(function () {
//     console.log("Members are:");
//     console.log(members);
//   }, 100)
// }

// addNewMember("alpha", getAllMember);

// let programs = [
// {
//   "nis":1,
//   "nama":"nodejs",
// },
// {
//   "nis":2,
//   "nama":"ekpress",
// }
// ];

// function getNow(newUser, callback) {
//   setTimeout(function () {
//     programs.push(newUser);
//     console.log("Selesai Push");
//     callback();
//   }, 2000);
// }

// function getClass() {
//   setTimeout(function () {
//     console.log("Node.js dalam getClass (Baris 15):");
//     console.log(programs);
//   }, 1000)
// }

// let program = {
//   "nis":3,
//   "nama":"laravel"
// }

// getNow(program, getClass);

//HTTP request dengan menggunakan npm request methode get
//Routes
// app.get('/',(req, res) => {
//     request.get({
//       url:'https://dummyjson.com/carts',
//       json:true
// }, (error, response) => {
//     if(error) {
//       return res.send('Error Response');
//     }

//     res.send(response);
//   });
// });

// app.get('/person', (req, res) => {
//   console.log(req.query);
//   return res.json({
//     message: "Hello",
//     name: req.query.name,
//     age: req.query.age,
//     city: req.query.city,
//   });
// });

// //Methode Get / Get Request
// app.get('/api/v1/users', (req, res) => {
//   res.send({
//     message: 'Success',
//     user: job,
//   });
// });

// // Methode Get / Get Request By Params
// app.get('/api/v1/users/:id', (req, res) => {
//   const { id: jobsId } = req.params;
//   const user = job.filter((user) => user.id === parseInt(jobsId))[0];
//   if (!user) {
//     return res.status(404).send({ message: "User Not Found" });
//   }
//   res.send({ 
//     message: 'Success',
//     user });
// });

//live server port
app.listen(port, () => {
  1;
  console.log(`Example app listening at port ${port}`);
});
