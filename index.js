const hostname = '127.0.0.1'
const port = 3000
const fs = require('fs')
const pdf = require('pdf-parse')
const rq = require("request-promise-native")

const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("El servidor está inicializado en: " + 'http://' + hostname + ':' + port)
});

async function downloadPDF(pdfURL, outputFilename) {
    let pdfBuffer = await rq.get({ uri: pdfURL, encoding: null })
    console.log("PDF descargado... " + outputFilename + "...")
    fs.writeFileSync(outputFilename, pdfBuffer)
}

app.get('/', function (req, res) {
    res.send('Saludos desde express')
});

app.get('/bajar', function (req, res) {
    res.send('Bajando pdf')
    var dir = './MAGA'

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
    downloadPDF("https://www.maga.gob.gt/download/modint-ene20.pdf", "./MAGA/modint-ene20.pdf");
});

app.get('/leer', function (req, res) {
    res.send('Leer pdf')
    let dataBuffer = fs.readFileSync('./MAGA/modint-ene20.pdf')

    pdf(dataBuffer).then(function (data) {

        // numero de paginas
        console.log(data.numpages)
        // informaciòn de PDF
        console.log(data.info)
        // datos de PDF
        console.log(data.text);

    })
        .catch(function (error) {
            console.log('error')
        })
});

    // Install 
        // npm install -g nodemon

    // Run
        // npm install
        // npm start

