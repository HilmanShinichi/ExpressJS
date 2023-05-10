const express = require("express");
const app = express();
const port = 3030;

//get methode
app.get("/", (req, res) => {
let job = [
  {
    nama: "John",
    umur: 24,
    pekerjaan: "Programmer",
  },
  {
    nama: "Alpha",
    umur: 23,
    pekerjaan: "IT Suport",
  }
]

res.status(200).json({
  status:"success",
    respone: {
      respone: job
    }
}
  
)
  
});

//post methode
app.post("/", (req, res) => {
  res.send("To Homepage");
});

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

//live server port
app.listen(port, () => {
  1;
  console.log(`Example app listening at port ${port}`);
});
