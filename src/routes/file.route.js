const { Router } = require('express');
const { upload ,uploadFile,processFile} = require('../controller/file.controller');


const router = Router();


router.post('/upload', upload.single('file'), uploadFile)
router.post('/process', processFile)

router.get("/", (req, res) => {
    res.render('index', {titulo: 'Suba un archivo'})
  });

router.get(['/upload', '/process'], (req, res) => {
    res.render('index', { titulo: 'Suba un archivo' });
});
  
  

module.exports = router;
