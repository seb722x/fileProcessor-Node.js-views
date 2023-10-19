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










const calculateCharCount = (data) => {
    try {
        return data.length;
    } catch (error) {
        console.error('Error calculating character count:', error);
        return {};
    }
};

const analyzeWordFrequency = (data) => {
    try {
        const words = data.split(/\s+/).filter(word => word.length > 0);
        const wordFrequency = {};

        words.forEach(word => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });

        return wordFrequency;
    } catch (error) {
        console.error('Error analyzing word frequency:', error);
        return {};
    }
};

const analyzeSentiment = (data) => {
    try {
        const Sentiment = require('sentiment');
        const sentiment = new Sentiment();
        return sentiment.analyze(data);
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        return {};
    }
};
