var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer');
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'), (req, res)=>{
  let fileData = {};
  fileData['name'] = req.file.originalname;
  fileData['type'] = req.file.mimetype;
  fileData['size'] = req.file.size;
  res.json(fileData);
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
