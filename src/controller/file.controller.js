const multer = require('multer');
const fs = require('fs');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });


  const uploadFile = async(req,res)=>{
    try {
        const uploadedFile = req.file;
  
        if (!uploadedFile) {
            return res.render('index', {    
                title: 'Error, debe de seleccionar un archivo' 
            });
        }

        return res.render('index', { 
            title: 'Archivo subido correctamente', filePath: uploadedFile.path 
        });
    } catch (error) {
        console.log(error)
        return res.render('index', { title: 'Ha ocurrido un error'})
    }
};