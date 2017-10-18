const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000
const hostname = 'localhost'

app.use(express.static('./public'));
app.set('views', './public/index.html');

app.use(require('method-override')());

app.get('/pdf', (req, res) => {
    let file = fs.createReadStream('./arquivo/download.pdf');
    let stat = fs.statSync('./arquivo/download.pdf');
    
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    
    file.pipe(res);
})

app.listen(port, hostname, () => {
    console.log(`Servidor ${hostname} randando na porta ${port}`)
})