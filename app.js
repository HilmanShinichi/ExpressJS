const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { request } = require("http");
let app = express();
const router = express.Router();
const port = 3030;

const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "mongoTrainer";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi Gagal!");
  }

  console.log("Koneksi berhasil");

  // Pilih database
  const db = client.db(dbName);
  const collection = db.collection("dataKaryawan")

  //Menambahkan 1 data ke collection
  //   db.collection("dataKaryawan").insertMany(
  //     [
  //       {
  //         nik: "1",
  //         nama: "Putin",
  //         divisi: "IT Support",
  //       },
  //       {
  //         nik: "2",
  //         nama: "Amir",
  //         divisi: "FrontEnd",
  //       },
  //       {
  //         nik: "3",
  //         nama: "Budi",
  //         divisi: "Backend",
  //       },
  //       {
  //         nik: "4",
  //         nama: "Karim",
  //         divisi: "Helper",
  //       },
  //       {
  //         nik: "5",
  //         nama: "Ivan",
  //         divisi: "HR",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Gagal Menambahkan data!");
  //       }
  //       console.log(result);
  //     }
  //   );

  // Mengubah data ke collection
  //   db.collection("Users").updateOne(
  //     {
  //       _id: ObjectId("646b0be34640ed32a4791ff0"),
  //     },
  //     {
  //       $set: {
  //         nama: "Andri",
  //         umur:"21",
  //         alamat:"jakarta"
  //       }
  //     },

  //       (error, result) => {
  //       if(error){
  //           return console.log('Gagal Mengubah data!')
  //       }
  //       console.log("Berhasil Mengubah data")

  //       }

  //     );

  // Mengubah data ke collection lebih dari 1
  //   db.collection("Users").updateMany(
  //     {
  //       nama:"Ibnu",
  //     },
  //     {
  //       $set: {
  //         nama:"Andri"
  //       }
  //     },

  //       (error, result) => {
  //       if(error){
  //           return console.log('Gagal Mengubah data!')
  //       }
  //       console.log("Berhasil Mengubah data")

  //       }

  //     );

  // Menghapus 1 data
  // db.collection('Users').deleteOne(
  //     {
  //         _id: ObjectId("646b2052f70d3a38385beb2a"),
  //     },
  //     (error, result) => {
  //               if(error){
  //                   return console.log('Gagal Menghapus data!')
  //               }
  //               console.log("Berhasil Menghapus  data")

  //               }

  //             );

  // menghapus data lebih dari 1
  // db.collection('Users').deleteMany(
  //     {
  //         nama:"Andri",
  //     },
  //     (error, result) => {
  //               if(error){
  //                   return console.log('Gagal Menghapus data!')
  //               }
  //               console.log("Berhasil Menghapus  data")

  //               }

  //             );



app.get("/Users", async (req, res) => {
  const doc = await collection.find({}).toArray();
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
