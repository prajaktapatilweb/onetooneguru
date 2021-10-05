const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const ObjectsToCsv = require('objects-to-csv');
const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars')
const nodemailer = require("nodemailer");
const path = require('path');
const { getMaxListeners } = require("process");
const Datecal =require('./Datecal');
const port = process.env.PORT || 3001;

//const fetch = require('node-fetch');

app.use(cors());
app.use(express.json());
//Local Host
// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "onetooneguru"
// });
app.use(express.static(path.join(__dirname, 'client/build')));
app.post("/registerteacher", (req, res) => {
    const id = '';
    const dateTime = Datecal.datacal();
    //console.log(dateTime);
    const name = req.body.name;
    const email = req.body.email;
    const mobileno = req.body.mobileno;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const eduqual = req.body.eduqual;
    const onteachexp = req.body.onteachexp;
    const offteachexp = req.body.offteachexp;
    const higherclass = req.body.higherclass;
    const subjects = req.body.subjects;
    const examinations = req.body.examinations;
    const aboutus = req.body.aboutus;
    const laptop = req.body.laptop;
    const broadband = req.body.broadband;

    var arraydata = [{ 'ApplicationID': id, 'Date': dateTime, 'Name': name, 'Email': email, 'Phone': mobileno, 'City': city, 'Pincode': pincode, 'Qualification': eduqual, 'ONTeachExp': onteachexp, 'OFFTeachExp': offteachexp, 'Class': higherclass, 'Subjects': subjects, 'Examinations': examinations, 'Advertise': aboutus, 'Laptop': laptop, 'Broadband': broadband }];

    const csv = new ObjectsToCsv(arraydata).toDisk('./teacherreg.csv', { append: true })
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzmloCFAG5YDP0cwEC7fYfOkPREaZnv8l1ineNbbRATNrdhIhnIt2vjimjsoR23p3s4/exec'
    // //const form = arraydata
    // fetch(scriptURL, { method: 'POST', body: JSON.stringify(arraydata)})
    // .then(response => "Thanks for Contacting us..! We Will Contact You Soon...")
    // .catch(error => console.error('Error!', error.message))

    db.query(
        "INSERT INTO teacher_regisrtation VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [dateTime, name, email, mobileno, city, pincode, eduqual, onteachexp, offteachexp, higherclass, subjects, examinations, aboutus, laptop, broadband],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/enrollstudent", (req, res) => {
    const id = '';
    const dateTime = Datecal.datacal();
    const name = req.body.name;
    const mobileno = req.body.mobileno;
    const city = req.body.city;
    const grade = req.body.grade;
    const subjects = req.body.subjects;
    const examinations = req.body.examinations;
    const services = req.body.services;

    var arraydata = [{ 'ApplicationID': id, 'Date': dateTime, 'Name': name, 'Phone': mobileno, 'City': city, 'Class/Grade': grade, 'Subjects': subjects, 'Examinations': examinations ,'Services':services}];

    const csv = new ObjectsToCsv(arraydata).toDisk('./studentsreg.csv', { append: true })

    db.query(
        "INSERT INTO student_registration VALUES (NULL,?,?,?,?,?,?,?,?)",
        [dateTime, name, mobileno, city, grade, subjects, examinations,services],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.post("/contactus", (req, res) => {
    const id = '';
    const dateTime = Datecal.datacal();
    const name = req.body.name;
    const email = req.body.email;
    const mobileno = req.body.mobileno;
    const subject = req.body.subject;
    const message = req.body.message;

    var arraydata = [{ 'Contact ID': id, 'Date': dateTime, 'Name': name, 'Email': email, 'Phone': mobileno, 'Subject': subject, 'Message': message }];

    const csv = new ObjectsToCsv(arraydata).toDisk('./contactdetail.csv', { append: true })

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
app.listen(port, () => {
    console.log("Yey, your server is running on port",port);
});